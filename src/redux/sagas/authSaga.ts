import { takeLatest, all, call, put } from "redux-saga/effects";
import { ApiResponse } from "apisauce";
import { PayloadAction } from "@reduxjs/toolkit";
import { SignInUserPayload, SignUpUserPayload, SignUpUserResponse } from "../reducers/@types";
import { SignInResponse } from "./@types";
import { setLoggedIn, signInUser, signUpUser } from "../reducers/authSlice";
import API from '../api';
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from "../../utils/constants";


function* signInUserWorker(action: PayloadAction<SignInUserPayload>) {
    const { data, callback } = action.payload;
    const {
        ok,
        problem,
        data: responseData,
    }: ApiResponse<SignInResponse> = yield call(API.signInUser, data);
    if (ok && responseData) {
        localStorage.setItem(ACCESS_TOKEN_KEY, responseData?.user.access_token);
        const userId = responseData?.user.id.toString()
        localStorage.setItem("user_id", userId);
        yield put(setLoggedIn(true));
        callback();
    } else {
        console.warn("Error activate user", problem);
    }
};

function* signUpUserWorker(action: PayloadAction<SignUpUserPayload>) {
    const { data, callback } = action.payload;
    const { ok, problem }: ApiResponse<SignUpUserResponse> = yield call(
        API.signUpUser,
        data
    );
    if (ok) {
        callback();
    } else {
        console.warn("Error sign up user", problem);
    }
};

export default function* authSaga() {
    yield all([
        takeLatest(signInUser, signInUserWorker),
        takeLatest(signUpUser, signUpUserWorker),
    ]);
};