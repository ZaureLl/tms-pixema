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
    savedFilms: SingleFilm[],
};

const initialState: FilmState = {
    filmList: [],
    isAllFilmsLoading: false,
    filmsCount: 0,
    singleFilm: null,
    isSingleFilmLoading: false,
    savedFilms: [],
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
            state.filmList = [...state.filmList, ...filmList];
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

        clearListOfFilm: (
            state,
        ) => {
            state.filmList = [];
        },


        setSavedFilm: (state, action: PayloadAction<SingleFilm>) => {
            console.log('text', action)
            const savedFilmIndex = state.savedFilms.findIndex(
                (film) => {
                    if (film) {
                        return film.id === action.payload?.id
                    } return false;
                }
            );

            if (savedFilmIndex === -1) {
                state.savedFilms.push(action.payload);
            } else {
                state.savedFilms.splice(savedFilmIndex, 1);
            }
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
    setSavedFilm,
    clearListOfFilm,
} = filmSlice.actions;

export default filmSlice.reducer;

export const FilmSelectors = {
    getAllFilms: (state: RootState) => state.film.filmList,
    getAllFilmsCount: (state: RootState) => state.film.filmsCount,
    getAllFilmsLoading: (state: RootState) => state.film.isAllFilmsLoading,
    getSingleFilm: (state: RootState) => state.film.singleFilm,
    getSingleFilmLoading: (state: RootState) => state.film.isSingleFilmLoading,
    getSavedFilms: (state: RootState) => state.film.savedFilms,
};