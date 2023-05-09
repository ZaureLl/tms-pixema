import React, { useState } from "react";

import styles from "./Header.module.scss";
import Logo from "../../../assets/components/Logo/Logo";
import Input from "../../../assets/components/Input/Input";
import { useNavigate } from "react-router-dom";
import { RoutesList } from "../../Router";
import { LightLogo, UserIcon } from "../../../assets/icons";
import Button from "../../../assets/components/Button/Button";
import { ButtonType } from "../../../utils/@globalTypes";
import UserMenu from "../../../assets/components/UserMenu/UserMenu";
import { Theme, useThemeContext } from "../../../context/Theme/Theme";
import classNames from "classnames";

const Header = () => {

    const { theme } = useThemeContext();
    const isLight = theme === Theme.Light;

    const [isOpened, setOpened] = useState(false);
    const isLoginIn = true;
    const userName = "Artem Lapitsky";

    const navigate = useNavigate();

    const onClickMenuButton = () => {
        setOpened(!isOpened);
    };

    const onAuthButtonClick = () => {
        navigate(RoutesList.SignIn);
    };


    return (
        <div className={styles.headerWrapper}>
            <div className={classNames(styles.logoWrapper)}>
                <Logo />
            </div>
            <div className={styles.inputWrapper}>
                <Input placeholder="Search" value="" onChange={() => { }} />
            </div>
            <div className={styles.userMenu}>

                <UserMenu />
            </div>

        </div>
    )

};

export default Header;