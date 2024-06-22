import {useEffect} from "react";
import {useSearchParams} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {Movie} from "./Movie";
import {movieActions} from "../../redux";
import css from "./Movies.module.css";

const MoviesByGenre = () => {
    const {movies} = useAppSelector(state => state.movies);
    const dispatch = useAppDispatch();
    const [query,] = useSearchParams({page: '1', with_genres: '28'});

    useEffect(() => {
        dispatch(movieActions.getByGenre({page: +query.get('page'), with_genres: +query.get('with_genres')}));
    }, [query.get('page'), query.get('with_genres')]);

    return (
        <div className={css.Movies}>
            {movies.map(movie => <Movie movie={movie} key={movie.id}/>)}
        </div>
    );
};

export {MoviesByGenre};
