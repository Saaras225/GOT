import {createSlice} from '@reduxjs/toolkit';
const favSlice = createSlice({
    name: 'fav',
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state, action) => {
            if(!state.items.some((item) => item.name === action.payload.name))
            state.items= [action.payload, ...state.items]

        },
        rmvItem: (state, action) => {    
         state.items= state.items.filter((item) => item.name !== action.payload.name);
        },
        
    }
});

export const {addItem, rmvItem} = favSlice.actions;
export default favSlice.reducer;