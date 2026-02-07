import { Routes, Route } from "react-router-dom";
import LoveCard from "./components/LoveCard";
import ProposeDay from "./pages/ProposeDay";

const DAYS = [
  {
    title: "Happy Rose Day 🌹",
    msg: "Like this rose, my love for you blooms every day ❤️",
  },
];

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<LoveCard current={DAYS[0]} />}
      />
      <Route
        path="/propose"
        element={<ProposeDay />}
      />
    </Routes>
  );
}
