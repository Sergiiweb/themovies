import {FC} from "react";

import css from './StarsRating.module.css';

interface IProps {
    vote_average: number;
}

const StarsRating: FC<IProps> = ({vote_average}) => {
    const ratingWidth = vote_average / 0.1;

    return (
        <div>
            <div className={css.rating}>
                <div className={css.ratingBody} title={`Rating: ${vote_average}`}>
                    <div className={css.ratingActive} style={{'width': `${ratingWidth}%`}}></div>
                    <div className={css.ratingItems}>
                        {/*<input type={"radio"} className={css.ratingItem} value={'1'} name={'rating'}/>*/}
                        {/*<input type={"radio"} className={css.ratingItem} value={'2'} name={'rating'}/>*/}
                        {/*<input type={"radio"} className={css.ratingItem} value={'3'} name={'rating'}/>*/}
                        {/*<input type={"radio"} className={css.ratingItem} value={'4'} name={'rating'}/>*/}
                        {/*<input type={"radio"} className={css.ratingItem} value={'5'} name={'rating'}/>*/}
                    </div>
                </div>
                <div className={css.ratingValue}>{vote_average}</div>
            </div>
        </div>
    );
};

export {StarsRating};
