import React, { useState } from "react";

import styles from "./Header.module.scss";
import Logo from "../../../assets/components/Logo/Logo";
import Input from "../../../assets/components/Input/Input";
import UserMenu from "../../../assets/components/UserMenu/UserMenu";
import { Theme, useThemeContext } from "../../../context/Theme/Theme";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { AuthSelectors } from "../../../redux/reducers/authSlice";

const Header = () => {

    const { theme } = useThemeContext();
    const isLight = theme === Theme.Light;

    const dispatch = useDispatch();

    const userName = "Artem Lapitsky";

    const isLoggedIn = useSelector(AuthSelectors.getLoggedIn);

    const capitalizeWords = (str: string): string => {
        const words = str.split(' ');
        const firstLetters = words.map(word => word.charAt(0));
        return firstLetters.join('');
    };

    const initials = capitalizeWords(userName);
    console.log(initials);


    return (

        <div className={styles.headerWrapper}>
            <div className={classNames(styles.logoWrapper)}>
                <Logo />
            </div>
            <div className={styles.inputWrapper}>
                <Input placeholder="Search" value="" onChange={() => { }} />
            </div>
            <div className={styles.userMenu}>
                <UserMenu isLogin={isLoggedIn} initials={initials} fullName={userName} />
            </div>
        </div>
    )
};

export default Header;