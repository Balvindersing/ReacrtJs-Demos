import { useReducer, useRef } from "react";
import { useInPutValidation, useNumberValidation } from "../validationCustomHooks/inputRequiredValidation";
import { useBookListReducer } from "../store/myBookStoreWithReducer";
import generateUniqueId from "generate-unique-id";
import { DUMMYDATA } from "../MockDATA";
import useBookListHook from "../validationCustomHooks/itemListHook";
import { BookStoreContextWithRedcuer } from "../store/myBookStore";
import { useContext } from "react";

const AddBook = () => {
    const { value, isValid, onChangeHandler, onTouchHandler } = useInPutValidation('');
    const { valueNo, isValidNo, isValid_Req, onChangeHandlerNo, onTouchHandlerNo } = useNumberValidation('');
    //const { addBook, bookList } = useBookListHook();
    // const [bookList] = useReducer(useBookListReducer, []);
    const { bookList, saveBookHandler, restHandler } = useContext(BookStoreContextWithRedcuer, DUMMYDATA)

    const bookNameRef = useRef();
    const bookPriceRef = useRef();
    const addBookHandler = () => {
        if (bookNameRef.current.value != "" && bookPriceRef.current.value != "") {
            saveBookHandler({
                id: generateUniqueId({ length: 5, useLetters: false }),
                bookName: bookNameRef.current.value,
                bookPrice: bookPriceRef.current.value,
            })
            bookNameRef.current.value = '';
            bookPriceRef.current.value = '';
        }
    };
    const reset = () => {
        restHandler();

    }
    return <>
        <div style={{ marginTop: "10px" }} className="row">
            <div className="col">
                <input
                    className='form-control'
                    ref={bookNameRef}
                    onChange={onChangeHandler}
                    onBlur={onTouchHandler}
                    placeholder='Enter book name' />
                {isValid ? null : <p style={{ color: 'red' }}>Input is not valid</p>}
            </div>
            <div className="col">
                <input
                    className='form-control'
                    ref={bookPriceRef}
                    onChange={onChangeHandlerNo}
                    onBlur={onTouchHandlerNo}
                    placeholder='Enter book price' />
                {isValid_Req ? null : <p style={{ color: 'red' }}>Input is required</p>}
                {isValidNo ? null : <p style={{ color: 'red' }}>Enter number only</p>}

            </div>
            <div className="col">
                <button className='btn btn-primary' onClick={addBookHandler}>Add</button>
                <button style={{ marginLeft: "5px" }} className='btn btn-primary' onClick={reset}>Reset</button>
            </div>
        </div>
        <hr />
    </>
}

export default AddBook;