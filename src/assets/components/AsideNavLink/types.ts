import { RoutesList } from './../../../pages/Router';
import { ReactNode } from "react";

export type LinkProps = {
    icon: ReactNode,
    text: string,
    navigateTo: RoutesList,
    className?: string,
};