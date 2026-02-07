import LoveCard from "./components/LoveCard";

const DAYS = [
  { title: "Happy Rose Day 🌹", msg: "Like this rose, my love for you blooms every day ❤️", date: "02-07" },
  { title: "Propose Day 💍", msg: "Will you always be mine? ❤️", date: "02-08" },
  { title: "Chocolate Day 🍫", msg: "Life is sweeter with you 🍫❤️", date: "02-09" },
  { title: "Teddy Day 🧸", msg: "I wish I was your teddy forever 🧸💖", date: "02-10" },
  { title: "Promise Day 🤍", msg: "I promise to love you endlessly 🤍", date: "02-11" },
  { title: "Hug Day 🤗", msg: "My safest place is your hug 🤗❤️", date: "02-12" },
  { title: "Kiss Day 💋", msg: "Every kiss from you feels magical 💋", date: "02-13" },
  { title: "Happy Valentine’s Day ❤️", msg: "You are my today, tomorrow, and forever ❤️", date: "02-14" }
];

export default function App() {
  const today = new Date();
  const key = `${String(today.getMonth() + 1).padStart(2, "0")}-${String(
    today.getDate()
  ).padStart(2, "0")}`;

  const index = DAYS.findIndex(d => d.date === key);

  return <LoveCard current={DAYS[index]} next={DAYS[index + 1]} />;
}
