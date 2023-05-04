import { SingleFilm } from './../../utils/@globalTypes';
import { takeLatest, all, call, put, takeLeading } from "redux-saga/effects";
import { ApiResponse } from "apisauce";
import { PayloadAction } from "@reduxjs/toolkit";

import {
  getAllFilms,
  getSingleFilm,
  setAllFilms,
  setAllFilmsLoading,
  setSingleFilm,
  setSingleFilmLoading,
} from "../reducers/filmSlice";

import API from "../api";
import { AllFilmsResponse, SingleFilmsResponse } from "./@types";
import {
  GetAllFilmsPayload, GetSingleFilmPayload,
} from "../reducers/@types";


function* getAllFilmsWorker(action: PayloadAction<GetAllFilmsPayload>) {
  yield put(setAllFilmsLoading(true));
  const { perPage, page } = action.payload;
  const { ok, data, problem }: ApiResponse<AllFilmsResponse> = yield call(
    API.getFilms,
    perPage,
    page,
  );
  if (ok && data) {
    console.log(data.pagination.data)
    yield put(setAllFilms({ filmList: data.pagination.data, filmsCount: data.pagination.total }));
  } else {
    console.warn("Error getting all films", problem);
  }
  yield put(setAllFilmsLoading(false));
}

function* getSingleFilmWorker(action: PayloadAction<GetSingleFilmPayload>) {
  yield put(setSingleFilmLoading(true));
  const { id } = action.payload;
  const { ok, data, problem }: ApiResponse<SingleFilmsResponse> = yield call(
    API.getSingleFilm,
    id,
  );
  if (ok && data) {
    console.log(data)
    yield put(setSingleFilm({ singleFilm: data.title }));
  } else {
    console.warn("Error getting set single film", problem);
  }
  yield put(setSingleFilmLoading(false));
}



export default function* filmsSaga() {
  yield all([
    takeLatest(getAllFilms, getAllFilmsWorker),
    takeLatest(getSingleFilm, getSingleFilmWorker),
  ]);
}
