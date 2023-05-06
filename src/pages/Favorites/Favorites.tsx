import React from "react";
import { useSelector } from "react-redux";
import styles from "./Favorites.module.scss";

import FilmCard from "../../assets/components/FilmCard/FilmCard";


import { FilmSelectors } from "../../redux/reducers/filmSlice";
import EmptyState from "../../assets/components/EmptyState";


const Favorites = () => {

    const filmList = useSelector(FilmSelectors.getSavedFilms);

    if (filmList.length) {
        return (
            <div className={styles.container}>
                {filmList.map((film) => {
                    if (film) {
                        return <FilmCard key={film.id} film={film} />
                    }
                })}
            </div>
        )
    }

    else {
        return (
            <EmptyState description="You don't have saved films" />
        )
    }
};

export default Favorites;