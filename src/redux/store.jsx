import {configureStore} from "@reduxjs/toolkit";
import bookReducer from "./bookSlicer";
import favsReducer from "./favSlicer";


export const store = configureStore({
    reducer: {
     books: bookReducer,
     favs: favsReducer,
    }
})