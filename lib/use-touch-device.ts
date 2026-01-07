import { useEffect, useState } from "react";

export function useTouchDevice() {
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(pointer: coarse)");
    const update = () => setIsTouch(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return isTouch;
}
