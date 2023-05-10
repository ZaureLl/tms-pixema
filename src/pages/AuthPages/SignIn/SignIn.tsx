import React, { useContext, useState, useMemo } from "react";

import styles from "./SignIn.module.scss";
import AuthLayout from "../../../layouts/AuthLayout";
import Input from "../../../assets/components/Input/Input";
import Button from "../../../assets/components/Button/Button";
import { Theme, useThemeContext } from "../../../context/Theme/Theme";
import { NavLink, useNavigate } from "react-router-dom";
import { RoutesList } from "../../Router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { signInUser } from "../../../redux/reducers/authSlice";
import classNames from "classnames";
import { ButtonType } from "../../../utils/@globalTypes";




const SignIn = () => {

    const device_name = "iphone";

    const { theme } = useThemeContext();
    const isLight = theme === Theme.Light;
    console.log("test theme" + isLight, theme)

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [passwordTouched, setPasswordTouched] = useState(false);
    const [emailTouched, setEmailTouched] = useState(false);

    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onChangeEmail = (value: string) => {
        setEmail(value);
    };

    const onChangePassword = (value: string) => {
        setPassword(value);
    };

    const onBlurEmail = () => {
        setEmailTouched(true);
    };

    const onBlurPassword = () => {
        setPasswordTouched(true);
    };

    const onSignInClick = () => {
        dispatch(
            signInUser({
                data: { email, password, token_name: device_name },
                callback: () => navigate(RoutesList.Home),
            })
        );
    };

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
            emailError.length === 0 &&
            passwordError.length === 0 &&
            password &&
            email
        );
    }, [
        emailError,
        passwordError,
        password,
        email,
    ]);

    return (
        <AuthLayout title="Sign In">
            <div className={classNames(styles.signInCtnr, {
                [styles.signInCtnrLight]: isLight,
            })}>
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
                        onClick={onSignInClick}
                        type={ButtonType.Regular}
                        disabled={!isValid}
                    />
                    <div
                        className={classNames(styles.singUp, {
                            [styles.darkSingUpLight]: isLight,
                        })}
                    >
                        Don’t have an account?{" "}
                        <NavLink to={RoutesList.SignUp} className={styles.navigateLink}>
                            Sign Up
                        </NavLink>
                    </div>
                </div>
            </div>
        </AuthLayout>
    );
};

export default SignIn;