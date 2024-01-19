
import { Outlet } from "react-router-dom";

import Footer from "./footer"
import Navbar from "./navbar"
import { BookContextProvider } from "../store/myBookStore";

const MainContext = () => {
    return (
        <>
            <BookContextProvider>
                <Navbar />
                <main> <Outlet /></main>
                <Footer />
            </BookContextProvider>
        </>
    )
}
export default MainContext;