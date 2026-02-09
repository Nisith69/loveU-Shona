import { useState } from "react";
import teddy from "../assets/teddy.jpg"; // add your teddy image in assets

const hugMessages = [
  "Come here… I’m hugging you 🤍🧸",
  "Whenever you feel low, I’m with you 💕",
  "You’re safe in my arms 🫂",
  "This hug is just for you 😌",
  "I’ll never let you feel alone 🧸❤️"
];

export default function TeddyDay() {
  const [message, setMessage] = useState("");
  const [hugged, setHugged] = useState(false);

  const handleHug = () => {
    const random =
      hugMessages[Math.floor(Math.random() * hugMessages.length)];
    setMessage(random);
    setHugged(true);
  };

  return (
    <div className="page">
      <div className="card">
        <h1>🧸 Happy Teddy Day 🧸</h1>

        <img
          src={teddy}
          alt="teddy"
          className={`proposal-photo ${hugged ? "fade-img" : ""}`}
        />

        <p className="love-letter">
          This teddy carries my warmth, my care,
          and all the hugs I can’t give you right now 🤍
        </p>

        {!hugged && (
          <button className="start-btn" onClick={handleHug}>
            🤗 Hug Me
          </button>
        )}

        {hugged && (
          <>
            <h2 className="final-proposal">{message}</h2>
            <p style={{ color: "#fff", marginTop: "10px" }}>
              Stay here as long as you want 🧸💞
            </p>
          </>
        )}
      </div>
    </div>
  );
}
