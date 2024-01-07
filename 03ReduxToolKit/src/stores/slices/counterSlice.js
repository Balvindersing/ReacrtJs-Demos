import { createSlice } from '@reduxjs/toolkit';
const initialState = 0;

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        addCounter: (state, action) => {
            console.log("called addCounter slice")
            return state + 1
        },
        removeCounter: (state, action) => {
            return state - 1
        },
    }
});
export const { addCounter, removeCounter } = counterSlice.actions;
export default counterSlice.reducer;