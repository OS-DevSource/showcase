import { useEffect, useRef } from "react";

// Tracks pointer position and eases it with rAF so the glow follows smoothly.
export function useCursorGlow(active: boolean) {
  const frameRef = useRef<number | null>(null);
  const targetRef = useRef({ x: 0.5, y: 0.2 });
  const currentRef = useRef({ x: 0.5, y: 0.2 });

  useEffect(() => {
    if (!active) return;
    const root = document.documentElement;

    const update = () => {
      currentRef.current.x += (targetRef.current.x - currentRef.current.x) * 0.08;
      currentRef.current.y += (targetRef.current.y - currentRef.current.y) * 0.08;
      root.style.setProperty("--glow-x", `${currentRef.current.x * 100}%`);
      root.style.setProperty("--glow-y", `${currentRef.current.y * 100}%`);
      frameRef.current = requestAnimationFrame(update);
    };

    const onMove = (event: PointerEvent) => {
      const x = event.clientX / window.innerWidth;
      const y = event.clientY / window.innerHeight;
      targetRef.current = { x, y };
    };

    frameRef.current = requestAnimationFrame(update);
    window.addEventListener("pointermove", onMove, { passive: true });

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      window.removeEventListener("pointermove", onMove);
    };
  }, [active]);
}
