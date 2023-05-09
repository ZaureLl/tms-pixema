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
import { signUpUser } from "../../../redux/reducers/authSlice";
import classNames from "classnames";
import { ButtonType } from "../../../utils/@globalTypes";

const SignUp = () => {

    const dispatch = useDispatch();

    const { theme } = useThemeContext();
    const isLight = theme === Theme.Light;

    const token_name = "iphone 12";

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");

    const [nameTouched, setNameTouched] = useState(false);
    const [passwordTouched, setPasswordTouched] = useState(false);
    const [emailTouched, setEmailTouched] = useState(false);
    const [passwordConfirmationTouched, setPasswordConfirmationTouched] = useState(false);

    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [passwordConfirmationError, setPasswordConfirmationError] = useState("");

    const onChangeName = (value: string) => {
        setName(value);
    };

    const onChangeEmail = (value: string) => {
        setEmail(value);
    };

    const onChangePassword = (value: string) => {
        setPassword(value);
    };

    const onChangePasswordConfirmation = (value: string) => {
        setPasswordConfirmation(value);
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

    const onBlurPasswordConfirmation = () => {
        setPasswordConfirmationTouched(true);
    };

    const onSignUpClick = () => {
        dispatch(signUpUser({
            data: { email, password, password_confirmation: passwordConfirmation, token_name },
            callback: () => console.log('test', email, password, passwordConfirmation, token_name),
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

    useEffect(() => {
        if (password !== passwordConfirmation && passwordConfirmationTouched) {
            setPasswordConfirmationError("Passwords must match");
        } else {
            setPasswordConfirmationError("");
        }
    }, [passwordConfirmation, password, passwordConfirmationTouched]);

    const isValid = useMemo(() => {
        return (
            nameError.length === 0 &&
            emailError.length === 0 &&
            passwordError.length === 0 &&
            passwordConfirmationError.length === 0 &&
            nameTouched &&
            emailTouched &&
            passwordTouched &&
            passwordConfirmationTouched
        );
    }, [
        nameError,
        emailError,
        passwordError,
        nameTouched,
        emailTouched,
        passwordTouched,
        passwordConfirmationTouched,
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
                    <Input
                        value={passwordConfirmation}
                        onBlur={onBlurPasswordConfirmation}
                        onChange={onChangePasswordConfirmation}
                        type={"password"}
                        title="Confirm password"
                        placeholder="Confirm  password"
                        errorText={passwordConfirmationError}
                    />
                </div>
                <div
                    className={classNames(styles.bottomGroup, {
                        [styles.darkThemebottomGroupLight]: isLight,
                    })}
                >
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