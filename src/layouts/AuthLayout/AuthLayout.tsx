import React, { ReactNode } from "react";
import Title from "../../assets/components/Title";
import styles from "./AuthLayout.module.scss";
import { url } from "inspector";
import { LogoIcon } from "../../assets/icons";
import Logo from "../../assets/components/Logo/Logo";
import { Theme, useThemeContext } from "../../context/Theme/Theme";
import classNames from "classnames";

type Props = {
    title: string,
    children: ReactNode,
};

{/* <div className={classNames(styles.signInCtnr, {
    [styles.signInCtnrLight]: isLight,
})}></div> */}

const AuthLayout: React.FC<Props> = ({
    title,
    children,
}) => {

    const { theme } = useThemeContext();
    const isLight = theme === Theme.Light;
    console.log(isLight)

    return (
        <div className={styles.pageContanier}>
            <div className={styles.logoContanier}>
                <Logo />
            </div>
            <div className={styles.formWrapper}>
                <div className={classNames(styles.formContanier, {
                    [styles.formContanierLight]: isLight,
                })}>
                    <Title title={title} />
                    <div className={styles.form}>
                        {children}
                    </div>
                </div>
            </div>
            <div className={styles.footerContanier}>&copy; All Rights Reserved</div>
        </div>
    )
};
export default AuthLayout;