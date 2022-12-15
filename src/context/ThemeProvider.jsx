import { createContext, useReducer } from 'react';

export const ThemeContext = createContext();
const localTheme = localStorage.getItem('theme');

if (localTheme) {
    document.documentElement.setAttribute('data-theme', localTheme)
} else {
    document.documentElement.setAttribute('data-theme', 'light')
}

export default function ThemeProvider({ children }) {
    const [theme, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case "TOGGLE_TO_DARK":
                localStorage.setItem('theme', 'dark')
                console.log(localStorage.getItem('theme'))
                document.documentElement.setAttribute('data-theme', 'dark')
                return "dark"
            case "TOGGLE_TO_LIGHT":
                localStorage.setItem('theme', 'light')
                console.log(localStorage.getItem('theme'))
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
