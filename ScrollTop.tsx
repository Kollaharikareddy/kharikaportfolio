import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function ScrollTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!show) return null;
  return (
    <button
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="btn-glow fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full text-white"
    >
      <ArrowUp size={20} />
    </button>
  );
}
