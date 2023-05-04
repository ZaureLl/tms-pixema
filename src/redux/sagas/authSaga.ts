import { takeLatest, all, call, put } from "redux-saga/effects";
import { ApiResponse } from "apisauce";
import { PayloadAction } from "@reduxjs/toolkit";
import { SignInUserPayload } from "../reducers/@types";
import { SignInResponse } from "./@types";
import { setLoggedIn, signInUser } from "../reducers/authSlice";
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
        localStorage.setItem(ACCESS_TOKEN_KEY, responseData?.access);
        localStorage.setItem(REFRESH_TOKEN_KEY, responseData?.refresh);
        yield put(setLoggedIn(true));
        callback();
    } else {
        console.warn("Error activate user", problem);
    }
};

export default function* authSaga() {
    yield all([
        takeLatest(signInUser, signInUserWorker),
    ]);
}