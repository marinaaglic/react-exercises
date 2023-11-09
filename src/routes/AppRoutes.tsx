import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ColorRenderer from "../pages/ColorRenderer";
import ShoppingCart from "../pages/ShoppingCart";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/color-renderer" element={<ColorRenderer />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
