import {createSlice} from "@reduxjs/toolkit";

interface IState {
    currentTheme: string;
}

const initialState: IState = {
    currentTheme: 'dark'
}

const themeSlice = createSlice({
    name: 'themeSlice',
    initialState,
    reducers: {
        setTheme: (state, action) => {
            state.currentTheme = action.payload;
        }
    }
})

const {reducer: themeReducer, actions: themeActions} = themeSlice;

export {
    themeActions,
    themeReducer
}
