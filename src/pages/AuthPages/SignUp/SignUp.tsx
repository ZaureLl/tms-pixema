import React, { useContext, useState, useMemo } from "react";

import styles from "./SignUp.module.scss";
import AuthLayout from "../../../layouts/AuthLayout";
import Input from "../../../assets/components/Input/Input";
import Button from "../../../assets/components/Button/Button";
import { Theme, useThemeContext } from "../../../context/Theme/Theme";
import { NavLink } from "react-router-dom";
import { RoutesList } from "../../Router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { signInUser } from "../../../redux/reducers/authSlice";
import classNames from "classnames";
import { ButtonType } from "../../../utils/@globalTypes";

const SignUp = () => {
    const device_name = "iphone";

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [nameTouched, setNameTouched] = useState(false);
    const [passwordTouched, setPasswordTouched] = useState(false);
    const [emailTouched, setEmailTouched] = useState(false);

    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const dispatch = useDispatch();

    const { theme } = useThemeContext();
    const isLight = theme === Theme.Light;

    const onChangeName = (value: string) => {
        setName(value);
    };

    const onChangeEmail = (value: string) => {
        setEmail(value);
    };

    const onChangePassword = (value: string) => {
        setPassword(value);
    };

    const onBlurName = () => {
        setNameTouched(true);
    };

    const onBlurEmail = () => {
        setEmailTouched(true);
    };

    const onBlurPassword = () => {
        setPasswordTouched(true);
    };

    const onSignUpClick = () => {
        dispatch(
            //////TOODO sign up user
            signInUser({
                data: { email, password, device_name },
                callback: () => console.log('test'),
            })
        );
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
        if (passwordTouched) {
            if (password.length === 0) {
                setPasswordError("Password is required field");
            } else {
                setPasswordError("");
            }
        }
    }, [password, passwordTouched]);

    const isValid = useMemo(() => {
        return (
            nameError.length === 0 &&
            emailError.length === 0 &&
            passwordError.length === 0 &&
            nameTouched &&
            emailTouched &&
            passwordTouched
        );
    }, [
        nameError,
        emailError,
        passwordError,
        nameTouched,
        emailTouched,
        passwordTouched,
    ]);

    return (
        <AuthLayout title="Sign Up">
            <div className={classNames(styles.signUpCtnr, {
                [styles.signUpCtnrLight]: isLight,
            })}>
                <div className={styles.formContainer}>
                    <Input
                        value={name}
                        onBlur={onBlurName}
                        onChange={onChangeName}
                        type={"text"}
                        title="Name"
                        placeholder="Your name"
                        errorText={nameError}
                    />
                    <Input
                        value={email}
                        onBlur={onBlurEmail}
                        onChange={onChangeEmail}
                        type={"text"}
                        title="Email"
                        placeholder="Your email"
                        errorText={emailError}
                    />
                    <Input
                        value={password}
                        onBlur={onBlurPassword}
                        onChange={onChangePassword}
                        type={"password"}
                        title="Password"
                        placeholder="Your password"
                        errorText={passwordError}
                    />
                </div>
                <div
                    className={classNames(styles.bottomGroup, {
                        [styles.darkThemebottomGroupLight]: isLight,
                    })}
                >
                    Forgot password?
                    <Button
                        title={"Sign In"}
                        onClick={onSignUpClick}
                        type={ButtonType.Regular}
                        disabled={!isValid}
                    />
                    <div
                        className={classNames(styles.singUp, {
                            [styles.darkSingUpLight]: isLight,
                        })}
                    >
                        Already have an account?{" "}
                        <NavLink to={RoutesList.SignIn} className={styles.navigateLink}>
                            Sign In
                        </NavLink>
                    </div>
                </div>
            </div>
        </AuthLayout>
    );
};

export default SignUp;