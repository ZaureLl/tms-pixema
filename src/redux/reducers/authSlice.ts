import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../store";
import { SignInUserPayload } from "./@types";

const initialState: any = {
    isLoggedIn: true,
    userInfo: null,
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
    },
});

export const {
    signInUser,
    setLoggedIn,
    logoutUser,
} = authSlice.actions;

export default authSlice.reducer;