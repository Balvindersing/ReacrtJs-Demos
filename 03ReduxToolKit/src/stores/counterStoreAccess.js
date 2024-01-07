import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counterSlice";
import itemsSlice from "./slices/itemsSlice";
const mainStore = configureStore({
    reducer: {
        counter: counterSlice,
        items: itemsSlice
    }
});

export default mainStore;