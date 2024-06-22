import {createAsyncThunk, createSlice, isPending, isRejected} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IMovie, IMovieDetails, IMoviesList} from "../../interfaces";
import {movieService} from "../../services";

interface IState {
    movies: IMovie[];
    movie: IMovieDetails;
    page: number;
    total_pages: number;
    error: any;
    isLoading: boolean;
}

const initialState: IState = {
    movies: [],
    movie: null,
    page: null,
    total_pages: null,
    error: null,
    isLoading: null
}

const getAll = createAsyncThunk<IMoviesList, { page: number }>(
    'movieSlice/getAll',
    async ({page}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getAll(page);
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data);
        }
    }
)

const getById = createAsyncThunk<IMovieDetails, { id: number }>(
    'movieSlice/getById',
    async ({id}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getById(id);
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data);
        }
    }
)

const getByGenre = createAsyncThunk<IMoviesList, { page: number, with_genres: number }>(
    'movieSlice/getByGenre',
    async ({page, with_genres}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getByGenre(page, with_genres);
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data);
        }
    }
)
const getBySearchKeyword = createAsyncThunk<IMoviesList, { page: number, query: string }>(
    'movieSlice/getBySearchKeyword',
    async ({page, query}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.searchByKeyword(page, query);
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data);
        }
    }
)

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {
        setIsLoading: (state, action) => {
            state.isLoading = action.payload;
        }
    },
    extraReducers: builder => builder
        .addCase(getAll.fulfilled, (state, action) => {
            state.movies = action.payload.results;
            state.page = action.payload.page;
            state.total_pages = action.payload.total_pages;
            state.movie = null;
            state.error = null;
            state.isLoading = false;
        })
        .addCase(getById.fulfilled, (state, action) => {
            state.movie = action.payload;
            state.isLoading = false;
        })
        .addCase(getByGenre.fulfilled, (state, action) => {
            state.movies = action.payload.results;
            state.page = action.payload.page;
            state.total_pages = action.payload.total_pages;
            state.movie = null;
            state.error = null;
            state.isLoading = false;
        })
        .addCase(getBySearchKeyword.fulfilled, (state, action) => {
            state.movies = action.payload.results;
            state.page = action.payload.page;
            state.total_pages = action.payload.total_pages;
            state.movie = null;
            state.error = null;
            state.isLoading = false;
        })
        .addMatcher(isRejected, (state, action) => {
            state.error = action.payload
            state.isLoading = false;
        })
        .addMatcher(isPending, (state) => {
            state.isLoading = true;
        })
});

const {reducer: movieReducer, actions} = movieSlice;

const movieActions = {
    ...actions,
    getAll,
    getById,
    getByGenre,
    getBySearchKeyword
}

export {
    movieActions,
    movieReducer
}
