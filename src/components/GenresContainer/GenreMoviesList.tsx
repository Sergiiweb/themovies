import {useParams, useSearchParams} from "react-router-dom";
import {useEffect} from "react";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions} from "../../redux";
import {Movie} from "../MoviesContainer";
import css from "./GenreMoviesList.module.css";

const GenreMoviesList = () => {
    const {id} = useParams();
    const {movies} = useAppSelector(state => state.movies);
    const {currentGenre} = useAppSelector(state => state.genres);
    const dispatch = useAppDispatch();
    const [query,] = useSearchParams({page: '1'});

    useEffect(() => {
        dispatch(movieActions.getByGenre({page: +query.get('page'), with_genres: +id}));
    }, [query.get('page'), id]);

    return (
        <>
            {currentGenre &&
                <div className={css.title}>{currentGenre.name}</div>
            }
            <div className={css.GenreMovieList}>
                {movies.map(movie => <Movie movie={movie} key={movie.id}/>)}
            </div>
        </>
    );
};

export {GenreMoviesList};
