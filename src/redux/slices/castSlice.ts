import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IActor, IMovieCast} from "../../interfaces";
import {movieService} from "../../services";
import {movieActions} from "./movieSlice";

interface IState {
    id: number;
    cast: IActor[];
}

const initialState: IState = {
    id: null,
    cast: []
}

const getAll = createAsyncThunk<IMovieCast, { id: number }>(
    'castSlice/getAll',
    async ({id}, {dispatch, rejectWithValue}) => {
        try {
            const {data} = await movieService.castById(id);
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data);
        } finally {
            dispatch(movieActions.setIsLoading(false));
        }
    }
)

const castSlice = createSlice({
    name: 'castSlice',
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(getAll.fulfilled, (state, action) => {
            state.id = action.payload.id;
            state.cast = action.payload.cast;
        })
});

const {reducer: castReducer, actions} = castSlice;

const castActions = {
    ...actions,
    getAll
}

export {
    castActions,
    castReducer
}
