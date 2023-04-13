import React from "react";
import styles from "./UserMenu.module.scss";
import { ChevronDown, ChevronRight, UserIcon } from "../../icons";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import Router from "../../../pages/Router";
import { RoutesList } from "../../../pages/Router";
import { ButtonType } from "../../../utils/@globalTypes";

const UserMenu = () => {
    const navigate = useNavigate();
    const isLoginIn = true;
    const onSignInClick = () => {
        navigate(RoutesList.SignIn)
    }
    return (
        <div>
            {isLoginIn ? (
                <div onClick={onSignInClick} className={styles.userMenuWrapper}>
                    <Button title={<UserIcon />} onClick={() => { }} type={ButtonType.IconBtn} />
                    <span className={styles.linlWrapper}>Sign In</span>
                    <div className={styles.iconWrapper}><ChevronRight /></div>
                </div>) : (
                <div>unknown</div>)}
        </div>

    )
};

export default UserMenu;