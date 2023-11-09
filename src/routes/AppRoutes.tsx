import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ColorRenderer from "../pages/ColorRenderer";
import ColorPicker from "../pages/ColorPicker";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/color-renderer" element={<ColorRenderer />} />
        <Route path="/color-picker" element={<ColorPicker />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
