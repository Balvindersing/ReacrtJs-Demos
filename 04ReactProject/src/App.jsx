import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BookList from './components/bookList'
import generateUniqueId from "generate-unique-id"
import { useInPutValidation, useNumberValidation } from './validationCustomHooks/inputRequiredValidation'
import { DUMMYDATA } from './MockDATA'
function App() {
  const [bookList, setBookList] = useState(DUMMYDATA)
  const bookNameRef = useRef();
  const bookPriceRef = useRef();
  //const bookList = [];
  const { value, isValid, onChangeHandler, onTouchHandler } = useInPutValidation('');
  const { valueNo, isValidNo, isValid_Req, onChangeHandlerNo, onTouchHandlerNo } = useNumberValidation('');

  const saveBookHandler = () => {
    if (bookNameRef.current.value != "" && bookPriceRef.current.value != "") {
      setBookList(p => [...p, {
        id: generateUniqueId({ length: 5, useLetters: false }),
        bookName: bookNameRef.current.value,
        bookPrice: bookPriceRef.current.value,
      }]);
    }
  };
  const deleteBookHandler = (id) => {
    console.log("from Child to parent: ", id)
    setBookList(bookList.filter(item => item.id !== id))
  }
  const restHandler = () => {
    setBookList(DUMMYDATA)
  }
  return (
    <>
      <h1>ToDos for Books</h1>
      <div className="container " style={{ boxShadow: "2px 2px 2px 2px #77869c", backgroundColor: "#B4D4FF", border: "2px solid #f7eded", borderRadius: "13px" }}>
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
            <button className='btn btn-primary' onClick={saveBookHandler}>Add</button>
            <button style={{ marginLeft: "5px" }} className='btn btn-primary' onClick={restHandler}>Reset</button>
          </div>
        </div>
        <hr />
        <div style={{ border: "2px solid #f7eded", borderRadius: "5px" }} className='row'>
          <BookList deleteBook={deleteBookHandler} books={bookList} />
        </div>
      </div>
    </>
  )
}

export default App
