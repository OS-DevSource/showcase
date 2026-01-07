"use client";

import { useEffect, useRef } from "react";

// Subtle animated wash, kept lightweight and only runs client-side.
export function AmbientCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let frame = 0;
    let width = 0;
    let height = 0;
    let t = 0;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      width = parent.clientWidth;
      height = parent.clientHeight;
      const scale = window.devicePixelRatio || 1;
      canvas.width = width * scale;
      canvas.height = height * scale;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(scale, 0, 0, scale, 0, 0);
    };

    const draw = () => {
      t += 0.003;
      ctx.clearRect(0, 0, width, height);
      const gradient = ctx.createRadialGradient(
        width * (0.4 + Math.sin(t) * 0.05),
        height * (0.2 + Math.cos(t) * 0.05),
        width * 0.1,
        width * 0.5,
        height * 0.5,
        width * 0.7
      );
      gradient.addColorStop(0, "rgba(90, 215, 255, 0.25)");
      gradient.addColorStop(0.5, "rgba(74, 88, 255, 0.18)");
      gradient.addColorStop(1, "rgba(255, 110, 72, 0.08)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
      frame = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(frame);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 opacity-70" aria-hidden="true" />;
}
