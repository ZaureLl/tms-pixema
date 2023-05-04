import React, { useState, useMemo } from "react";

import styles from "./ResetPassword.module.scss";
import AuthLayout from "../../../layouts/AuthLayout";
import Input from "../../../assets/components/Input/Input";
import Button from "../../../assets/components/Button/Button";
import { Theme, useThemeContext } from "../../../context/Theme/Theme";
import { useEffect } from "react";
import { ButtonType } from "../../../utils/@globalTypes";

const ResetPassword = () => {

    const [email, setEmail] = useState("");

    const [emailTouched, setEmailTouched] = useState(false);

    const [emailError, setEmailError] = useState("");

    const { theme } = useThemeContext();
    const isLight = theme === Theme.Light;

    const onChangeEmail = (value: string) => {
        setEmail(value);
    };


    const onBlurEmail = () => {
        setEmailTouched(true);
    };

    const onResetClick = () => {
        // dispatch(
        //     signInUser({
        //         data: { email,device_name },
        //         callback: () => console.log('test'),
        //     })
        // );
    };

    useEffect(() => {
        if (email.length === 0 && emailTouched) {
            setEmailError("Email is required field");
        } else {
            setEmailError("");
        }
    }, [email, emailTouched]);

    const isValid = useMemo(() => {
        return (
            emailError.length === 0 &&
            emailTouched
        );
    }, [
        emailError,
        emailTouched,
    ]);

    return (
        <AuthLayout title="Reset password">
            <div className={styles.formContainer}>
                <Input
                    value={email}
                    onBlur={onBlurEmail}
                    onChange={onChangeEmail}
                    type={"text"}
                    title="Email"
                    placeholder="Your email"
                    errorText={emailError}
                />
                <Button
                    title={"Reset"}
                    onClick={onResetClick}
                    type={ButtonType.Regular}
                    disabled={!isValid}
                />
            </div>
        </AuthLayout>
    );
};

export default ResetPassword;