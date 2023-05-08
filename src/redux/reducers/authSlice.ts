import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { SignInUserPayload, SignUpUserPayload } from "./@types";

const initialState: any = {
    isLoggedIn: true,
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

export default authSlice.reducer;