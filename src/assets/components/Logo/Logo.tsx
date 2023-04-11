import React from "react";

import { LogoIcon } from "../../icons";
import styles from "./Logo.module.scss";
import { Navigate, useNavigate } from "react-router-dom";
import { RoutesList } from "../../../pages/Router";


const Logo = () => {

    const navigate = useNavigate();

    const onHomeLogoClick = () => {
        navigate(RoutesList.Home)
    };

    return (
        <div onClick={onHomeLogoClick} className={styles.logoWrapper}>
            <LogoIcon />
        </div>
    )
};

export default Logo;