import {useEffect} from "react";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {genreActions} from "../../redux";
import {GenreBadge} from "./GenreBadge";
import css from "./Genres.module.css";

const Genres = () => {
    const {genres} = useAppSelector(state => state.genres);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(genreActions.getAll());
    }, []);

    return (
        <>
            {genres &&
                <div className={css.Genres}>
                    {genres.map(genre => <GenreBadge genre={genre} key={genre.id}/>)}
                </div>
            }
        </>
    );
};

export {Genres};
