import React, { useEffect, useState } from "react";
import styles from "./Film.module.scss";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FilmSelectors, clearListOfFilm, getRecommendedFilms, getSingleFilm } from "../../redux/reducers/filmSlice";
import SingleFilm from "../../assets/components/SingleFilm/SingleFilm";
import Loader from "../../assets/components/Loader/Loader";
import RecommendedFilmsSlider from "../../assets/components/RecommendedFilmsSlider";


const Film = () => {
    const params = useParams();
    const dispatch = useDispatch();
    console.log(params, "test");

    const isLoading = useSelector(FilmSelectors.getSingleFilmLoading);
    const isLoadingRecommendedFilms = useSelector(FilmSelectors.getRecommendedFilmsLoading);

    useEffect(() => {
        const id = Number(params.id);
        dispatch(getSingleFilm({ id }));
        dispatch(getRecommendedFilms({ id }));
        dispatch(clearListOfFilm());
    }, [params]);

    const film = useSelector(FilmSelectors.getSingleFilm);
    const recommendedFilmList = useSelector(FilmSelectors.getRecommendedFilms);

    return (
        <>
            {isLoading ? (
                <Loader />
            ) : (
                <SingleFilm film={film} />
            )}
            <h2 className={styles.headerRecomendation}>Recommendations</h2>
            {(isLoadingRecommendedFilms && !recommendedFilmList.length) ? (
                <Loader />
            ) : (
                <div className={styles.sliderWrapper}>
                    < RecommendedFilmsSlider recommendedFilmList={recommendedFilmList} />
                </div>
            )}
        </>
    )
};

export default Film;