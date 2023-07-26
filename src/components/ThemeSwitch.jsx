import React from "react";
import { useDispatch } from "react-redux";
import { toggleTheme } from "../store/slices/themeSlice";

const ThemeSwitch = ({ isDarkMode }) => {
  const dispatch = useDispatch();

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <div className="theme-switcher">      
      <input
        id="theme-switch"
        type="checkbox"
        checked={isDarkMode === true}
        onChange={handleThemeToggle}
      />
      <label for="theme-switch">Dark Mode</label>
    </div>
  );
};

export default ThemeSwitch;
