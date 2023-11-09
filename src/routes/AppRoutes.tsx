import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ColorRenderer from "../pages/ColorRenderer";
import PixelArt from "../pages/PixelArt";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/color-renderer" element={<ColorRenderer />} />
        <Route path="/pixel-art" element={<PixelArt />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
