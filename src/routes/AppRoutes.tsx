import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ColorRenderer from "../pages/ColorRenderer";
import FocusInput from "../pages/FocusInput";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/color-renderer" element={<ColorRenderer />} />
        <Route path="/focus-input" element={<FocusInput />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
