import React, { ReactNode } from "react";
import Title from "../../assets/components/Title";
import styles from "./AuthLayout.module.scss";
import { url } from "inspector";
import { LogoIcon } from "../../assets/icons";

type Props = {
    title: string,
    children: ReactNode,
};

const AuthLayout: React.FC<Props> = ({
    title,
    children,
}) => (
    <div className={styles.pageContanier}>
        <div className={styles.logoContanier}>
            <LogoIcon />
        </div>
        <div className={styles.formWrapper}>
            <div className={styles.formContanier}>
                <Title title={title} />
                <div className={styles.form}>
                    {children}
                </div>
            </div>
        </div>
        <div className={styles.footerContanier}>&copy; All Rights Reserved</div>
    </div>
);
export default AuthLayout;