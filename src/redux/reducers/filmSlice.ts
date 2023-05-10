import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { FilmListType, Filter, RecommendedFilm, SingleFilm } from "../../utils/@globalTypes";
import { GetAllFilmsPayload, GetRecommendedFilmsPayload, GetSingleFilmPayload, SetAllFilmsPayload, SetRecommendedFilmsPayload, SetSingleFilmPayload } from "./@types";
import { FILTER_DEFAULTS } from "../../utils/constants";



type FilmState = {
    filmList: FilmListType;
    isAllFilmsLoading: boolean;
    filmsCount: number;
    singleFilm: SingleFilm;
    isSingleFilmLoading: boolean;
    savedFilms: SingleFilm[],
    recommendedFilms: RecommendedFilm[],
    isRecommendedFilmsLoading: boolean,
    filter: Filter,
    search: string,
};

const initialState: FilmState = {
    filmList: [],
    isAllFilmsLoading: false,
    filmsCount: 0,
    singleFilm: null,
    isSingleFilmLoading: false,
    savedFilms: [],
    recommendedFilms: [],
    isRecommendedFilmsLoading: false,
    filter: FILTER_DEFAULTS,
    search: '',
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
            state.recommendedFilms = [];
        },

        getRecommendedFilms: (_, __: PayloadAction<GetRecommendedFilmsPayload>) => { },
        setRecommendedFilms: (
            state,
            { payload: { recommendedFilms } }: PayloadAction<SetRecommendedFilmsPayload>
        ) => {
            state.recommendedFilms = recommendedFilms;
        },
        setRecommendedFilmsLoading: (state, action: PayloadAction<boolean>) => {
            state.isRecommendedFilmsLoading = action.payload;
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

        setFilmFilter: (
            state,
            { payload }: PayloadAction<Filter>
        ) => {
            state.filter = payload;
        },

        setSearch: (
            state,
            { payload }: PayloadAction<string>
        ) => {
            state.search = payload;
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
    setRecommendedFilms,
    getRecommendedFilms,
    setRecommendedFilmsLoading,
    setFilmFilter,
    setSearch,
} = filmSlice.actions;

export default filmSlice.reducer;

export const FilmSelectors = {
    getAllFilms: (state: RootState) => state.film.filmList,
    getAllFilmsCount: (state: RootState) => state.film.filmsCount,
    getAllFilmsLoading: (state: RootState) => state.film.isAllFilmsLoading,
    getSingleFilm: (state: RootState) => state.film.singleFilm,
    getSingleFilmLoading: (state: RootState) => state.film.isSingleFilmLoading,
    getSavedFilms: (state: RootState) => state.film.savedFilms,
    getRecommendedFilms: (state: RootState) => state.film.recommendedFilms,
    getRecommendedFilmsLoading: (state: RootState) => state.film.isRecommendedFilmsLoading,
    getFilter: (state: RootState) => state.film.filter,
    getSearch: (state: RootState) => state.film.search,
};