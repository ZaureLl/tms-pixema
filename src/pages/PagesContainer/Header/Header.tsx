import React, { useEffect, useState } from "react";

import styles from "./Header.module.scss";
import Logo from "../../../assets/components/Logo/Logo";
import Input from "../../../assets/components/Input/Input";
import UserMenu from "../../../assets/components/UserMenu/UserMenu";
import { Theme, useThemeContext } from "../../../context/Theme/Theme";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { AuthSelectors } from "../../../redux/reducers/authSlice";
import { FilmSelectors, clearListOfFilm, getAllFilms, setSearch } from "../../../redux/reducers/filmSlice";
import { PER_PAGE } from "../../../utils/constants";
import FilterPopup from "../../../assets/components/FilterPopup";
import { FilterIcon } from "../../../assets/icons/FilterIcon";

const Header = () => {

    const { theme } = useThemeContext();
    const isLight = theme === Theme.Light;

    const dispatch = useDispatch();
    const search = useSelector(FilmSelectors.getSearch);

    const [filterOpened, setFilterOpened] = useState(false);
    const [isOpened, setOpened] = useState(false);
    const [searchText, setSearchText] = useState('');

    const isLoginIn = true;

    const userName = "Artem Lapitsky";

    const isLoggedIn = useSelector(AuthSelectors.getLoggedIn);

    const capitalizeWords = (str: string): string => {
        const words = str.split(' ');
        const firstLetters = words.map(word => word.charAt(0));
        return firstLetters.join('');
    };

    useEffect(() => {
        setSearchText(search);
    }, [search])

    const onClickMenuButton = () => {
        setOpened(!isOpened);
    };

    const initials = capitalizeWords(userName);
    console.log(initials);

    const onSearchChange = (value: string) => {
        setSearchText(value);
    }

    const onSearchKeyDown = (event: any) => {
        if (event.key === 'Enter') {
            dispatch(setSearch(searchText));
            dispatch(clearListOfFilm());
            dispatch(getAllFilms({ perPage: PER_PAGE, page: 1, score: null }))
        }
    }

    return (
        <>
            <div className={styles.headerWrapper}>
                <div className={classNames(styles.logoWrapper)}>
                    <Logo />
                </div>
                <div className={styles.inputWrapper}>
                    <Input placeholder="Search" value={searchText} onChange={onSearchChange} onKeyDown={onSearchKeyDown} />
                    <div className={styles.filterIcon} onClick={() => { setFilterOpened(true) }}>
                        <FilterIcon />
                    </div>
                </div>
                <div className={styles.userMenu}>
                    <UserMenu isLogin={isLoggedIn} initials={initials} fullName={userName} />
                </div>
            </div>
            <FilterPopup isOpen={filterOpened} onClose={() => { setFilterOpened(false) }}></FilterPopup>
        </>
    )
};

export default Header;