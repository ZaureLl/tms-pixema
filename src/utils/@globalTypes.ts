import { RecommendedFilmsResponse } from './../redux/sagas/@types';
import { ReactNode } from "react";

export enum ButtonType {
    Regular = "Regular",
    IconBtn = "IconBtn",
};

export type FilmType = {
    id: number,
    poster: string,
    name: string,
    rating: string,
    runtime: number,
    description: string,
    year: string,
};

export type FilmListType = FilmType[];

export type RecommendedListType = RecommendedFilm[];

export type SingleFilm = null | {
    id: number;
    poster: string;
    genres: [
        {
            display_name: string;
        }
    ]
    name: string;
    rating: string;
    icon?: ReactNode;
    runtime: number;
    description: string;
    year: string;
    release_date: string;
    budget: number;
    credits: [
        {
            name: string;
            pivot: {
                department: string;
                job: string;
            }
        }

    ]
};

export type RecommendedFilm = null | {
    id: number;
    name: string;
    poster: string;
    year: number;
    rating: string;
}

export enum TabsNames {
    Default,
    FirstTab,
    ThirdTab,
}

export type Filter = {
    sortBy: string;
    title: string;
    genre: string;
    yearFrom: string;
    yearTo: string;
    ratingFrom: string;
    ratingTo: string;
    country: string;
}