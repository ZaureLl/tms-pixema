import React, { FC, useMemo, useState } from "react";
import styles from "./UserMenu.module.scss";
import { ChevronDown, ChevronRight, UserIcon } from "../../icons";
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
                    <div onClick={onSettingsClick} className={styles.menuLink}>Settings</div>
                    <div onClick={onLogoutClick} className={styles.menuLink}>Log out</div>
                </div>
            );
        } else {
            return (
                <div className={styles.menuNotAut}>
                    <div className={styles.userIcon}><UserIcon /></div>
                    <div onClick={onSignInClick} className={styles.menuNotAutLink}>Sign in</div>
                    <ChevronRight />
                </div>
            );
        }
    }, [isLogin]);



    return (
        <div className={styles.burgerMenu}>
            <div className={styles.burgerMenuContent}>
                {isLogin ? (
                    <>
                        <div className={styles.userInfo}>
                            <div className={styles.userNameWrapper}>
                                <div className={styles.initials}>{initials}</div>
                                <div className={styles.fullMame}>{fullName}</div>
                            </div>
                            <div className={classNames(styles.arrow, {
                                [styles.close]: isLogin,
                            })} onClick={handleMenuClick}>
                                <ChevronDown />
                            </div>
                        </div>
                        {isOpen && menuItems}
                    </>

                ) : (
                    menuItems
                )}
            </div>
        </div>
    )
};

export default UserMenu;









