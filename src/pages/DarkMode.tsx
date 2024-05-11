/* TASK
Implement a component that allows you to change from light to 
dark mode and back again
*/

import { useState } from "react";
import "../index.css";

const DarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(true);
  };

  const toggleLightMode = () => {
    setDarkMode(false);
  };

  return (
    <div className={`page ${darkMode ? "dark-mode" : ""}`}>
      <button className="dark-mode-button" onClick={toggleDarkMode}>
        Dark Mode
      </button>
      <button className="light-mode-button" onClick={toggleLightMode}>
        Light Mode
      </button>
    </div>
  );
};

export default DarkMode;
