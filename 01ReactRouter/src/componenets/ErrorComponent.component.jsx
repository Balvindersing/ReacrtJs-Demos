import React from "react";
import { Route, useNavigate } from "react-router-dom";

const ErrorComponent = () => {
    const navigate = useNavigate();
    
    const goBackToHome = () => {
        navigate("/");
    }
    return <>
        <h1>Page not found...</h1>
        <button className="btn" onClick={goBackToHome}>Go back</button>
        
    </>
}

export default ErrorComponent;