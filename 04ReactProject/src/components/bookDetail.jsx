import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { DUMMYDATA } from "../MockDATA";

const BookDetail = () => {
    const { id } = useParams();
    console.log("ID in book detail pagw: ", id)
    console.log("ID in DUMMYDATA: ", DUMMYDATA)
    let bookObj = DUMMYDATA.map(x => {
        if (x.id == id)
            return x;
    });
    console.log("book data: ", bookObj[0])
    useEffect(() => {


    }, []);
    return (
        <>
            <h1>Book Detail page</h1>
            <div className="row">
                <div className="col"></div>
                <div className="col"></div>
            </div></>
    )
};
export default BookDetail;