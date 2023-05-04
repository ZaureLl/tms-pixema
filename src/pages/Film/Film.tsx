import React, { useEffect } from "react";
import styles from "./Film.module.scss";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FilmSelectors, getSingleFilm } from "../../redux/reducers/filmSlice";
import SingleFilm from "../../assets/components/SingleFilm/SingleFilm";
import Loader from "../../assets/components/Loader/Loader";


const Film = () => {
    const params = useParams();
    const dispatch = useDispatch();
    console.log(params);

    const film = useSelector(FilmSelectors.getSingleFilm);
    const isLoading = useSelector(FilmSelectors.getSingleFilmLoading);

    useEffect(() => {
        const id = Number(params.id);
        dispatch(getSingleFilm({ id }));
    }, []);


    return (
        <>
            {isLoading ? (
                <Loader />
            ) : (
                <SingleFilm film={film} />
            )}
        </>
    )
};

export default Film;