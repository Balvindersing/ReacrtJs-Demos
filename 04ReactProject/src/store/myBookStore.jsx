import { createContext, useState, useReducer } from "react";
import { DUMMYDATA } from "../MockDATA";
import generateUniqueId from "generate-unique-id";
import { useBookListReducer } from "./myBookStoreWithReducer";
import useBookListHook from "../validationCustomHooks/itemListHook";

export const BookStoreContext = createContext({
    bookList: [],
    addBook: () => { },
    removeBook: () => { },
    resetHandler: () => { }
});

export const BookContextProvider = ({ children }) => {
    const [bookList, setBookList] = useState(DUMMYDATA);
    const saveBookHandler = (payload) => {
        setBookList(p => [...p, payload]);
    };
    const deleteBookHandler = (id) => {
        console.log("from Child to parent: ", id)
        setBookList(bookList.filter(item => item.id !== id))
    }
    const restHandler = () => {
        let dummy = DUMMYDATA.map(x => {
            x.id = generateUniqueId({ length: 5, useNumbers: true, useLetters: false })
            return x;
        });
        setBookList(dummy);
    }
    return <BookStoreContext.Provider value={{ bookList, saveBookHandler, deleteBookHandler, restHandler }}>
        {children}
    </BookStoreContext.Provider>
};

export const BookStoreContextWithRedcuer = createContext({
    bookList: [],
    saveBookHandler: () => { },
    deleteBookHandler: () => { },
    restHandler: () => { }
});
export const BookStoreContextWithRedcuerProvider = ({ children }) => {
    const { addBook, bookList, removeBook, reset } = useBookListHook()
    const saveBookHandler = (payload) => {
        //setBookList(p => [...p, payload]);
        addBook(payload);
    };
    const deleteBookHandler = (id) => {
        console.log("from Child to parent: Delete ", id)
        removeBook(id)
    }
    const restHandler = () => {
        reset();
    }
    return (
        <BookStoreContextWithRedcuer.Provider value={{ saveBookHandler, deleteBookHandler, restHandler, bookList }}>
            {children}
        </BookStoreContextWithRedcuer.Provider>
    )
}