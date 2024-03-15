import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Hamburgers from "./pages/Hamburgers/Hamburgers";
import Appetizers from "./pages/Appetizers/Appetizers";
import Login from "./pages/Login/Login";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/entradinhas" element={<Appetizers />} />
        <Route path="/hamburgers" element={<Hamburgers />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
