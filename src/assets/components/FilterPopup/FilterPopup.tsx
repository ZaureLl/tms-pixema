import React, { useEffect, useState } from "react";
import styles from "./FilterPopup.module.scss";
import ButtonSwitcher from "../ButtonSwitcher";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { ButtonType, Filter } from "../../../utils/@globalTypes";
import { useDispatch, useSelector } from "react-redux";
import { FilmSelectors, clearListOfFilm, getAllFilms, setFilmFilter, setSearch } from "../../../redux/reducers/filmSlice";
import { FILTER_DEFAULTS, PER_PAGE } from "../../../utils/constants";
import ChipsTextarea from "../ChipsTextarea";

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

const FilterPopup: React.FC<Props> = ({ isOpen, onClose }) => {
    const dispatch = useDispatch();
    const search = useSelector(FilmSelectors.getSearch);

    const [filter, setFilter] = useState({ ...FILTER_DEFAULTS });
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        setSearchText(search);
    }, [search])

    const handleClose = () => {
        onClose();
    };

    const getFilms = () => {
        dispatch(clearListOfFilm());
        dispatch(getAllFilms({ perPage: PER_PAGE, page: 1, score: null }))
    }

    const clearFilter = () => {
        onSearchChange('');
        setFilter({ ...FILTER_DEFAULTS });
        dispatch(setFilmFilter({ ...FILTER_DEFAULTS }));
        getFilms();
    }

    const showResults = () => {
        dispatch(setFilmFilter(filter));
        getFilms();
    }

    const onSearchChange = (value: string) => {
        setSearchText(value);
        dispatch(setSearch(value));
    }

    return (
        <>
            <div
                className={`${styles.overlay} ${isOpen ? styles.active : ""}`}
                onClick={handleClose}
            />
            <div
                className={`${styles.container} ${isOpen ? styles.active : ""}`}
            >
                <div className={styles.header}>
                    <h2>Filters</h2>
                    <button className={styles.closeButton} onClick={handleClose}>
                        ×
                    </button>
                </div>
                <div className={styles.content}>
                    <div className={styles.fieldLine}>
                        <label>Sort by</label>
                        <ButtonSwitcher
                            values={['rating', 'year']}
                            selectedValue={filter.sortBy}
                            onChange={(sortBy) => { setFilter({ ...filter, sortBy }) }}
                        ></ButtonSwitcher>
                    </div>
                    <div className={styles.fieldLine}>
                        <label>Full or short movie name</label>
                        <Input
                            value={searchText}
                            onChange={onSearchChange}
                            type={"text"}
                            placeholder="Your text"
                        />
                    </div>
                    <div className={styles.fieldLine}>
                        <label>Genre</label>
                        <ChipsTextarea
                            value={filter.genre}
                            placeholder="Your text"
                            onChange={(genre) => { setFilter({ ...filter, genre }) }}
                        />
                    </div>
                    <div className={styles.fieldLine}>
                        <label>Year</label>
                        <div className={styles.fieldRow}>
                            <div className={styles.fieldColumn}>
                                <Input
                                    value={filter.yearFrom}
                                    onChange={(yearFrom) => { setFilter({ ...filter, yearFrom }) }}
                                    type={"text"}
                                    placeholder="From"
                                />
                            </div>
                            <div className={styles.fieldColumn}>
                                <Input
                                    value={filter.yearTo}
                                    onChange={(yearTo) => { setFilter({ ...filter, yearTo }) }}
                                    type={"text"}
                                    placeholder="To"
                                />
                            </div>
                        </div>
                    </div>
                    <div className={styles.fieldLine}>
                        <label>Rating</label>
                        <div className={styles.fieldRow}>
                            <div className={styles.fieldColumn}>
                                <Input
                                    value={filter.ratingFrom}
                                    onChange={(ratingFrom) => { setFilter({ ...filter, ratingFrom }) }}
                                    type={"text"}
                                    placeholder="From"
                                />
                            </div>
                            <div className={styles.fieldColumn}>
                                <Input
                                    value={filter.ratingTo}
                                    onChange={(ratingTo) => { setFilter({ ...filter, ratingTo }) }}
                                    type={"text"}
                                    placeholder="To"
                                />
                            </div>
                        </div>
                    </div>
                    <div className={styles.fieldLine}>
                        <label>Country</label>
                        <Input
                            value={filter.country}
                            onChange={(country) => { setFilter({ ...filter, country }) }}
                            type={"text"}
                            placeholder="Your text"
                        />
                    </div>
                </div>
                <div className={styles.buttons}>
                    <Button title="Clear" type={ButtonType.Regular} onClick={clearFilter}></Button>
                    <Button title="Show results" type={ButtonType.Regular} onClick={showResults}></Button>
                </div>
            </div>
        </>
    );
};

export default FilterPopup;
