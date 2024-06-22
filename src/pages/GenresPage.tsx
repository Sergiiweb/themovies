import {Genres, MoviesByGenre, Pagination} from "../components";

const GenresPage = () => {
    return (
        <div>
            <Genres/>
            <MoviesByGenre/>
            <Pagination/>
        </div>
    );
};

export {GenresPage};
