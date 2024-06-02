import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="navbar-home">
      <Link to="/">Home</Link>
      <Link to="/color-renderer">Color Renderer</Link>
      <Link to="/color-picker">Color Picker</Link>
      <Link to="/dark-mode">Dark Mode</Link>
      <Link to="/dog-pics">Dog Pics</Link>
      <Link to="/focus-input">Focus Input</Link>
      <Link to="/form-validator">Form Validator</Link>
      <Link to="/pixel-art">Pixel Art</Link>
      <Link to="/score-keeper">Score Keeper</Link>
      <Link to="/shopping-cart">Shopping Cart</Link>
      <Link to="/simple-calculator">Simple Calculator</Link>
      <h2>Homepage</h2>
    </div>
  );
};

export default Home;
