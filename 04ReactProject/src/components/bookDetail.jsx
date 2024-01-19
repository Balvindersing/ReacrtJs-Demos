import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { DUMMYDATA } from "../MockDATA";
import { useContext } from "react";
import { BookStoreContext } from "../store/myBookStore";

const BookDetail = () => {
    const { id } = useParams();
    const { bookList } = useContext(BookStoreContext);
    console.log("Book-List: ", bookList)
    console.log("ID in book detail pagw: ", id)
    //console.log("ID in DUMMYDATA: ", DUMMYDATA)
    let bookObj = bookList.map(x => {
        if (x.id === id)
            return x;
    });
    console.log("book data: ", bookObj[0])
    return (
        <>
            <h1>Book Detail page</h1>
            <div className="row">
                <div className="col">{bookObj[0].bookName}</div>
                <div className="col">{bookObj[0].bookPrice}</div>
            </div></>
    )
};
export default BookDetail;