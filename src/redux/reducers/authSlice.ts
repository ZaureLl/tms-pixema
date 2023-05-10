import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { SignInUserPayload, SignUpUserPayload } from "./@types";
import { RootState } from "../store";
import { ACCESS_TOKEN_KEY } from "../../utils/constants";

const initialState: any = {
    isLoggedIn: !!localStorage.getItem(ACCESS_TOKEN_KEY),
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        signInUser: (_, __: PayloadAction<SignInUserPayload>) => { },
        setLoggedIn: (state, action: PayloadAction<boolean>) => {
            state.isLoggedIn = action.payload;
        },
        logoutUser: (_, __: PayloadAction<undefined>) => { },
        signUpUser: (_, __: PayloadAction<SignUpUserPayload>) => { },
    },
});

export const {
    signInUser,
    setLoggedIn,
    logoutUser,
    signUpUser,
} = authSlice.actions;

export const AuthSelectors = {
    getLoggedIn: (state: RootState) => state.auth.isLoggedIn,
};

export default authSlice.reducer;