import {FC} from "react";

import {urls} from "../../constants";
import noImg from "../../assets/images/noImg.png";

interface IProps {
    poster_path: string;
    title: string;
}

const PosterPreview: FC<IProps> = ({poster_path, title}) => {

    return (
        <div>
            {poster_path ?
                <img src={`${urls.movies.poster}/${poster_path}`} alt={title}/>
                :
                <img src={noImg} alt={title}/>


            }
        </div>
    );
};

export {PosterPreview};
