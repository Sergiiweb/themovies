import {FC} from "react";
import {useNavigate} from "react-router-dom";

import {IMovie} from "../../interfaces";
import {PosterPreview} from "./PosterPreview";
import {StarsRating} from "../StarsRating";
import css from "./Movie.module.css";

interface IProps {
    movie: IMovie;
}

const Movie: FC<IProps> = ({movie}) => {
    const {id, title, poster_path, vote_average} = movie;

    const navigate = useNavigate();

    return (
        <div className={css.Movie} onClick={() => navigate(`/movies/${id.toString()}`)}>
            <PosterPreview poster_path={poster_path} title={title}/>
            <div className={css.title} title={title}>{title}</div>
            <StarsRating vote_average={vote_average}/>
        </div>
    );
};

export {Movie};
