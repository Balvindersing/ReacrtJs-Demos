import generateUniqueId from 'generate-unique-id'
import { useNavigate } from 'react-router-dom';
//import { useNevigate } from 'react-router-dom';
const BookList = ({ books, deleteBook }) => {
    console.log("list loading")
    const navigate = useNavigate();
    const deleteBookHandler = (id) => {
        deleteBook(id);
    }
    const detailBookHandler = (id) => {
        console.log("Id: {0}", id)
        navigate('/book-detail/' + id);
    };


    return (
        <table className="table">
            <thead>
                <tr>
                    <th id={generateUniqueId({ length: 5 })} scope="col">#</th>
                    <th id={generateUniqueId({ length: 5 })} scope="col">Name</th>
                    <th id={generateUniqueId({ length: 5 })} scope="col">Price</th>
                    <th id={generateUniqueId({ length: 5 })} scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    books.map((item) => {
                        return <>
                            <tr id={generateUniqueId({ length: 5 })}>
                                <th id={generateUniqueId({ length: 5 })} scope="row">{item.id}</th>
                                <td id={generateUniqueId({ length: 5 })}>{item.bookName}</td>
                                <td id={generateUniqueId({ length: 5 })}>{item.bookPrice}</td>
                                <td id={generateUniqueId({ length: 5 })}>
                                    <button id={generateUniqueId({ length: 5 })} onClick={() => { deleteBookHandler(item.id) }} className="btn btn-danger" >Delete</button>
                                    <button style={{ marginLeft: "5px" }} id={generateUniqueId({ length: 5 })} onClick={() => { detailBookHandler(item.id) }} className="btn btn-primary" >View</button>
                                </td>
                            </tr>
                        </>
                    })
                }
            </tbody>
        </table>
    )
}

export default BookList;