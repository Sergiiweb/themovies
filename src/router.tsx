import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts";
import {GenrePage, GenresPage, MovieDetailsPage, MoviesPage, NotFoundPage, SearchPage} from "./pages";

const router = createBrowserRouter([
    {
        path: '',
        element: <MainLayout/>,
        children: [
            {
                index: true,
                element: <Navigate to={'movies'}/>
            },
            {
                path: 'movies',
                element: <MoviesPage/>,
            },
            {
                path: 'movies/:id',
                element: <MovieDetailsPage/>
            },
            {
                path: 'genres',
                element: <GenresPage/>,
            },
            {
                path: 'genres/:id',
                element: <GenrePage/>
            },
            {
                path: 'search',
                element: <SearchPage/>
            }
        ]
    },
    {
        path: '*',
        element: <NotFoundPage/>
    }
]);

export {
    router
}

