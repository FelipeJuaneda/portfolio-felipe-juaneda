import React from "react";
import { useDarkMode } from "../../context/DarkModeContext";

const DarkModeButton = () => {
  const { theme, toggleTheme } = useDarkMode();

  return (
    <button
      className="p-1 text-xl 910max:absolute 910max:right-5 910max:top-5"
      onClick={toggleTheme}
    >
      <i
        className={theme === "dark" ? "ri-sun-line text-white" : "ri-moon-fill"}
      />
    </button>
  );
};

export default DarkModeButton;
