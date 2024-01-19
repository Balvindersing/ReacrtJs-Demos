import { useContext } from "react";
import { BookStoreContextWithRedcuer } from "../store/myBookStore";
import generateUniqueId from "generate-unique-id";

const BookListForReducer = () => {
    const { bookList, deleteBookHandler } = useContext(BookStoreContextWithRedcuer);
    const deleteBookHandlerFun = (id) => {
        deleteBookHandler(id)
    }
    
    return (
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
    )
};

export default BookListForReducer;