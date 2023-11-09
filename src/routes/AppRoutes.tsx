import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ColorRenderer from "../pages/ColorRenderer";
import DogPics from "../pages/DogPics";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/color-renderer" element={<ColorRenderer />} />
        <Route path="/dog-pics" element={<DogPics />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
