import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Home.module.scss";

import FilmCard from "../../assets/components/FilmCard/FilmCard";
import Loader from "../../assets/components/Loader/Loader";
import ArrowLoader from "../../assets/components/ArrowLoader/ArrowLoader";

import { FilmSelectors, getAllFilms } from "../../redux/reducers/filmSlice";
import { PER_PAGE } from "../../utils/constants";

const Home = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const dispatch = useDispatch();
    const filmsCount: number = useSelector(FilmSelectors.getAllFilmsCount);
    const isLoading = useSelector(FilmSelectors.getAllFilmsLoading);

    const pagesCount = Math.ceil(filmsCount / PER_PAGE);
    const filmList = useSelector(FilmSelectors.getAllFilms);

    useEffect(() => {
        const perPage = PER_PAGE;
        const page = currentPage;
        dispatch(getAllFilms({ perPage, page, score: null }));
    }, [currentPage]);

    const showMore = () => setCurrentPage((prevValue) => prevValue + 1);

    return (
        <>
            {(isLoading && !filmList.length) ? (
                <Loader />
            ) : (
                <>
                    <div className={styles.container}>
                        {filmList.map((item) => {
                            return <FilmCard key={item.id} film={item} />;
                        })}
                    </div>
                    <div className={styles.containerBtn}><div onClick={showMore} className={styles.showMoreBtn}>Show more{isLoading && <ArrowLoader />}</div> </div>
                </>
            )}
        </>
    )
};

export default Home;