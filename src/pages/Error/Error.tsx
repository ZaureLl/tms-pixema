import React from "react";
import styles from "./Error.module.scss";
import AuthLayout from "../../layouts/AuthLayout/AuthLayout";
import Button from "../../assets/components/Button/Button";
import { ButtonType } from "../../utils/@globalTypes";
import { useNavigate } from "react-router-dom";
import { RoutesList } from "../Router";

const Error = () => {
    const navigate = useNavigate();
    return (
        <AuthLayout title="Page not found">
            <p className={styles.errorName}>
                Error 404
            </p>
            <Button title={"To main page"} type={ButtonType.Regular} onClick={() => { navigate(RoutesList.Home) }} className="w-100" />
        </AuthLayout>
    )
};

export default Error;