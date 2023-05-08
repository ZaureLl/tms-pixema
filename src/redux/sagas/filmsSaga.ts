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
  setRecommendedFilmsLoading,
  setRecommendedFilms,
  getRecommendedFilms,
} from "../reducers/filmSlice";

import API from "../api";
import { AllFilmsResponse, RecommendedFilmsResponse, SingleFilmsResponse } from "./@types";
import {
  GetAllFilmsPayload, GetRecommendedFilmsPayload, GetSingleFilmPayload,
} from "../reducers/@types";


function* getAllFilmsWorker(action: PayloadAction<GetAllFilmsPayload>) {
  yield put(setAllFilmsLoading(true));
  const { perPage, page, score } = action.payload;
  const { ok, data, problem }: ApiResponse<AllFilmsResponse> = yield call(
    API.getFilms,
    perPage,
    page,
    score,
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
};

function* getRecommendedFilmsWorker(action: PayloadAction<GetRecommendedFilmsPayload>) {
  yield put(setRecommendedFilmsLoading(true));
  const { id } = action.payload;
  const { ok, data, problem }: ApiResponse<RecommendedFilmsResponse> = yield call(
    API.getRecommendedFilms,
    id,
  );
  if (ok && data) {
    console.log(data)
    yield put(setRecommendedFilms({ recommendedFilms: data.titles }));
  } else {
    console.warn("Error getting set RecommendedFilms", problem);
  }
  yield put(setRecommendedFilmsLoading(false));
};

export default function* filmsSaga() {
  yield all([
    takeLatest(getAllFilms, getAllFilmsWorker),
    takeLatest(getSingleFilm, getSingleFilmWorker),
    takeLatest(getRecommendedFilms, getRecommendedFilmsWorker,),
  ]);
};