import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../Screens/Home";
import { Resume } from "../Screens/Resume";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </BrowserRouter>
  );
};
