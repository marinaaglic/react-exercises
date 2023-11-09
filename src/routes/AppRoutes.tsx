import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ColorRenderer from "../pages/ColorRenderer";
import SimpleCalculator from "../pages/SimpleCalculator";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/color-renderer" element={<ColorRenderer />} />
        <Route path="/simple-calculator" element={<SimpleCalculator />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
