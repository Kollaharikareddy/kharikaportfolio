import { useEffect, useState } from "react";

export function Loader() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1100);
    return () => clearTimeout(t);
  }, []);
  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-700 ${
        done ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center gap-4">
        <div className="relative h-20 w-20">
          <div className="absolute inset-0 rounded-full border-2 border-[color:var(--glow-purple)] border-t-transparent animate-spin" />
          <div className="absolute inset-2 rounded-full border-2 border-[color:var(--glow-pink)] border-b-transparent animate-spin [animation-direction:reverse] [animation-duration:1.5s]" />
          <div className="absolute inset-0 flex items-center justify-center font-display text-lg font-bold text-gradient">
            KH
          </div>
        </div>
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Loading portfolio</p>
      </div>
    </div>
  );
}
