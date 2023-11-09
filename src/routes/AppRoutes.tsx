import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ColorRenderer from "../pages/ColorRenderer";
import FormValidator from "../pages/FormValidator";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/color-renderer" element={<ColorRenderer />} />
        <Route path="/form-validator" element={<FormValidator />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
