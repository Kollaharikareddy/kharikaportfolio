import { useEffect, useState } from "react";

export function TypingText({ words }: { words: string[] }) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const current = words[i % words.length];
    const speed = del ? 50 : 100;
    const t = setTimeout(() => {
      if (!del && text === current) {
        setTimeout(() => setDel(true), 1400);
        return;
      }
      if (del && text === "") {
        setDel(false);
        setI((x) => x + 1);
        return;
      }
      setText(del ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1));
    }, speed);
    return () => clearTimeout(t);
  }, [text, del, i, words]);

  return (
    <span className="text-gradient">
      {text}
      <span className="caret ml-0.5 text-[color:var(--glow-pink)]">|</span>
    </span>
  );
}
