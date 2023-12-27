import { NavLink } from "react-router-dom";
import { MyContext } from "../context/MyContext";
import { useContext } from "react";
function Navbar() {
    const { userName } = useContext(MyContext);
    return (
        <nav className="navbar">
            <div className="container">
                <div className="logo">
                    <h4>Logo</h4>

                </div>
                <div className="menu-icon" onClick={() => { }}>
                    <h4>Logo</h4>
                </div>
                <div className={`nav-elements `}>
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/product">Product</NavLink>
                        </li>
                        <li>
                            <NavLink to="/admin">Admin-Home</NavLink>
                        </li>
                        {!userName &&
                            <li>
                                <NavLink to={`/profile/${userName}`}>Profile</NavLink>
                            </li>
                        }

                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;