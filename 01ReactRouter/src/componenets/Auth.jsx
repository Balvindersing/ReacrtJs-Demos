import { useNavigate } from 'react-router-dom'
import { MyContext } from '../context/MyContext';
import { useContext } from 'react';
function Auth({ children }) {
    //debugger
    const { userName } = useContext(MyContext);
    const navigate = useNavigate();
    if (userName == undefined) {
        navigate('/login');
    }
    return children;
}
export default Auth;