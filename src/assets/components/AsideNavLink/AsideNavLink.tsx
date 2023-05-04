import React, { FC } from "react";
import styles from "./AsideNavLink.module.scss";
import { Link } from "react-router-dom";
import { LinkProps } from "./types";
import { useLocation } from "react-router-dom";


const AsideNavLink: FC<LinkProps> = ({
    icon,
    text,
    navigateTo,
    className,
}) => {

    const location = useLocation();

    return (
        <div>
            <Link to={navigateTo} className={(location.pathname === navigateTo ? styles.active : "") + ' ' + styles.link}> {icon} {text} </Link>
        </div>
    )
};

export default AsideNavLink;