import { createContext, useReducer, useMemo } from "react";

export const ThemeContext = createContext();
const localTheme = localStorage.getItem("theme");

if (localTheme) {
  document.documentElement.setAttribute("data-theme", localTheme);
} else {
  document.documentElement.setAttribute("data-theme", "light");
}

export default function ThemeProvider({ children }) {
  const [theme, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "TOGGLE_TO_DARK":
        localStorage.setItem("theme", "dark");
        document.documentElement.setAttribute("data-theme", "dark");
        return "dark";
      case "TOGGLE_TO_LIGHT":
        localStorage.setItem("theme", "light");
        document.documentElement.setAttribute("data-theme", "light");
        return "light";
      default:
        return state;
    }
  }, localTheme);

  const memoizedValue = useMemo(() => ({ theme, dispatch }), [theme]);

  return (
    <ThemeContext.Provider value={memoizedValue}>
      {children}
    </ThemeContext.Provider>
  );
}
