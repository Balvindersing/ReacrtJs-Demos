import { useReducer } from "react";
import { useBookListReducer } from "../store/myBookStoreWithReducer";
import { DUMMYDATA } from "../MockDATA";


const useBookListHook = () => {
    const [bookList, dispatch] = useReducer(useBookListReducer, DUMMYDATA)
    const addBook = (val) => {
        dispatch({ type: "add", payload: val });
        console.log("Book in hook: ", bookList)
    }
    const getListOfData = () => {
        return bookList;
    };
    const removeBook = (id) => {
        debugger
        dispatch({ type: "remove", payload: id })
    };
    const reset = () => {
        dispatch({ type: "reset" })

    }
    return { addBook, bookList, getListOfData, removeBook,reset };
}

export default useBookListHook;