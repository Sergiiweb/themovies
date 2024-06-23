import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {ITrailers} from "../../interfaces";
import {movieService} from "../../services";
import {movieActions} from "./movieSlice";

interface IState {
    trailers: ITrailers;
}

const initialState: IState = {
    trailers: {id: null, results: []}
}

const getAll = createAsyncThunk<ITrailers, { id: number }>(
    'trailerSlice/getAll',
    async ({id}, {dispatch, rejectWithValue}) => {
        try {
            const {data} = await movieService.trailersById(id);
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data);
        } finally {
            dispatch(movieActions.setIsLoading(false));
        }
    }
)

const trailerSlice = createSlice({
    name: 'trailerSlice',
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(getAll.fulfilled, (state, action) => {
            state.trailers = action.payload;
        })
});

const {reducer: trailerReducer, actions} = trailerSlice;

const trailerActions = {
    ...actions,
    getAll
}

export {
    trailerActions,
    trailerReducer
}
