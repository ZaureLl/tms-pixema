import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PagesContainer from "./PagesContainer/PagesContainer";
import SignIn from "./AuthPages/SignIn";
import Home from "./Home/Home";

export enum RoutesList {
    Home = "/",
    SignIn = "/sign-in",
    SignUp = "/sign-up",
    Trends = "/trends",
    Favorites = "/favorites",
    Settings = "/settings",
    Confirm = "/activate/:uid/:token",
    Success = "/sign-up/success",
    Default = "*",
}

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={RoutesList.Home} element={<PagesContainer />}>
                    <Route path={RoutesList.Home} element={<Home />} />
                </Route>
                <Route path={RoutesList.SignIn} element={<SignIn />} />
                {/* <Route path={RoutesList.SignUp} element={<SignUp />} />
                    <Route path={RoutesList.Confirm} element={<Confirm />} /> */}
                <Route path={RoutesList.Default} element={<div>404 NOT FOUND</div>} />

            </Routes>
        </BrowserRouter>
    );
};

export default Router;