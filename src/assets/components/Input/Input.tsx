import React, { ChangeEvent, FC, KeyboardEvent } from "react";
import classNames from "classnames";
import styles from "./Input.module.scss";

type InputProps = {
    value: string;
    onChange: (value: string) => void;
    onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
    title?: string;
    placeholder: string;
    disabled?: boolean;
    errorInput?: string;
    type?: string;
    inputClassName?: string;
    onBlur?: () => void
};

const Input: FC<InputProps> = ({
    value,
    onChange,
    title,
    type,
    placeholder,
    disabled,
    errorInput,
    inputClassName,
    onKeyDown,
    onBlur,
}) => {
    const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value);
    };

    return (
        <>
            {title && <div className={styles.title}>{title}</div>}
            <input
                value={value}
                className={classNames(styles.input, inputClassName, {
                    [styles.disableInput]: disabled,
                    [styles.valid]: errorInput,
                })}
                placeholder={placeholder}
                onKeyDown={onKeyDown}
                onChange={onChangeText}
                onBlur={onBlur}
                disabled={disabled}
                type={type}
            />
            {errorInput && <div className={styles.validText}>{errorInput}</div>}
        </>
    );
};

export default Input;