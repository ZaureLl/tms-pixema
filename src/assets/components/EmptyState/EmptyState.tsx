import React, { FC } from "react";
import classNames from "classnames";

import { Theme, useThemeContext } from "../../../context/Theme/Theme";
import styles from "./EmptyState.module.scss";
import emptyState from "../../images/emptyState.png";

type EmptyStateProps = {
    description: string;
};

const EmptyState: FC<EmptyStateProps> = ({ description }) => {
    const { theme } = useThemeContext();
    return (
        <div className={styles.emtyStateWrapper}>
            <div
                className={classNames(styles.container, {
                    [styles.lightContainer]: theme === Theme.Light,
                })}
            >
                <img alt="" src={emptyState} />
                <div className={styles.description}>{description}</div>
            </div>
        </div>
    );
};

export default EmptyState;
