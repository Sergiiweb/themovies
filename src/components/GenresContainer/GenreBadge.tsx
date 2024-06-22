import {FC, MouseEventHandler} from "react";
import {useSearchParams} from "react-router-dom";

import {IGenre} from "../../interfaces";
import css from "./GenreBadge.module.css";

interface IProps {
    genre: IGenre;
}

const GenreBadge: FC<IProps> = ({genre}) => {
    const [query, setQuery] = useSearchParams({page: '1', with_genres: '28'});

    const handleClick: MouseEventHandler<HTMLDivElement> = () => {
        setQuery(prev => {
            prev.set('with_genres', genre.id.toString());
            return prev;
        })
    }

    return (
        <div className={+query.get('with_genres') !== genre.id ? css.Badge : css.BadgeActive} onClick={handleClick}>
            {genre.name}
        </div>
    );
};

export {GenreBadge};
