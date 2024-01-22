import { useState, useRef, useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BookList from './components/bookList'
import generateUniqueId from "generate-unique-id"
import { useInPutValidation, useNumberValidation } from './validationCustomHooks/inputRequiredValidation'
import { DUMMYDATA } from './MockDATA'
import { BookStoreContext } from './store/myBookStore'
import BookListWithReducer from './components/bookListWithReducer'
import AddBook from './components/addComponent'
import { useReducer } from 'react'
import { useBookListReducer } from './store/myBookStoreWithReducer'
import useBookListHook from './validationCustomHooks/itemListHook';
import { Provider } from 'react'
import reduxStoreMain from './store/reduxStoreForBook'
import BookListWithReduxMain from './components/bookListwithReduxMain'
function App() {
  const { restHandler, saveBookHandler } = useContext(BookStoreContext);

  const bookNameRef = useRef();
  const bookPriceRef = useRef();
  //const bookList = [];
  const { value, isValid, onChangeHandler, onTouchHandler } = useInPutValidation('');
  const { valueNo, isValidNo, isValid_Req, onChangeHandlerNo, onTouchHandlerNo } = useNumberValidation('');
  const addBookHandler = () => {
    if (bookNameRef.current.value != "" && bookPriceRef.current.value != "") {
      saveBookHandler({
        id: generateUniqueId({ length: 5, useLetters: false }),
        bookName: bookNameRef.current.value,
        bookPrice: bookPriceRef.current.value,
      });
    }
  }

  const reset = () => {
    restHandler();
  }
  // const [bookList, dispatch] = useReducer(useBookListReducer, []);

  // const addBookH = (val) => {
  //   console.log(val)
  //   console.log("App Component: ", bookList);
  //   console.log("load new Data: ", getListOfData());
  //   setBookList(bookList)
  //   //dispatch(val);
  // }
  return (
    <>
      <h1>ToDos for Books</h1>
      <div style={{ marginTop: "10px" }} className="row">
        <div className="col">
          <input
            className='form-control'
            ref={bookNameRef}
            value={value}
            onChange={onChangeHandler}
            onBlur={onTouchHandler}
            placeholder='Enter book name' />
          {isValid ? null : <p style={{ color: 'red' }}>Input is not valid</p>}
        </div>
        <div className="col">
          <input
            className='form-control'
            ref={bookPriceRef}
            value={valueNo}
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
      <div style={{ border: "2px solid #f7eded", borderRadius: "5px" }} className='row'>
        <BookList />
      </div>
      <div className='row'>
        <hr />
        <h1>Book-List-With-Redcuer</h1>
        <BookListWithReducer />
      </div>
      <div className="row">
        <hr />
        <h1>Redux-toolkit</h1>
      </div>
      <div className="row" style={{ marginTop: "10px" }}>
        <hr />
        <BookListWithReduxMain />
      </div>
    </>
  )
}

export default App
