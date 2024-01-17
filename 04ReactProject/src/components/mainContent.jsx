
import { Outlet } from "react-router-dom";

import Footer from "./footer"
import Navbar from "./navbar"

const MainContext = () => {
    return (
        <>
            <Navbar />
            <main> <Outlet /></main>
            <Footer />
        </>
    )
}
export default MainContext;