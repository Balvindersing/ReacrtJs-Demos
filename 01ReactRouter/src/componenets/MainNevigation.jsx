import {Link} from 'react-router-dom'
function MainNevigation() {
    return (
        <nav>
            <ul>
                <li><Link to="/home"> Home</Link></li>
                <li><Link to="/product"> Product</Link></li>
                <li><Link to="/admin"> Admin-Home</Link></li>
                <li><Link to="home"> Admin-Home-2</Link></li>
            </ul>
        </nav>
    )
}
export default MainNevigation;