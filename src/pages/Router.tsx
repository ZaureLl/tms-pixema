import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PagesContainer from "./PagesContainer/PagesContainer";
import SignIn from "./AuthPages/SignIn";
import Home from "./Home/Home";
import SignUp from "./AuthPages/SignUp";
import ResetPassword from "./AuthPages/ResetPassword/ResetPassword";
import Error from "./Error/Error";
import Settings from "./Settings/Settings";
import SingleFilm from "../assets/components/SingleFilm/SingleFilm";
import { Imb } from "../assets/icons/Imb";
import Film from "./Film/Film";
import Favorites from "./Favorites/Favorites";

export enum RoutesList {
    Home = "/",
    SignIn = "/sign-in",
    SignUp = "/sign-up",
    ResetPassword = "/reset",
    Confirm = "/activate/:uid/:token",
    Success = "/sign-up/success",
    Trends = "/trends",
    Favorites = "/favorites",
    Settings = "/settings",
    SingleFilm = "/:id",
    Default = "*",
}

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={RoutesList.Home} element={<PagesContainer />}>
                    <Route path={RoutesList.Home} element={<Home />} />
                    <Route path={RoutesList.Favorites} element={<Favorites />} />
                    <Route path={RoutesList.Trends} element={<Home />} />
                    <Route path={RoutesList.Settings} element={<Settings />} />
                    <Route path={RoutesList.SingleFilm} element={<Film />} />
                </Route>
                <Route path={RoutesList.SignIn} element={<SignIn />} />
                <Route path={RoutesList.SignUp} element={<SignUp />} />
                <Route path={RoutesList.ResetPassword} element={<ResetPassword />} />
                {/* <Route path={RoutesList.Confirm} element={<Confirm />} />  */}
                <Route path={RoutesList.Default} element={<Error />} />

            </Routes>
        </BrowserRouter>
    );
};

export default Router;