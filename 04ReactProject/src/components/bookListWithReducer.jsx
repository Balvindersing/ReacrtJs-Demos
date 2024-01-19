import { useContext, useReducer, useState } from "react";
import { DUMMYDATA } from "../MockDATA";
import { useBookListReducer } from "../store/myBookStoreWithReducer";
import generateUniqueId from "generate-unique-id";
import { useEffect } from "react";
import AddBook from "./addComponent";
import BookListForReducer from "./booklistForReducer";
import { BookStoreContextWithRedcuer, BookStoreContextWithRedcuerProvider } from "../store/myBookStore";

const BookListWithReducer = () => {
    const { bookList, dispatch } = useContext(BookStoreContextWithRedcuer, DUMMYDATA)
    //const [bookList, dispatch] = useReducer(useBookListReducer, DUMMYDATA);


    return (
        <BookStoreContextWithRedcuerProvider>
            <div style={{ marginTop: "10px" }} className=''>
                <div className='col'>
                    <AddBook />
                </div>
            </div>

            <div className='col'> <BookListForReducer /></div>
        </BookStoreContextWithRedcuerProvider>
    )
};
export default BookListWithReducer;
