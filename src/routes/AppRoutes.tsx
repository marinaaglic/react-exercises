import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ColorRenderer from "../pages/ColorRenderer";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/color-renderer" element={<ColorRenderer />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
