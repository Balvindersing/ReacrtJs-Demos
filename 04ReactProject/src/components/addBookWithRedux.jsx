import { useRef } from "react";
import { useInPutValidation, useNumberValidation } from "../validationCustomHooks/inputRequiredValidation";
import { useDispatch } from 'react-redux';
//import { addBook } from '../store/reduxStoreForBook'
import generateUniqueId from "generate-unique-id";
import { useSelector } from 'react-redux'
import { AddBook, Reset } from '../store/reduxStoreForBook.js'
const AddBookWithRedux = () => {
    const { value, isValid, onChangeHandler, onTouchHandler } = useInPutValidation('');
    const { valueNo, isValidNo, isValid_Req, onChangeHandlerNo, onTouchHandlerNo } = useNumberValidation('');
    const bookNameRef = useRef();
    const bookPriceRef = useRef();
    const dispatch = useDispatch();
    const bookList = useSelector(state => state.bookList)
    console.log("bookList: ", bookList)
    const addBookHandler = () => {
        if (bookNameRef.current.value != "" && bookPriceRef.current.value != "") {
            let obj = {
                id: generateUniqueId({ length: 5, useLetters: false }),
                bookName: bookNameRef.current.value,
                bookPrice: bookPriceRef.current.value,
            }
            dispatch(AddBook(obj));
            bookNameRef.current.value = '';
            bookPriceRef.current.value = '';
        }
    };
    const reset = () => {
        //dispatch({ type: 'RESET', payload: {} })
        dispatch(Reset())
    }
    return (
        <>
            <h1>Add Book</h1>
            <hr />
            <div style={{ marginTop: "10px", marginBottom: "10px" }} className="row">
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
        </>
    )
}
export default AddBookWithRedux;