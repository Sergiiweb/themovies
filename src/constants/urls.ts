const baseURL = process.env.REACT_APP_API;
const apiAccessToken = process.env.REACT_APP_API_TOKEN;

const movies = '/discover/movie';
const posterBaseUrl = 'https://image.tmdb.org/t/p/w500';
const movie = '/movie';
const genres = '/genre/movie/list';
const search = '/search/movie';
const trailers = "videos";

const urls = {
    movies: {
        base: movies,
        poster: posterBaseUrl,
        search
    },
    genres,
    movie: {
        byId: (id: number): string => `${movie}/${id}`
    },
    cast: {
        byId: (id: number): string => `${movie}/${id}/credits`
    },
    trailers: {
        byId: (id: number): string => `${movie}/${id}/${trailers}`
    }
}

export {
    baseURL,
    apiAccessToken,
    urls
}
