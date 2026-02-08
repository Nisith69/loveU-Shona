import { Routes, Route } from "react-router-dom";
import LoveCard from "./components/LoveCard";
import ChocolateDay from "./pages/ChocolateDay";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LoveCard />} />
      <Route path="/chocolate" element={<ChocolateDay />} />
    </Routes>
  );
}
