import React, { FC, ReactNode } from "react";
import styles from "./ColoredRating.module.scss";
import classNames from "classnames";

type RatingProps = {
    rating?: string;
};

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

const ColoredRating: FC<RatingProps> = ({ rating }) => {
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
        <div className={classNames(ratingClass, styles.ratingDefault)}>{rating}</div>
    )
};

export default ColoredRating;