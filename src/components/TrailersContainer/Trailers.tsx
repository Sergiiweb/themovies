import {FC, useEffect} from "react";
import {useParams} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {trailerActions} from "../../redux";
import {Trailer} from "./Trailer";
import css from "./Trailers.module.css";

const Trailers: FC = () => {
    const {trailers: {results}} = useAppSelector(state => state.trailers);
    const dispatch = useAppDispatch();
    const {id} = useParams();

    useEffect(() => {
        dispatch(trailerActions.getAll({id: +id}));
    }, [id]);

    return (
        <>
            <h3 className={css.Title}>Trailers:</h3>
            <div className={css.Trailers}>
                {results.length &&
                    results.map(trailer => <Trailer key={trailer.id} trailer={trailer}/>)
                }
            </div>
        </>
    );
};

export {Trailers};
