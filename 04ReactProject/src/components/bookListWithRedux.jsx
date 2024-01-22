import generateUniqueId from "generate-unique-id"
import { useSelector, useDispatch } from 'react-redux'
import { DUMMYDATA } from "../MockDATA";

const BookListWithRedux = () => {
    const bookList = useSelector(state => state.bookList.reduxBookList);
    console.log("BookList with Redux-1: ", bookList)
    // bookList = DUMMYDATA
    const dispatch = useDispatch();
    const deleteBookHandlerFun = (id) => {
        dispatch({ type: "DELETE", payload: id })
    }
    const detailBookHandler = () => {
    }
    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bookList.map((item) => {
                            return <>
                                <tr id={generateUniqueId({ length: 5 })}>
                                    <th scope="row">{item.id}</th>
                                    <td >{item.bookName}</td>
                                    <td >{item.bookPrice}</td>
                                    <td>
                                        <button id={generateUniqueId({ length: 5 })} onClick={() => { deleteBookHandlerFun(item.id) }} className="btn btn-danger" >Delete</button>
                                        <button style={{ marginLeft: "5px" }} id={generateUniqueId({ length: 5 })} onClick={() => { detailBookHandler(item.id) }} className="btn btn-primary" >View</button>
                                    </td>
                                </tr>
                            </>
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default BookListWithRedux;