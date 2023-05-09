import React, { FC } from "react";
import styles from "./ButtonsGroup.module.scss";
import { Bookmark } from "../../icons";
import { Share } from "../../icons/Share";
import classNames from "classnames";
import { Theme, useThemeContext } from "../../../context/Theme/Theme";

type ButtonProps = {
    onClickBookmarkIcon?: () => void;
    isSaved?: boolean;
};

const ButtonsGroup: FC<ButtonProps> = ({ onClickBookmarkIcon, isSaved }) => {

    const { theme } = useThemeContext();
    const isLight = theme === Theme.Light;

    return (
        <div className={classNames(styles.btnGroup)}>
            <div className={classNames(styles.leftBtn, styles.btn, { [styles.btnLight]: isLight })} onClick={onClickBookmarkIcon}>{isSaved ? <Bookmark fill="#7B61FF" /> : <Bookmark />} </div>
            <a href="mailto:"><div className={classNames(styles.rightBtn, styles.btn, { [styles.btnLight]: isLight })}><Share /></div></a>
        </div>
    )
};

export default ButtonsGroup;