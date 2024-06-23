import {FC} from "react";
import ReactPlayer from "react-player/youtube";

import {ITrailer} from "../../interfaces";
import css from "./Trailer.module.css";

interface IProps {
    trailer: ITrailer
}

const Trailer:FC<IProps> = ({trailer}) => {
    return (
        <div className={css.Trailer}>
            <div>{trailer.name}</div>
            <div>

                <ReactPlayer
                    light
                    url={`https://youtu.be/${trailer.key}`}
                    width="320px"
                    height="180px"
                    playing
                />
            </div>
        </div>
    );
};

export {Trailer};
