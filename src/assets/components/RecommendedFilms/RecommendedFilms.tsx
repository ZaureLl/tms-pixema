import React, { FC } from "react";
import styles from "./RecommendedFilms.module.scss";
import { useNavigate } from "react-router-dom";
import { RecommendedFilm } from "../../../utils/@globalTypes";
import EmptyState from "../EmptyState";

enum ratingType {
    Max,
    Medium,
    Low,
};

const ratingStyles = {
    [ratingType.Max]: styles.max,
    [ratingType.Medium]: styles.medium,
    [ratingType.Low]: styles.low,
};

type RecommendedFilmProps = {
    film: RecommendedFilm;
};

const RecommendedFilms: FC<RecommendedFilmProps> = ({ film }) => {
    const navigate = useNavigate();

    if (film) {
        const { id, rating, name, poster, year } = film;


        const onFilmNameClick = () => {
            navigate(`/${id}`);
            console.log("nav", id)
        };

        let ratingClass = ratingStyles[ratingType.Medium];
        const ratingStyle = () => {
            if (Number(rating) >= 7.5) {
                ratingClass = ratingStyles[ratingType.Max]
            } else if (Number(rating) <= 5) {
                ratingClass = ratingStyles[ratingType.Low]
            }
        };

        ratingStyle();


        return (
            <>
                <div className={styles.container}>
                    <div>
                        <div className={styles.imgContainer}>
                            <img src={poster} ></img>
                        </div>
                        <div className={styles.filmName} onClick={onFilmNameClick}>{name}</div>
                        <div className={styles.filmYear}>{year}</div>
                    </div>
                </div>
            </>
        )
    }
    else {
        return (
            <EmptyState description="No results found" />
        )
    }
};

export default RecommendedFilms;