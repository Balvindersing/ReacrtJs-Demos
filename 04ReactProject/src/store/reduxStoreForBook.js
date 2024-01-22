import { createStore } from 'redux'
import { DUMMYDATA, DUMMYDATA1 } from '../MockDATA';
import generateUniqueId from 'generate-unique-id';
import { configureStore, createSlice } from '@reduxjs/toolkit'
// export const BookListSlice = createSlice({
//     name: "bookManager",
//     initialState: { bookList: DUMMYDATA },
//     reducers: {
//         addBook: () => {
//             console.log("working with redux add -action: from slice-reducer")
//             //state.bookList.push(action.payload);
//         },
//         removeBook: (state, action) => {
//             console.log("working with redux add-remove: from slice-reducer")

//             state.filter(item => item.id != action.payload)
//         }
//     }
// });
// export const { addBook, removeBook } = BookListSlice.actions;
// export default BookListSlice.reducer;

// export const BookFinalStore = configureStore({
//     reducer: {
//         bookList: BookListSlice
//     }
// });

//Pure Redux

const reduxStoreReducer = (state = { reduxBookList: DUMMYDATA, isActive: false }, action) => {
    debugger
    if (action.type === "ADD") {
        let newList = [...state.reduxBookList, action.payload];
        return { ...state, reduxBookList: newList };
    }
    if (action.type === "DELETE") {
        const newList = state.reduxBookList.filter(item => item.id !== action.payload);
        return { ...state, reduxBookList: newList };
    }
    if (action.type === "RESET") {
        let newList = DUMMYDATA.map(x => {
            x.id = generateUniqueId({ length: 5, useLetters: false })
            return x;
        })
        return {
            ...state, reduxBookList: newList
        };
    }
    return state;
};

// const reduxBookStore = createStore(reduxStoreReducer);
// export default reduxBookStore;

const getNewID = () => {
    return generateUniqueId({ length: 5, useLetters: false });
}
//With Redux-Toolkit
const bookListSlice = createSlice({
    name: "bookManager",
    initialState: { reduxBookList: DUMMYDATA1(), isActive: false },
    reducers: {
        AddBook: (state, action) => {
            debugger
            let newList = [...state.reduxBookList, action.payload];
            return { ...state, reduxBookList: newList };
        },
        RemoveBook: (state, action) => {
            const newList = state.reduxBookList.filter(item => item.id !== action.payload);
            return { ...state, reduxBookList: newList };
        },
        Reset: (state, action) => {
            debugger
            let newList = DUMMYDATA1();
            return {
                ...state, reduxBookList: newList
            };
        }
    }
});

const reduxBookStore = configureStore({
    reducer: {
        bookList: bookListSlice.reducer
    }
});
export const { AddBook, RemoveBook, Reset } = bookListSlice.actions;
export default reduxBookStore;












