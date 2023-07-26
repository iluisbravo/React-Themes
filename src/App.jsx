import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "./store/slices/themeSlice";
import './App.css';
import ThemeSwitch from './components/ThemeSwitch';

function App() {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  const dispatch = useDispatch();
  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <div className={`App ${isDarkMode ? "dark-theme" : "light-theme"}`}>
      <header>
        <ThemeSwitch isDarkMode={isDarkMode}></ThemeSwitch>
      </header>
      <main>
        <h1>{isDarkMode ? "Dark Theme" : "Light Theme"}</h1>
        <h4>Hola Bienvenido</h4>
        <p>Esto es una página de prueba...</p>
        <button>Bonton 1</button>
        <button>Boton 2</button>
        <hr></hr>
      </main>
      <footer>
        <button onClick={handleThemeToggle}>
          {isDarkMode ? "Switch to Light Theme" : "Switch to Dark Theme"}
        </button>
      </footer>
    </div>
  )
}

export default App
