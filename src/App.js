import HomePage from "./pages/HomePage/HomePage";
import MainPage from "./pages/MainPage/MainPage";
import LeaderboardPage from "./pages/LeaderboardPage/LeaderboardPage";
import "./App.scss";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/dashboard" element={<MainPage />}></Route>
          <Route path="/leaderboard" element={<LeaderboardPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
