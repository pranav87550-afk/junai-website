'use client';

import { useEffect, useRef } from 'react';

/**
 * Signature visual: a slowly drifting node-graph.
 * This isn't decoration — it's a literal, understated depiction of the
 * screen-graph JunAI builds internally (screens/elements/edges) to reason
 * about intent. Nodes pulse; edges connect nearby nodes with a faint line.
 */
export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    interface Node {
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
      phase: number;
    }

    let nodes: Node[] = [];

    function resize() {
      if (!canvas) return;
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx?.setTransform(dpr, 0, 0, dpr, 0, 0);

      const density = Math.min(60, Math.max(24, Math.floor((width * height) / 28000)));
      nodes = Array.from({ length: density }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
        r: Math.random() * 1.6 + 0.6,
        phase: Math.random() * Math.PI * 2
      }));
    }

    let raf = 0;
    let t = 0;

    function frame() {
      if (!ctx) return;
      t += 0.008;
      ctx.clearRect(0, 0, width, height);

      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;
      }

      const linkDist = 140;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < linkDist) {
            const alpha = (1 - dist / linkDist) * 0.12;
            ctx.strokeStyle = `rgba(224, 32, 46, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      for (const n of nodes) {
        const pulse = 0.5 + 0.5 * Math.sin(t * 2 + n.phase);
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r + pulse * 0.6, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(224, 32, 46, ${0.25 + pulse * 0.35})`;
        ctx.fill();
      }

      raf = requestAnimationFrame(frame);
    }

    resize();
    window.addEventListener('resize', resize);

    if (!prefersReducedMotion) {
      raf = requestAnimationFrame(frame);
    } else {
      // Draw a single static frame so the graph still reads on the page.
      frame();
      cancelAnimationFrame(raf);
    }

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full opacity-70"
    />
  );
}
