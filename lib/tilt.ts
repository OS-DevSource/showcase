import { useEffect, useRef } from "react";

// Lightweight tilt effect that updates CSS variables on pointer move.
export function useTilt(active: boolean) {
  const ref = useRef<HTMLDivElement | null>(null);
  const frame = useRef<number | null>(null);

  useEffect(() => {
    if (!active || !ref.current) return;
    const node = ref.current;

    const onMove = (event: PointerEvent) => {
      const rect = node.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      const tiltX = Math.max(Math.min(y * -8, 8), -8);
      const tiltY = Math.max(Math.min(x * 8, 8), -8);

      if (frame.current) cancelAnimationFrame(frame.current);
      frame.current = requestAnimationFrame(() => {
        node.style.setProperty("--tilt-x", `${tiltX}deg`);
        node.style.setProperty("--tilt-y", `${tiltY}deg`);
      });
    };

    const onLeave = () => {
      node.style.setProperty("--tilt-x", "0deg");
      node.style.setProperty("--tilt-y", "0deg");
    };

    node.addEventListener("pointermove", onMove);
    node.addEventListener("pointerleave", onLeave);

    return () => {
      node.removeEventListener("pointermove", onMove);
      node.removeEventListener("pointerleave", onLeave);
    };
  }, [active]);

  return ref;
}
