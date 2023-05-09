import { create } from "apisauce";
import { SignInUserData, SignUpUserData } from "../reducers/@types";

const authToken = "675|Zwbs9qHXqE4JQkUwSGGTHSmq5jYUb6fD3UcFKsAW";

const API = create({
    baseURL: "https://unelmamovie.com/api/v1",
});

const getFilms = (perPage: number, page: number, score: string | null) => {
    return API.get("/titles",
        { perPage, page, score },
        {
            headers: {
                Authorization: `Bearer ${authToken}`,
            },
        });
};

const getSingleFilm = (id: number) => {
    return API.get("/titles/" + id,
        {},
        {
            headers: {
                Authorization: `Bearer ${authToken}`,
            },
        });
};

const getRecommendedFilms = (id: number) => {
    return API.get("/titles/" + id + "/related",
        {},
        {
            headers: {
                Authorization: `Bearer ${authToken}`,
            },
        });
};


const signInUser = (data: SignInUserData) => {
    return API.post("/auth/login", data, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        },
    })
};

const signUpUser = (data: SignUpUserData) => {
    return API.post("/auth/register", data, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        },
    })
};

const verifyToken = (token: string) => {
    return API.post("/auth/jwt/verify/", { token });
};

const refreshToken = (refresh: string) => {
    return API.post("/auth/jwt/refresh/", { refresh });
};

export default {
    getFilms,
    signInUser,
    verifyToken,
    refreshToken,
    getSingleFilm,
    getRecommendedFilms,
    signUpUser,
};