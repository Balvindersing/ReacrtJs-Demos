
import { Outlet } from "react-router-dom";

import Footer from "./footer"
import Navbar from "./navbar"
import { BookContextProvider } from "../store/myBookStore";

const MainContext = () => {
    return (
        <>
            <BookContextProvider>
                <Navbar />
                <div className="container " style={{ boxShadow: "2px 2px 2px 2px #77869c", backgroundColor: "#B4D4FF", border: "2px solid #f7eded", borderRadius: "13px" }}>

                    <Outlet />
                </div>
                <Footer />
            </BookContextProvider>
        </>
    )
}
export default MainContext;