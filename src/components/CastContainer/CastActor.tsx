import {FC} from "react";

import {IActor} from "../../interfaces";
import {PosterPreview} from "../MoviesContainer";
import css from "./CastActor.module.css";

interface IProps {
    actor: IActor;
}

const CastActor: FC<IProps> = ({actor}) => {
    return (
        <div className={css.CastActor} title={`Character: ${actor.character}`}>
            <div className={css.poster}>
                <PosterPreview poster_path={actor.profile_path} title={actor.character}/>
            </div>
            <div className={css.name}>{actor.name}</div>
        </div>
    );
};

export {CastActor};
