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