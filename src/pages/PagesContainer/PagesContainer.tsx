import React from "react";
import { Outlet } from "react-router-dom";
import { Theme, useThemeContext } from "../../context/Theme/Theme";
import Header from "./Header/Header";
import styles from "./PagesContainer.module.scss"

const PagesContainer = () => {

    return (
        <div className={styles.pagesContainerWrapper}>
            <Header />
            <div>
                <aside>
                    aside
                </aside>
                <Outlet />
            </div>
        </div>
    )
};

export default PagesContainer;