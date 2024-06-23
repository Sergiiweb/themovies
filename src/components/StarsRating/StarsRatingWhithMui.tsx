import {FC} from "react";
import {Box, Rating } from "@mui/material";

import css from './StarsRating.module.css';

interface IProps {
    vote_average: number;
}

const StarsRatingWithMui: FC<IProps> = ({vote_average}) => {

    return (
        <div>
            <div>
                <Box
                    sx={{
                        '& > legend': {mt: 2},
                    }}
                >
                    <Rating name="customized-10" defaultValue={vote_average} max={10}/>
                </Box>
            </div>
        </div>
    );
};

export {StarsRatingWithMui};
