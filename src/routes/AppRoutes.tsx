import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ColorRenderer from "../pages/ColorRenderer";
import ScoreKeeper from "../pages/ScoreKeeper";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/color-renderer" element={<ColorRenderer />} />
        <Route path="/score-keeper" element={<ScoreKeeper />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
