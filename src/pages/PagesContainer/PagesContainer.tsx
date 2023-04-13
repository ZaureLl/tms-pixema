import React from "react";
import { Outlet } from "react-router-dom";
import { Theme, useThemeContext } from "../../context/Theme/Theme";
import Header from "./Header/Header";
import styles from "./PagesContainer.module.scss"
import Sidebar from "./Sidebar/Sidebar";

const PagesContainer = () => {

    return (
        <div className={styles.pagesContainerWrapper}>
            <Header />
            <div className={styles.mainWrapper}>
                <div className={styles.sidebarWrapper}><Sidebar /></div>
                <div className={styles.outletWrapper}><Outlet /></div>
            </div>
        </div>
    )
};

export default PagesContainer;