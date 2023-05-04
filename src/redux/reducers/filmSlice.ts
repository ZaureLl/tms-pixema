import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { FilmListType, SingleFilm } from "../../utils/@globalTypes";
import { GetAllFilmsPayload, GetSingleFilmPayload, SetAllFilmsPayload, SetSingleFilmPayload } from "./@types";



type FilmState = {
    filmList: FilmListType;
    isAllFilmsLoading: boolean;
    filmsCount: number;
    singleFilm: SingleFilm;
    isSingleFilmLoading: boolean;
};

const initialState: FilmState = {
    filmList: [],
    isAllFilmsLoading: false,
    filmsCount: 0,
    singleFilm: null,
    isSingleFilmLoading: false,
};

const filmSlice = createSlice({
    name: "film",
    initialState,
    reducers: {
        getAllFilms: (_, __: PayloadAction<GetAllFilmsPayload>) => { },
        setAllFilms: (
            state,
            { payload: { filmsCount, filmList } }: PayloadAction<SetAllFilmsPayload>
        ) => {
            state.filmList = filmList;
            state.filmsCount = filmsCount;
        },
        setAllFilmsLoading: (state, action: PayloadAction<boolean>) => {
            state.isAllFilmsLoading = action.payload;
        },
        getSingleFilm: (_, __: PayloadAction<GetSingleFilmPayload>) => { },
        setSingleFilm: (
            state,
            { payload: { singleFilm } }: PayloadAction<SetSingleFilmPayload>
        ) => {
            state.singleFilm = singleFilm;
        },
        setSingleFilmLoading: (state, action: PayloadAction<boolean>) => {
            state.isSingleFilmLoading = action.payload;
        },
    }
});

export const {
    getAllFilms,
    setAllFilmsLoading,
    setAllFilms,
    getSingleFilm,
    setSingleFilm,
    setSingleFilmLoading,
} = filmSlice.actions;

export default filmSlice.reducer;

export const FilmSelectors = {
    getAllFilms: (state: RootState) => state.film.filmList,
    getAllFilmsCount: (state: RootState) => state.film.filmsCount,
    getAllFilmsLoading: (state: RootState) => state.film.isAllFilmsLoading,
    getSingleFilm: (state: RootState) => state.film.singleFilm,
    getSingleFilmLoading: (state: RootState) => state.film.isSingleFilmLoading,
}