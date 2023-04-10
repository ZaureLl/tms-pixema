import { useContext, createContext } from "react";

export enum Theme {
    Light = "light",
    Dark = "dark",
}

const initialState = {
    theme: Theme.Dark,
    onChangeTheme: (value: Theme) => { },
};

export const ThemeContext = createContext(initialState);

export const useThemeContext = () => useContext(ThemeContext);