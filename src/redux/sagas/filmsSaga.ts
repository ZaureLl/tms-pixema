import { Filter, SingleFilm } from './../../utils/@globalTypes';
import { takeLatest, all, call, put, takeLeading, select } from "redux-saga/effects";
import { ApiResponse } from "apisauce";
import { PayloadAction } from "@reduxjs/toolkit";

import {
  FilmSelectors,
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
import { AllFilmsResponse, RecommendedFilmsResponse, SearchFilmsResponse, SingleFilmsResponse } from "./@types";
import {
  GetAllFilmsPayload, GetRecommendedFilmsPayload, GetSingleFilmPayload,
} from "../reducers/@types";
import { RootState } from '../store';


function* getAllFilmsWorker(action: PayloadAction<GetAllFilmsPayload>) {
  yield put(setAllFilmsLoading(true));
  const { perPage, page, score } = action.payload;
  const filterState: Filter = yield select(FilmSelectors.getFilter);
  const searchState: string = yield select(FilmSelectors.getSearch);

  if (searchState) {
    const { ok, data, problem }: ApiResponse<SearchFilmsResponse> = yield call(
      API.searchFilms,
      searchState
    );
    if (ok && data) {
      yield put(setAllFilms({ filmList: data.results, filmsCount: data.results.length }));
    } else {
      console.warn("Error getting all films", problem);
    }
  }
  else {
    const filters = {
      order: filterState.sortBy === 'rating' ? 'popularity:desc' : 'release_date:desc',
      genre: filterState.genre || null,
      released: (filterState.yearFrom && filterState.yearTo) ? (filterState.yearFrom + ',' + filterState.yearTo) : null,
      score: (filterState.ratingFrom && filterState.ratingTo) ? (filterState.ratingFrom + ',' + filterState.ratingTo) : null,
      country: filterState.country || null,
    }
    const { ok, data, problem }: ApiResponse<AllFilmsResponse> = yield call(
      API.getFilms,
      perPage,
      page,
      score || filters.score,
      filters.order,
      filters.genre,
      filters.released,
      filters.country,
    );
    if (ok && data) {
      console.log(data.pagination.data)
      yield put(setAllFilms({ filmList: data.pagination.data, filmsCount: data.pagination.total }));
    } else {
      console.warn("Error getting all films", problem);
    }
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