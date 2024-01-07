import React, { useContext } from "react";
import userContext from "./userContext";
import ButtonComponent from "./components/button.component";

const ChildComponent = () => {
    const { m1, m2 } = useContext(userContext);
    console.log('Child Running');
    const nameUpdate = () => {
        m1("hello");
    }
    return <>
        <h1>Child name: 
            <ButtonComponent style={{ backgroundColor: 'green' }}  name="Name Update-1" onClick={nameUpdate} />
            {/* <button style={{ backgroundColor: 'green' }} onClick={nameUpdate}>Name Update</button> */}
        </h1></>
}
export default ChildComponent;
