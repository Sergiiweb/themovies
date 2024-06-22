import {useEffect} from "react";
import {useSearchParams} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {Movie} from "./Movie";
import {movieActions} from "../../redux";
import css from "./Movies.module.css";

const Movies = () => {
    const {movies} = useAppSelector(state => state.movies);
    const dispatch = useAppDispatch();
    const [query,] = useSearchParams({page: '1'});

    useEffect(() => {
        dispatch(movieActions.getAll({page: +query.get('page')}));
    }, [query.get('page')]);

    return (
        <div className={css.Movies}>
            {movies.map(movie => <Movie movie={movie} key={movie.id}/>)}
        </div>
    );
};

export {Movies};
