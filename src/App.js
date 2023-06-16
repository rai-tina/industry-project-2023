// import Inventory from "./pages/Inventory/Inventory";
// import Warehouse from "./pages/Warehouse/Warehouse";
// import Header from "./components/Header/Header";
// import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import MainPage from "./pages/MainPage/MainPage";
import LeaderboardPage from "./pages/LeaderboardPage/LeaderboardPage";
import "./App.scss";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/dashboard" element={<MainPage />}></Route>
        <Route path="/leaderboard" element={<LeaderboardPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
