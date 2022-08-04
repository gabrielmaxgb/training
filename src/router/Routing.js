import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../app/pages/Home/Home";
import Login from "../app/pages/Login/Login";

function Routing() {
  return (
  <BrowserRouter>
    <Routes>
      <Route index path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  </BrowserRouter>
  );
};

export default Routing;