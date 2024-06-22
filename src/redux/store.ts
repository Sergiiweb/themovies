import {configureStore} from "@reduxjs/toolkit";

import {castReducer, genreReducer, movieReducer, themeReducer} from "./slices";

const store = configureStore({
    reducer: {
        movies: movieReducer,
        genres: genreReducer,
        theme: themeReducer,
        cast: castReducer
    }
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export type {
    RootState,
    AppDispatch
}

export {
    store
}
