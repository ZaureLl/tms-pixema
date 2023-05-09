import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Theme } from "../../context/Theme/Theme";
import { RootState } from "../store";

const initialState = {
    themeValue: Theme.Dark,
};

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        changeTheme: (state, action: PayloadAction<Theme>) => {
            state.themeValue = action.payload;
        },
    },
});

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;

export const ThemeSelectors = {
    getThemeValue: (state: RootState) => state.theme.themeValue,
};
