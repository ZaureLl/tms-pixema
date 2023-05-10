import { Filter } from "./@globalTypes";

export const ACCESS_TOKEN_KEY = "accessTokenFE39";
export const PER_PAGE = 10;
export const SCORE = "700,900";
export const FILTER_DEFAULTS: Filter = {
    sortBy: 'rating',
    title: '',
    genre: '',
    yearFrom: '',
    yearTo: '',
    ratingFrom: '',
    ratingTo: '',
    country: '',
};