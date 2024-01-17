import { useContext, useEffect, useMemo, useState } from "react";
import { MyContext } from "../context/MyContext";
import useFormValidation from "../customHook/useFormValidation";
import { useLocalStorage } from "../customHook/useGetAndSetDataInLocalStorage";
import { HomeChild } from "./HomeChild";
//import { useFormValidation } from '../customHook/useFormValidation'
function Home() {
    const isEmailValid = (email) => (/\S+@\S+\.\S+/.test(email) ? '' : 'Invalid email address');

    const { userName } = useContext(MyContext);
    const { value, error, handleChange } = useFormValidation(isEmailValid);
    const { getData, setValueL } = useLocalStorage();
    const [getD, setD] = useState();
    useEffect(() => {
        console.clear();
        console.log('home is runnig');

        return () => {
            console.log('Clean update in home is runnig');
        }

    }, [userName]);
    console.log(userName);

    const setVal = () => {

        setValueL("testKey", 1)
    }
    const getVal = () => {

    }
    const childHandler = (val) => {
        console.log(val)
        alert("Child to parent Call?...: " + val)
    }
    return (
        <>
            <h1>Home Page {userName}</h1>
            {error}
            <input
                type="text"
                name="email"
                value={value}
                onChange={handleChange}
            />
            getDataFromL : {getData}
            <button onClick={setVal}>Set Val in  L</button>

            <HomeChild data="parentData" onClickCustom={childHandler} />
        </>
    )
}
export default Home;