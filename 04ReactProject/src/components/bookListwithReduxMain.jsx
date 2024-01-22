import { Provider } from "react-redux";
import AddBookWithRedux from "./addBookWithRedux";
import BookListWithRedux from "./bookListWithRedux";
import reduxBookStore from "../store/reduxStoreForBook.js";

const BookListWithReduxMain = () => {
    return <>
        <Provider store={reduxBookStore}>
            <AddBookWithRedux />

            <hr />
            <BookListWithRedux />
        </Provider>
    </>
}

export default BookListWithReduxMain;