import React, { useEffect } from "react";
import styles from "./Trends.module.scss";
import EmptyState from "../../assets/components/EmptyState";
import { useDispatch, useSelector } from "react-redux";
import { FilmSelectors, clearListOfFilm, getAllFilms } from "../../redux/reducers/filmSlice";
import FilmCard from "../../assets/components/FilmCard";
import { PER_PAGE, SCORE } from "../../utils/constants";
import Loader from "../../assets/components/Loader";


const Trends = () => {
    const dispatch = useDispatch();

    const isLoading = useSelector(FilmSelectors.getAllFilmsLoading);
    const filmList = useSelector(FilmSelectors.getAllFilms);

    useEffect(() => {
        dispatch(clearListOfFilm());
        dispatch(getAllFilms({ score: SCORE, perPage: PER_PAGE, page: 1 }));
    }, []);

    return (
        <>
            {(isLoading) ? (
                <Loader />
            ) : (
                <div className={styles.container}>
                    {filmList.map((film) => {
                        if (film) {
                            return <FilmCard key={film.id} film={film} />
                        }
                    })}
                </div>
            )}
        </>
    )
};

export default Trends;