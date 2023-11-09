/* TASK
Implement a component that allows you to change from light to 
dark mode and back again
*/

const DarkMode = () => {
  return (
    <div className="page">
      <button className="dark-mode-button">Dark Mode</button>
      <button className="light-mode-button">Light Mode</button>
    </div>
  );
};

export default DarkMode;
