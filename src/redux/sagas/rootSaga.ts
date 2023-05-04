import { all } from "redux-saga/effects";

import authSaga from "./authSaga";
import filmsSaga from "./filmsSaga";

export default function* rootSaga() {
    yield all([authSaga(), filmsSaga()]);
}