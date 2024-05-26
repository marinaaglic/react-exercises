import { useEffect } from "react";

const WindowEvent = () => {
  const doubleClickHandler = () => {
    alert("Double click.");
  };

  useEffect(() => {
    window.addEventListener("dblclick", doubleClickHandler);
    return () => {
      window.removeEventListener("dblclick", doubleClickHandler);
    };
  }, []);
  return <h2>Window event active</h2>;
};

export default WindowEvent;
