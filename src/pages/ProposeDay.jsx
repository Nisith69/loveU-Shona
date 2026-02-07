import { useEffect, useState } from "react";
import cutie1 from "../assets/cutie1.jpg";

const letterLines = [
  "From the day you came into my life… 💖",
  "Everything became softer, warmer, happier ✨",
  "Your smile is my favorite place 😌",
  "Your voice is my comfort ❤️",
  "With you, every moment feels like love 💕"
];

export default function ProposeDay() {
  const [text, setText] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [showFinal, setShowFinal] = useState(false);
  const [showPhoto, setShowPhoto] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const [noPos, setNoPos] = useState({ top: "0px", left: "0px" });

  useEffect(() => {
    if (lineIndex >= letterLines.length) {
      setTimeout(() => setShowPhoto(true), 800);
      setTimeout(() => setShowFinal(true), 2200);
      return;
    }

    if (charIndex < letterLines[lineIndex].length) {
      const t = setTimeout(() => {
        setText(prev => prev + letterLines[lineIndex][charIndex]);
        setCharIndex(charIndex + 1);
      }, 60);
      return () => clearTimeout(t);
    } else {
      setTimeout(() => {
        setText(prev => prev + "\n\n");
        setLineIndex(lineIndex + 1);
        setCharIndex(0);
      }, 800);
    }
  }, [charIndex, lineIndex]);

  const moveNo = () => {
    setNoPos({
      top: Math.random() * 120 - 60 + "px",
      left: Math.random() * 120 - 60 + "px"
    });
  };

  return (
    <div className="page">
      <div className="card">
        <h1>💌 A Letter From My Heart</h1>

        <pre className="love-letter">{text}</pre>

        {showPhoto && (
          <img src={cutie1} className="proposal-photo fade-img" />
        )}

        {showFinal && !accepted && (
          <>
            <h2 className="final-proposal">
              💍 Will you be mine forever, Shona? 💖
            </h2>

            <div className="proposal-buttons">
              <button
                className="yes-btn"
                onClick={() => setAccepted(true)}
              >
                YES 💖
              </button>

              <button
                className="no-btn"
                style={{ top: noPos.top, left: noPos.left }}
                onMouseEnter={moveNo}
                onClick={moveNo}
              >
                NO 🙈
              </button>
            </div>
          </>
        )}

        {accepted && (
          <div className="accepted">
            <h2>😭💖 SHE SAID YES!!! 💍</h2>
            <p>You are my forever, Shona ❤️</p>
          </div>
        )}
      </div>
    </div>
  );
}
