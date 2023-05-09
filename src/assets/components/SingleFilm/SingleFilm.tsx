import React, { FC } from "react";
import styles from './SingleFilm.module.scss';
import ColoredRating from "../ColoredRating/ColoredRating";
import { Imb } from "../../icons/Imb";
import classNames from "classnames";
import ButtonsGroup from "../ButtonsGroup/ButtonsGroup";
import { SingleFilm as FilmType } from "../../../utils/@globalTypes";
import { Circle } from "../../icons";
import EmptyState from "../EmptyState";
import { useDispatch, useSelector } from "react-redux";
import { FilmSelectors, setSavedFilm } from "../../../redux/reducers/filmSlice";
import { Theme, useThemeContext } from "../../../context/Theme/Theme";


type SingleFilmProps = {
    film: FilmType;
};

const SingleFilm: FC<SingleFilmProps> = ({ film }) => {

    const dispatch = useDispatch();
    const savedFilms = useSelector(FilmSelectors.getSavedFilms);

    const { theme } = useThemeContext();
    const isLight = theme === Theme.Light;

    if (film) {
        const { poster, genres, name, rating, runtime, description, budget, credits, release_date, year, id } = film;
        const genreNames = genres.map((genre) => genre.display_name);

        const actorList = credits.filter(credit => credit.pivot.department === "cast");
        const actorsNames = actorList.map((actName) => actName.name).join(", ");

        const directorList = credits.filter(credit => credit.pivot.department === "directing");
        const directorsNames = directorList.map((name) => name.name).join(", ");

        const writersList = credits.filter(credit => credit.pivot.department === "writing");
        const writersNames = writersList.map((name) => name.name).join(", ");

        const releaseDate = new Date(release_date);
        const formattedReleaseMonth = releaseDate.toLocaleDateString("en-US", { month: "short" });
        const formattedReleaseDay = releaseDate.toLocaleDateString("en-US", { day: "2-digit" });

        const savedFilmIndex = savedFilms.findIndex((savedFilm) => savedFilm?.id === film.id);

        return (

            <div className={styles.contentWrapper}>
                <div className={styles.asideImgWrapper}>
                    <img src={poster} alt="" className={styles.img} />
                    <ButtonsGroup isSaved={savedFilmIndex > -1} onClickBookmarkIcon={() => { dispatch(setSavedFilm(film)) }} />
                </div>
                <div className={classNames(styles.mainConten, { [styles.mainContenLight]: isLight })}>
                    <div className={styles.genresList}>
                        <ul>
                            {genreNames.map((genre, index) => (
                                <li key={index}>
                                    {genre} {index !== genreNames.length - 1 && <Circle />}
                                </li>
                            ))}
                        </ul></div>
                    <div className={styles.name}>{name}</div>
                    <div className={styles.infoBlock}>
                        <ColoredRating rating={rating} />
                        <div className={classNames(styles.imbRating, styles.badge, { [styles.badgeLight]: isLight })} ><Imb />{rating}</div>
                        <div className={classNames(styles.runtime, styles.badge, { [styles.badgeLight]: isLight })}>{runtime} min</div>
                    </div>
                    <div className={styles.description}>{description}</div>
                    <div className={styles.table}>

                        {year ?
                            <div className={styles.tableLine}><span className={styles.tablePropertyName}>Year</span><span className={styles.tableProperty}>{year}</span></div>
                            : null}

                        {release_date ?
                            <div className={styles.tableLine}><span className={styles.tablePropertyName}>Released</span><span className={styles.tableProperty}>{formattedReleaseDay} {formattedReleaseMonth} {year}</span></div>
                            : null}

                        {budget ?
                            <div className={styles.tableLine}><span className={styles.tablePropertyName}>BoxOffice</span><span className={styles.tableProperty}>$ {budget}</span></div>
                            : null}

                        {actorsNames ?
                            <div className={styles.tableLine}><span className={styles.tablePropertyName}>Actors</span><span className={styles.tableProperty}>{actorsNames}</span></div>
                            : null}

                        {directorsNames ?
                            <div className={styles.tableLine}><span className={styles.tablePropertyName}>Director</span> <span className={styles.tableProperty}>{directorsNames}</span></div>
                            : null}

                        {writersNames ?
                            <div className={styles.tableLine}><span className={styles.tablePropertyName}>Writers</span><span className={styles.tableProperty}>{writersNames}</span></div>
                            : null}
                    </div>
                </div>
            </div>
        )
    }

    else {
        return (
            <EmptyState description="No results found" />
        )
    }

};

export default SingleFilm;