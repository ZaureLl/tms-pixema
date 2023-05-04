import React from "react";
import styles from "./ButtonsGroup.module.scss";
import { Bookmark } from "../../icons";
import { Share } from "../../icons/Share";
import classNames from "classnames";

const ButtonsGroup = () => {
    return (
        <div className={styles.btnGroup}>
            <div className={classNames(styles.leftBtn, styles.btn)}><Bookmark /></div>
            <a href="mailto:"><div className={classNames(styles.rightBtn, styles.btn)}><Share /></div></a>
        </div>
    )
};

export default ButtonsGroup;