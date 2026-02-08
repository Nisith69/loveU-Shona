import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoveCard() {
  const [timer, setTimer] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const saved = localStorage.getItem("roseUnlocked");
    if (saved === "true") {
      setUnlocked(true);
      setTimer("🎉 Unlocked 💖");
      return;
    }

    const target = new Date();
    target.setSeconds(target.getSeconds() + 40); // demo

    const interval = setInterval(() => {
      const diff = target - new Date();

      if (diff <= 0) {
        setUnlocked(true);
        setTimer("🎉 Unlocked 💖");
        localStorage.setItem("roseUnlocked", "true");
        clearInterval(interval);
        return;
      }

      const s = Math.floor((diff / 1000) % 60);
      setTimer(`0m ${s}s`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="page rose">
      <div className="card">
        <h1>🌹 Happy Rose Day Shona 💖</h1>

        <img
          className="photo"
          src="/love.jpg"
          alt="love"
        />

        <p className="msg">
          Like this rose, my love for you blooms every day ❤️
        </p>

        <p className="timer">{timer}</p>

        {unlocked && (
          <button className="btn" onClick={() => navigate("/chocolate")}>
            🍫 Go to Chocolate Day
          </button>
        )}
      </div>
    </div>
  );
}
