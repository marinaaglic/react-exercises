import { useState } from "react";
import "../index.css";
import { Link } from "react-router-dom";

const DarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(true);
  };

  const toggleLightMode = () => {
    setDarkMode(false);
  };

  return (
    <>
      <h2>DARK MODE</h2>
      <p>
        Implement a component that allows you to change from light to dark mode
        and back again
      </p>
      <div className={`page ${darkMode ? "dark-mode" : ""}`}>
        <button className="dark-mode-button" onClick={toggleDarkMode}>
          Dark Mode
        </button>
        <button className="light-mode-button" onClick={toggleLightMode}>
          Light Mode
        </button>
      </div>
      <Link to="/">Back</Link>
    </>
  );
};

export default DarkMode;
