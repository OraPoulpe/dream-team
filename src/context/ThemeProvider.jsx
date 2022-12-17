import { createContext, useReducer } from 'react';

export const ThemeContext = createContext();
let localTheme = localStorage.getItem('theme');

if (!localTheme) {
    localStorage.setItem('theme', 'light')
    localTheme = 'light'
}
document.documentElement.setAttribute('data-theme', localTheme)

export default function ThemeProvider({ children }) {
    const [theme, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case "TOGGLE_TO_DARK":
                localStorage.setItem('theme', 'dark')
                document.documentElement.setAttribute('data-theme', 'dark')
                return "dark"
            case "TOGGLE_TO_LIGHT":
                localStorage.setItem('theme', 'light')
                document.documentElement.setAttribute('data-theme', 'light')
                return "light"
            default:
                return state
        }
    }, localTheme)

    return (
        <ThemeContext.Provider value={{ theme, dispatch }}>
            {children}
        </ThemeContext.Provider>
    );
}
