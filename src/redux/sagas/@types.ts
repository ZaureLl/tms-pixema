import { FilmListType, SingleFilm } from "../../utils/@globalTypes";

export type SignInResponse = {
    access: string;
    refresh: string;
};

export type AllFilmsResponse = {
    pagination: {
        current_page: number;
        total: number;
        per_page: number;
        data: FilmListType;
    }
};

export type GetAllFilmsPayload = {
    perPage: number;
    page: number;
};


export type SingleFilmsResponse = {
    title: SingleFilm;
};

export type RecommendedFilmsResponse = {
    titles: any;
};