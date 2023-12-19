import {configureStore} from "@reduxjs/toolkit";
import bookReducer from "./bookSlicer";

export const store = configureStore({
    reducer: {
     books: bookReducer
    }
})