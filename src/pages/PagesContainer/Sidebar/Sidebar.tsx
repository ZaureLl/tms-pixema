import React from "react";

import styles from "./Sidebar.module.scss";
import AsideNavLink from "../../../assets/components/AsideNavLink/AsideNavLink";
import { Bookmark, Fire, Gear, Shape } from "../../../assets/icons";
import { RoutesList } from "../../Router";


const Sidebar = () => {

    return (
        <div className={styles.sidebarContainer}>
            <div className={styles.linksContainer}>
                <AsideNavLink text="Home" icon={<Shape />} navigateTo={RoutesList.Home} />
                <AsideNavLink text="Trends" icon={<Fire />} navigateTo={RoutesList.Trends} />
                <AsideNavLink text="Favorites" icon={<Bookmark />} navigateTo={RoutesList.Favorites} />
                <AsideNavLink text="Settings" icon={<Gear />} navigateTo={RoutesList.Settings} />
            </div>
            <div className={styles.copyrightWrapper}>&copy; All Rights Reserved</div>
        </div>
    )

};

export default Sidebar;