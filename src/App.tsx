import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Hamburgers from "./pages/Hamburgers/Hamburgers";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hamburgers" element={<Hamburgers />} />
      </Routes>
    </BrowserRouter>
  );
}
