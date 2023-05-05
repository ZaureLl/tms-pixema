import React, { FC } from "react";
import styles from "./ButtonsGroup.module.scss";
import { Bookmark } from "../../icons";
import { Share } from "../../icons/Share";
import classNames from "classnames";

type ButtonProps = {
    onClickBookmarkIcon?: () => void;
    isSaved?: boolean;
};

const ButtonsGroup: FC<ButtonProps> = ({ onClickBookmarkIcon, isSaved }) => {
    return (
        <div className={styles.btnGroup}>
            <div className={classNames(styles.leftBtn, styles.btn)} onClick={onClickBookmarkIcon}>{isSaved ? <Bookmark fill="#7B61FF" /> : <Bookmark />} </div>
            <a href="mailto:"><div className={classNames(styles.rightBtn, styles.btn)}><Share /></div></a>
        </div>
    )
};

export default ButtonsGroup;