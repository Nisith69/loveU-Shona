import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import loveSong from "../assets/love.mp3";
import cutie1 from "../assets/cutie1.jpg";
import cutie2 from "../assets/cutie2.jpg";
import cutie3 from "../assets/cutie3.mp4";

const media = [
  { type: "image", src: cutie1 },
  { type: "image", src: cutie2 },
  { type: "video", src: cutie3 },
];

function Hearts() {
  return (
    <div className="hearts">
      {[...Array(30)].map((_, i) => (
        <span
          key={i}
          className="heart"
          style={{
            left: Math.random() * 100 + "%",
            animationDelay: Math.random() * 5 + "s",
            fontSize: Math.random() * 20 + 18,
          }}
        >
          ❤️
        </span>
      ))}
    </div>
  );
}

export default function LoveCard({ current }) {
  const [timer, setTimer] = useState("");
  const [mediaIndex, setMediaIndex] = useState(0);
  const [started, setStarted] = useState(false);
  const [unlocked, setUnlocked] = useState(false);

  const audioRef = useRef(null);
  const navigate = useNavigate();

  /* Media rotation */
  useEffect(() => {
    const t = setInterval(() => {
      setMediaIndex(i => (i + 1) % media.length);
    }, 3500);
    return () => clearInterval(t);
  }, []);

  /* ⏳ TIMER (1 minute test / change to midnight later) */
  useEffect(() => {
    const target = new Date();
    target.setHours(24, 0, 0, 0); // TEST

    const interval = setInterval(() => {
      const diff = target - new Date();

      if (diff <= 0) {
        setUnlocked(true);
        setTimer("🎉 Unlocked 💖");
        clearInterval(interval);
        return;
      }

      const m = Math.floor((diff / 60000) % 60);
      const s = Math.floor((diff / 1000) % 60);
      setTimer(`${m}m ${s}s`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const startLove = () => {
    setStarted(true);
    audioRef.current.play();
  };

  const currentMedia = media[mediaIndex];

  return (
    <>
      <audio ref={audioRef} src={loveSong} loop />

      {!started && (
        <div className="page">
          <div className="card">
            <h1>💖 Tap to Begin Love 💖</h1>
            <button className="start-btn" onClick={startLove}>
              ❤️ Start ❤️
            </button>
          </div>
        </div>
      )}

      {started && (
        <>
          <Hearts />
          <div className="page">
            <div className="card">
              <h1>🌹 Happy Rose Day Shona 💖✨</h1>

              {currentMedia.type === "image" ? (
                <img src={currentMedia.src} className="fade-img" />
              ) : (
                <video
                  src={currentMedia.src}
                  autoPlay
                  muted
                  loop
                  className="love-video fade-img"
                />
              )}

              <p>{current.msg}</p>

              {!unlocked && (
                <div className="timer">
                  ⏳ Next surprise unlocks at <br />
                  <strong>12:00 AM 💝</strong>
                  <span>{timer}</span>
                </div>
              )}

              {unlocked && (
                <button
                  className="start-btn"
                  onClick={() => navigate("/propose")}
                >
                  💍 Open Surprise 💖
                </button>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
}
