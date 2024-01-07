import { createSlice } from '@reduxjs/toolkit';
import uniqid from 'uniqid';

const initialState = [{ name: 'Test - ' + uniqid(), Id: uniqid(), age: 20 }];
const itemsSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
        addItems: (state, action) => {
            debugger
            console.log("called addItems slice ")

            state.push(action.payload);
        },
        removeItem: (state, action) => {
            state.filter((item) => {
                return item !== action.payload
            })
        }
    }
});

export const { addItems, removeItem } = itemsSlice.actions;
export default itemsSlice.reducer;