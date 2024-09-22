import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  const [color, setColor] = useState("Blue");

  useEffect(() => {
    console.log(theme);
  }, [theme]);
  useEffect(() => {
    console.log(color);
  }, [color]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, color, setColor }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
