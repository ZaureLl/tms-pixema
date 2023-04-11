import React, { FC, ReactNode } from "react";
import classNames from "classnames";

import styles from "./Button.module.scss";
import { title } from "process";
import { ButtonType } from "../../../utils/@globalTypes";

type ButtonProps = {
    title: string | ReactNode;
    onClick: () => void;
    disabled?: boolean;
    className?: string;
    type: ButtonType;
};

const btnStyles = {
    [ButtonType.Regular]: styles.regularButton,
    [ButtonType.IconBtn]: styles.iconButton,
}

const Button: FC<ButtonProps> = ({
    title,
    onClick,
    disabled,
    className,
    type,
}) => {

    const buttonClassName = btnStyles[type];

    return (
        <button onClick={disabled ? undefined : onClick}
            className={classNames(className, buttonClassName, {
                [styles.disabledButton]: disabled,
            })}>
            {title}
        </button>
    );
};

export default Button;