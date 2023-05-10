import React from "react";

import { LightLogo, LogoIcon } from "../../icons";
import styles from "./Logo.module.scss";
import { Navigate, useNavigate } from "react-router-dom";
import { RoutesList } from "../../../pages/Router";
import { Theme, useThemeContext } from "../../../context/Theme/Theme";


const Logo = () => {

    const navigate = useNavigate();

    const onHomeLogoClick = () => {
        navigate(RoutesList.Home)
    };

    const { theme } = useThemeContext();
    const isLight = theme === Theme.Light;

    return (
        <div onClick={onHomeLogoClick} className={styles.logoWrapper}>
            {isLight ? <LightLogo /> : <LogoIcon />}
        </div>
    )
};

export default Logo;