import {useSearchParams} from "react-router-dom";
import {useEffect} from "react";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions} from "../../redux";
import {Movie} from "../MoviesContainer";
import css from "./Search.module.css";

const Search = () => {
    const {movies} = useAppSelector(state => state.movies);
    const dispatch = useAppDispatch();
    const [query, setQuery] = useSearchParams({query: '', page: '1'});

    useEffect(() => {
        if (query.get('query')) {
            dispatch(movieActions.getBySearchKeyword({page: +query.get('page'), query: query.get('query')}))
        } else {
            dispatch(movieActions.getAll({page: +query.get('page')}));
        }
    }, [query.get('page'), query.get('query')]);

    return (
        <div className={css.Search}>
            {movies.map(movie => <Movie movie={movie} key={movie.id}/>)}
        </div>
    );
};

export {Search};
