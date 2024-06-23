import {Link, useNavigate, useParams} from "react-router-dom";
import {useEffect} from "react";
import {Badge, Box, Chip} from "@mui/material";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {genreActions, movieActions} from "../../redux";
import {PosterPreview} from "./PosterPreview";
import {IGenre} from "../../interfaces";
import {CastList} from "../CastContainer";
import css from "./MoviesListCard.module.css";
import {StarsRatingWithMui} from "../StarsRating/StarsRatingWhithMui";
import ReactPlayer from "react-player/youtube";
import {Trailers} from "../TrailersContainer";


const shapeStyles = {bgcolor: 'primary.main', width: 40, height: 40};
const shapeCircleStyles = {borderRadius: '50%'};
const circle = (
    <Box component="span" sx={{...shapeStyles, ...shapeCircleStyles}}/>
);
const MoviesListCard = () => {
    const {id} = useParams();
    const {movie} = useAppSelector(state => state.movies);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();


    useEffect(() => {
        dispatch(movieActions.getById({id: +id}))
    }, [id]);

    const setGenre = (genre: IGenre) => {
        dispatch(genreActions.setCurrentGenre(genre));
        navigate(`/genres/${genre.id}`);
    }

    return (
        <>
            {movie &&
                <div>
                    <div className={css.MoviesListCard}>
                        <div className={css.poster}>
                            <PosterPreview poster_path={movie.poster_path} title={movie.title}/>
                        </div>
                        <div className={css.info}>
                            <h1 className={css.title}>{movie.title}</h1>
                            <p className={css.overview}>{movie.overview}</p>
                            <div className={css.rating}>
                                <h4>Rating:</h4>
                                <div className={css.starsRating}><StarsRatingWithMui vote_average={movie.vote_average}/>
                                </div>
                            </div>
                            <div className={css.genres}>
                                <h4>Genres:</h4>
                                <div className={css.genresList}>
                                    {movie.genres.map(genre => <div className={css.chipWrap} key={genre.id}><Chip
                                        className={css.genreChip}
                                        color="primary"
                                        label={genre.name}
                                        onClick={() => setGenre(genre)}/>
                                    </div>)
                                    }
                                </div>
                            </div>
                            <div className={css.infoDiv}>Release date: {movie.release_date}</div>
                            <div className={css.infoDiv}>Budget: {movie.budget}</div>
                            <div className={css.infoDiv}>Duration: {movie.runtime} min</div>
                            {movie.homepage &&
                                <div className={css.homepageLink}><Link to={movie.homepage}>Homepage</Link></div>
                            }
                        </div>
                    </div>
                    <div className={css.castList}>
                        <CastList/>
                    </div>
                    <div className={css.genresList}>
                        <Trailers/>
                    </div>
                    <div className={css.genresList}>
                        {movie.genres.map(genre => <div className={css.chipWrap} key={genre.id}><Badge
                            color="success" overlap="circular" badgeContent={genre.name} className={css.Badge}
                            onClick={() => setGenre(genre)}>
                            {circle}
                        </Badge>
                        </div>)
                        }
                    </div>
                </div>
            }
        </>
    )
        ;
};

export {MoviesListCard};
