import { useEffect, useState } from "react";

const promises = [
  "I promise to protect your heart 🤍",
  "I promise to stay when things get hard",
  "I promise to grow with you, not away",
  "I promise to choose you every single day",
];

export default function PromiseDay() {
  const [text, setText] = useState("");
  const [line, setLine] = useState(0);
  const [char, setChar] = useState(0);
  const [locked, setLocked] = useState(true);
  const [forever, setForever] = useState(false);

  useEffect(() => {
    if (line >= promises.length) {
      setTimeout(() => setLocked(false), 1200);
      setTimeout(() => setForever(true), 2600);
      return;
    }

    if (char < promises[line].length) {
      const t = setTimeout(() => {
        setText((p) => p + promises[line][char]);
        setChar(char + 1);
      }, 55);
      return () => clearTimeout(t);
    } else {
      setTimeout(() => {
        setText((p) => p + "\n\n");
        setLine(line + 1);
        setChar(0);
      }, 900);
    }
  }, [char, line]);

  return (
    <div className="page promise">
      <div className="card">
        <h1>💍 Promise Day 💍</h1>

        <p className="promise-intro">
          These aren’t just words…  
          they are promises written from my heart 💗
        </p>

        {/* Handwritten + Typewriter */}
        <pre className="handwritten">{text}</pre>

        {/* Lock Animation */}
        <div className={`lock-box ${locked ? "locked" : "unlocked"}`}>
          {locked ? "🔒 Promise Locked" : "🔓 Promise Unlocked"}
        </div>

        {forever && (
          <h2 className="forever-text fade-img">
            🔐 Promised. Sealed. Forever. ♾️❤️
          </h2>
        )}
      </div>
    </div>
  );
}
