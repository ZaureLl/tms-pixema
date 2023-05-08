import { FilmListType, RecommendedListType, SingleFilm } from "../../utils/@globalTypes";

export type PayloadWithCallback<Data> = {
    data: Data;
    callback: () => void;
};

export type UserPayloadData = {
    username: string;
    email: string;
    password: string;
};

export type ActivateUserData = {
    uid: string;
    token: string;
};

export type SignInUserData = {
    email: string;
    password: string;
    device_name: string;
};

export type SignUpUserData = {
    email: string;
    password: string;
    password_confirmation: string;
    token_name: string;
};

export type ResetPasswordData = {
    email: string;
};

export type NewPasswordData = {
    uid: string;
    token: string;
    new_password: string;
};

export type GetAllFilmsPayload = {
    perPage: number;
    page: number;
    score: string | null;
};

export interface SetAllFilmsPayload {
    filmList: FilmListType;
    filmsCount: number;
};

export type GetSingleFilmPayload = {
    id: number;
};

export type SetSingleFilmPayload = {
    singleFilm: SingleFilm;
};

export type GetRecommendedFilmsPayload = {
    id: number;
}

export type SetRecommendedFilmsPayload = {
    recommendedFilms: RecommendedListType;
}

export type SignUpUserResponse = {
    user: any;
};

export type SignUpUserPayload = PayloadWithCallback<SignUpUserData>;
export type ActivateUserPayload = PayloadWithCallback<ActivateUserData>;
export type SignInUserPayload = PayloadWithCallback<SignInUserData>;
export type ResetPasswordPayload = PayloadWithCallback<ResetPasswordData>;
export type NewPasswordPayload = PayloadWithCallback<NewPasswordData>;