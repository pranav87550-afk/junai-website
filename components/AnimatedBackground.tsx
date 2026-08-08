'use client';

import { useEffect, useRef } from 'react';

/**
 * Signature visual: a quiet starfield with the occasional falling star
 * streaking across — an ambient, "always watching, always learning"
 * backdrop rather than a literal diagram.
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

    interface Star {
      x: number;
      y: number;
      r: number;
      baseAlpha: number;
      phase: number;
      speed: number;
    }

    interface Meteor {
      x: number;
      y: number;
      len: number;
      speed: number;
      angle: number;
      life: number;
      maxLife: number;
    }

    let stars: Star[] = [];
    let meteors: Meteor[] = [];
    let nextMeteorIn = 0;

    function resize() {
      if (!canvas) return;
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx?.setTransform(dpr, 0, 0, dpr, 0, 0);

      const density = Math.min(160, Math.max(70, Math.floor((width * height) / 9000)));
      stars = Array.from({ length: density }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.1 + 0.3,
        baseAlpha: Math.random() * 0.5 + 0.25,
        phase: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.6 + 0.4
      }));
    }

    function spawnMeteor() {
      meteors.push({
        x: Math.random() * width * 0.8 + width * 0.1,
        y: -20,
        len: Math.random() * 90 + 60,
        speed: Math.random() * 5 + 6,
        angle: (Math.PI / 180) * (58 + Math.random() * 10),
        life: 0,
        maxLife: 60
      });
      nextMeteorIn = Math.random() * 260 + 160;
    }

    let raf = 0;
    let t = 0;

    function frame() {
      if (!ctx) return;
      t += 1;
      ctx.clearRect(0, 0, width, height);

      for (const s of stars) {
        const twinkle = 0.5 + 0.5 * Math.sin(t * 0.02 * s.speed + s.phase);
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(243, 242, 240, ${s.baseAlpha * twinkle})`;
        ctx.fill();
      }

      nextMeteorIn -= 1;
      if (nextMeteorIn <= 0) spawnMeteor();

      meteors = meteors.filter((m) => m.life < m.maxLife && m.y < height + 100);
      for (const m of meteors) {
        m.life += 1;
        m.x += Math.cos(m.angle) * m.speed;
        m.y += Math.sin(m.angle) * m.speed;
        const alpha = 1 - m.life / m.maxLife;

        const tailX = m.x - Math.cos(m.angle) * m.len;
        const tailY = m.y - Math.sin(m.angle) * m.len;

        const gradient = ctx.createLinearGradient(m.x, m.y, tailX, tailY);
        gradient.addColorStop(0, `rgba(255, 255, 255, ${alpha})`);
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1.6;
        ctx.beginPath();
        ctx.moveTo(m.x, m.y);
        ctx.lineTo(tailX, tailY);
        ctx.stroke();
      }

      raf = requestAnimationFrame(frame);
    }

    resize();
    window.addEventListener('resize', resize);

    if (!prefersReducedMotion) {
      nextMeteorIn = Math.random() * 200 + 60;
      raf = requestAnimationFrame(frame);
    } else {
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
      className="pointer-events-none absolute inset-0 h-full w-full opacity-80"
    />
  );
}
