import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IGenre, IGenreList} from "../../interfaces";
import {genresService} from "../../services";

interface IState {
    genres: IGenre[];
    currentGenre: IGenre;
}

const initialState: IState = {
    genres: [],
    currentGenre: null
}

const getAll = createAsyncThunk<IGenreList, void>(
    'genreSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await genresService.getAll();
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data);
        }
    }
)

const genreSlice = createSlice({
    name: 'genreSlice',
    initialState,
    reducers: {
        setCurrentGenre: (state, action) => {
            state.currentGenre = action.payload;
        }
    },
    extraReducers: builder => builder
        .addCase(getAll.fulfilled, (state, action) => {
            state.genres = action.payload.genres;
        })
})

const {reducer: genreReducer, actions} = genreSlice;

const genreActions = {
    ...actions,
    getAll
}

export {
    genreActions,
    genreReducer
}
