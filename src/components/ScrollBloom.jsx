import { useEffect, useState } from "react";

export default function ScrollBloom() {
  const [y, setY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setY(window.scrollY * 0.5);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="scroll-bloom"
      style={{ transform: `translate(-50%, ${y}px)` }}
    />
  );
}
