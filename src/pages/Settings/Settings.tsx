import React, { useEffect, useMemo, useState } from "react";

import styles from "./Settings.module.scss";
import Button from "../../assets/components/Button/Button";
import { ButtonType } from "../../utils/@globalTypes";
import Input from "../../assets/components/Input/Input";
import Switch from "rc-switch";
import "../../assets/switcher/switcher.scss";
import { Theme, useThemeContext } from "../../context/Theme/Theme";
import classNames from "classnames";


const Settings = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [nameTouched, setNameTouched] = useState(false);
    const [emailTouched, setEmailTouched] = useState(false);
    const [passwordTouched, setPasswordTouched] = useState(false);
    const [newPasswordTouched, setNewPasswordTouched] = useState(false);
    const [confirmPasswordTouched, setConfirmPasswordTouched] = useState(false);

    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [newPasswordError, setNewPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    const onBlurName = () => {
        setNameTouched(true);
    };
    const onBlurEmail = () => {
        setEmailTouched(true);
    };
    const onBlurPassword = () => {
        setPasswordTouched(true);
    };
    const onBlurNewPassword = () => {
        setNewPasswordTouched(true);
    };
    const onBlurConfirmPassword = () => {
        setConfirmPasswordTouched(true);
    };


    useEffect(() => {
        if (name.length === 0 && nameTouched) {
            setNameError("Name is required field");
        } else {
            setNameError("");
        }
    }, [name, nameTouched]);

    useEffect(() => {
        if (email.length === 0 && emailTouched) {
            setEmailError("Email is required field");
        } else {
            setEmailError("");
        }
    }, [email, emailTouched]);

    useEffect(() => {
        if (password.length === 0 && (newPasswordTouched || confirmPasswordTouched)) {
            setPasswordError("Enter current password")
        } else {
            setPasswordError("");
        }
    }, [password, newPasswordTouched, confirmPasswordTouched]);

    useEffect(() => {
        if (newPassword !== confirmPassword) {
            setConfirmPasswordError("Passwords must match");
        } else if ((newPassword.length === 0 || confirmPassword.length === 0) && newPasswordTouched) {
            setNewPasswordError("Password is required field");
        } else {
            setConfirmPasswordError("");
            setNewPasswordError("");
        }
    }, [confirmPassword, newPassword]);

    const onChangeName = (value: string) => {
        setName(value)
    };
    const onChangeEmail = (value: string) => {
        setEmail(value)
    };
    const onChangePassword = (value: string) => {
        setPassword(value)
    };
    const onChangeNewPassword = (value: string) => {
        setNewPassword(value)
    };
    const onChangeConfirmPassword = (value: string) => {
        setConfirmPassword(value)
    };

    const isValidCancelBtn = true;

    const isValidSaveBtn = useMemo(() => {
        return (
            nameError.length === 0 &&
            emailError.length === 0 &&
            passwordError.length === 0 &&
            newPasswordError.length === 0 &&
            confirmPasswordError.length === 0
        );
    }, [
        nameError,
        emailError,
        nameTouched,
        emailTouched,
        passwordError,
        passwordTouched,
        newPasswordTouched,
        newPasswordError,
        confirmPasswordTouched,
        confirmPasswordTouched,
    ]);

    const { theme, onChangeTheme } = useThemeContext();

    const isLight = theme === Theme.Light;

    function ThemeToggle(value: boolean) {
        const newTheme = value ? Theme.Dark : Theme.Light;
        onChangeTheme(newTheme);
        console.log(newTheme);
    }

    return (
        <div className={classNames(styles.contentWrapper, { [styles.contentWrapperLight]: isLight })}>
            <div className={styles.settingsWrapper}>
                <div className={styles.profileSettingsWrapper}>
                    <h2>
                        Profile
                    </h2>
                    <div className={classNames(styles.profileInputsWrapper, { [styles.profileInputsWrapperLight]: isLight })}>
                        <div className={styles.nameWrapper}>
                            <Input placeholder="Artem Lapitsky" value={name} onChange={onChangeName} title="Name"
                                onBlur={onBlurName}
                                errorText={nameError} />
                        </div>
                        <div className={styles.emailWrapper}>
                            <Input placeholder="a.lapitsky@gmail.com" value={email} onChange={onChangeEmail} title="Email" type="email" onBlur={onBlurEmail} errorText={emailError} />
                        </div>
                    </div>
                </div>
                <div className={styles.passwordSettingsWrapper}>
                    <h2>
                        Password
                    </h2>
                    <div className={classNames(styles.passwordInputsWrapper, { [styles.passwordInputsWrapperLight]: isLight })}>
                        <div className={styles.asideLargeContainer}>
                            <Input placeholder="Your password" value={password} onChange={onChangePassword} title="Password" type="password" inputClassName={styles.password} errorText={passwordError} onBlur={onBlurPassword} />
                        </div>
                        <div className={styles.asideContainer}>
                            <div>
                                <Input placeholder="New password" value={newPassword} onChange={onChangeNewPassword} title="New password" type="password" errorText={newPasswordError} onBlur={onBlurNewPassword} />
                            </div>
                            <div>
                                <Input placeholder="Confirm password" value={confirmPassword} onChange={onChangeConfirmPassword} title="Confirm password" type="password" errorText={confirmPasswordError} onBlur={onBlurConfirmPassword} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.colorModeSettingsWrapper}>
                    <h2>
                        Color mode
                    </h2>
                    <div className={classNames(styles.colorModeContentWrapper, { [styles.colorModeContentWrapperLight]: isLight })}>
                        <div className={styles.colorModeAsideWrapper}>
                            <h3>Dark</h3>
                            <p className={styles.textColorModeSwither}>Use dark thema</p>
                        </div>
                        <Switch onChange={ThemeToggle} defaultChecked={!isLight} />
                    </div>
                </div>
            </div>
            <div className={styles.buttoWrapper}>
                <Button title={"Cancel"} type={ButtonType.Regular} onClick={() => { }} disabled={!isValidCancelBtn} />
                <Button title={"Save"} type={ButtonType.Regular} onClick={() => { }} disabled={!isValidSaveBtn} />
            </div>
        </div>
    )
};


export default Settings;