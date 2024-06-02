import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ColorRenderer from "../pages/ColorRenderer";
import ColorPicker from "../pages/ColorPicker";
import DarkMode from "../pages/DarkMode";
import DogPics from "../pages/DogPics";
import FocusInput from "../pages/FocusInput";
import FormValidator from "../pages/FormValidator";
import PixelArt from "../pages/PixelArt";
import ScoreKeeper from "../pages/ScoreKeeper";
import ShoppingCart from "../pages/ShoppingCart";
import SimpleCalculator from "../pages/SimpleCalculator";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/color-renderer" element={<ColorRenderer />} />
        <Route path="/color-picker" element={<ColorPicker />} />
        <Route path="/dark-mode" element={<DarkMode />} />
        <Route path="/dog-pics" element={<DogPics />} />
        <Route path="/focus-input" element={<FocusInput />} />
        <Route path="/form-validator" element={<FormValidator />} />
        <Route path="/pixel-art" element={<PixelArt />} />
        <Route path="/score-keeper" element={<ScoreKeeper />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
        <Route path="/simple-calculator" element={<SimpleCalculator />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
