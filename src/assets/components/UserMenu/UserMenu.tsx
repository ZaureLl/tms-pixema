import React, { FC, useMemo, useState } from "react";
import styles from "./UserMenu.module.scss";
import { ChevronDown, ChevronRight } from "../../icons";
import { useNavigate } from "react-router-dom";
import { RoutesList } from "../../../pages/Router";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../../redux/reducers/authSlice";
import classNames from "classnames";

interface Props {
    isLogin: boolean;
    initials: string;
    fullName: string;
}

const UserMenu: FC<Props> = ({ isLogin, initials, fullName }) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [isOpen, setIsOpen] = useState(false);

    const handleMenuClick = () => {
        setIsOpen(!isOpen);
    };

    const onSignInClick = () => {
        navigate(RoutesList.SignIn)
    }

    const onLogoutClick = () => {
        dispatch(logoutUser());
        navigate(RoutesList.SignIn)
    };

    const onSettingsClick = () => {
        navigate(RoutesList.Settings)
    }

    const menuItems = useMemo(() => {
        if (isLogin) {
            return (
                <div className={styles.menuItems}>
                    <div onClick={onSettingsClick}>Settings</div>
                    <div onClick={onLogoutClick}>Log out</div>
                </div>
            );
        } else {
            return (
                <div className={styles.menuItems}>
                    <div onClick={onSignInClick}>Sign in</div>
                    <ChevronRight />
                </div>
            );
        }
    }, [isLogin]);



    return (
        <div className={styles.burgerMenu}>
            {isLogin ? (
                <div className={styles.userInfo}>
                    <div className={styles.stylesinitials}>{initials}</div>
                    <div className={styles.fullMame}>{fullName}</div>
                    <div className={classNames(styles.arrow, {
                        [styles.close]: isLogin,
                    })} onClick={handleMenuClick}>
                        <ChevronDown />
                    </div>
                    {isOpen && menuItems}
                </div>
            ) : (
                menuItems
            )}
        </div>
    )
};

export default UserMenu;









