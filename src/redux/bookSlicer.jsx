import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export const fetchBooks = createAsyncThunk("fetchBooks", async () => {
    const data = await fetch('https://www.anapioficeandfire.com/api/books')
    return data.json()
})

const bookSlice = createSlice({
    name: "books",
    initialState: {
        isLoading: false,
        data: [],
        error: false
    },
    extraReducers: (builder) => {
        builder.addCase(fetchBooks.pending, (state, action) => {
            state.isLoading = true
        });
        builder.addCase(fetchBooks.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload
        });
        builder.addCase(fetchBooks.rejected, (state, action) => {
            state.error= true;
        })

    } 
})

export default bookSlice.reducer;