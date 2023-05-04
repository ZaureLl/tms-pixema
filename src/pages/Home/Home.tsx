import React, { useEffect, useState } from "react";
import FilmCard from "../../assets/components/FilmCard/FilmCard";
import { useDispatch, useSelector } from "react-redux";
import { FilmSelectors, getAllFilms } from "../../redux/reducers/filmSlice";
import { PER_PAGE } from "../../utils/constants";
import ReactPaginate from "react-paginate";
import Loader from "../../assets/components/Loader/Loader";
import styles from "./Home.module.scss";

const FilmProps = {
    id: 1,
    rating: "7.6",
    name: "The Suicide Squad",
    poster: "https://image.tmdb.org/t/p/original/iCi4c4FvVdbaU1t8poH1gvzT6xM.jpg",
}

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

        dispatch(getAllFilms({ perPage, page }));
    }, [currentPage]);

    return (
        <>
            <div> Home</div>
            <div className={styles.container}>
                {filmList.map((item, index) => {
                    return <FilmCard key={item.id} film={item} />;
                })}
            </div>
        </>
    )
};

export default Home;