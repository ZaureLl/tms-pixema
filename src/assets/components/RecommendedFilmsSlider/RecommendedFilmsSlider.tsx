import React, { FC } from 'react';
import { useState } from 'react';
import styles from "./RecommendedFilmsSlider.module.scss";
import { RecommendedFilm } from '../../../utils/@globalTypes';
import RecommendedFilms from '../RecommendedFilms/RecommendedFilms';
import { ArrowLeft, ArrowRight } from '../../icons';
import { Theme, useThemeContext } from '../../../context/Theme/Theme';
import classNames from 'classnames';


const RecommendedFilmsSlider: FC<{ recommendedFilmList: RecommendedFilm[] }> = ({ recommendedFilmList }) => {
    const [startIndex, setStartIndex] = useState(4);
    const endIndex = startIndex + 4;
    const filmsToShow = recommendedFilmList.slice(startIndex, endIndex);

    const handleLeftArrowClick = () => {
        if (startIndex > 0) {
            setStartIndex(startIndex - 4);
            console.log("left", startIndex, endIndex, recommendedFilmList.length);
        }
    };

    const handleRightArrowClick = () => {
        if (endIndex < recommendedFilmList.length) {
            setStartIndex(startIndex + 4);
            console.log("right", startIndex, endIndex, recommendedFilmList.length);
        }
    };

    const isLeftArrowDisabled = startIndex === 0;
    const isRightArrowDisabled = endIndex >= recommendedFilmList.length;

    const { theme } = useThemeContext();
    const isLight = theme === Theme.Light;

    return (
        <>
            <div className={classNames(styles.sliderContainer, { [styles.sliderContainerLight]: isLight })}>
                <div className={styles.header_wrapper}>
                    <h2 className={classNames(styles.headerRec)}>Recommendations</h2>
                    <div className={classNames(styles.arrows, { [styles.arrowsLight]: isLight })}>
                        <div className={`${styles.arrowContainer} ${isRightArrowDisabled ? styles.disabledArrow : ""
                            }`} onClick={handleRightArrowClick}>
                            <ArrowRight />
                        </div>
                        <div className={`${styles.arrowContainer} ${isLeftArrowDisabled ? styles.disabledArrow : ""
                            }`} onClick={handleLeftArrowClick}>
                            <ArrowLeft />
                        </div>
                    </div>
                </div>
                <div className={styles.slider}>
                    {filmsToShow.map((item) => (
                        <RecommendedFilms key={item?.id} film={item} />
                    ))}
                </div>

            </div >
        </>
    );
};


export default RecommendedFilmsSlider;