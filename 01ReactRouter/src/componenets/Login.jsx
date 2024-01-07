import { useState, useRef, useContext, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import { MyContext } from "../context/MyContext";

function Login() {
    const [userName, setUserNameVal] = useState();
    const userNameRef = useRef();
    const navigate = useNavigate();
    const { setUserName } = useContext(MyContext);
    const submitHandler = (e) => {
        if (userNameRef.current.value != undefined) {
            setUserName(userNameRef.current.value);
            navigate(`/profile/${userNameRef.current.value}`);
        }
    }

    useEffect(x => {

        console.log('1st time ran login component');
        return () => {
            console.log('Clean-Up use effect login is ran')
        };
    }, []);

    return (
        <div>
            <label> User Name:</label> <input ref={userNameRef} value={userName} type="text" />

            <button onClick={submitHandler}>Login</button>
        </div>
    )
}

export default Login;