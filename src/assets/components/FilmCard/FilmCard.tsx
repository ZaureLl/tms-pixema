import React, { FC } from "react";
import styles from "./FilmCard.module.scss";
import { FilmProps } from "./types";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";

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

const FilmCard: FC<FilmProps> = ({ film }) => {
    const { id, rating, name, poster } = film;
    const navigate = useNavigate();

    let ratingClass = ratingStyles[ratingType.Medium];
    const ratingStyle = () => {
        if (Number(rating) >= 7.5) {
            ratingClass = ratingStyles[ratingType.Max]
        } else if (Number(rating) <= 5) {
            ratingClass = ratingStyles[ratingType.Low]
        }
    };

    ratingStyle();

    const onFilmNameClick = () => {
        navigate(`/${id}`);
    };

    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <div className={classNames(ratingClass, styles.ratingDefault)}>{rating}</div>
                <img src={poster} alt="" className={styles.img} />
            </div>
            <div className={styles.filmInfo}>
                <div className={styles.filmName} onClick={onFilmNameClick}>{name}</div>
                <div className={styles.filmGenres}>Adventure</div>
            </div>
        </div>
    )
};

export default FilmCard;