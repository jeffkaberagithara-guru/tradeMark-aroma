import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { COLORS, FONTS } from "./constants/theme";

export default function App() {
  return (
    <BrowserRouter>
      <div
        style={{
          backgroundColor: COLORS.onyx,
          fontFamily: FONTS.body,
          minHeight: "100vh",
          color: COLORS.ivory,
        }}
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}