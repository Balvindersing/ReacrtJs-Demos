import { useState } from "react";
import { json } from "react-router-dom";

export function useLocalStorage(keyName) {
    debugger
    const [getData, setData] = useState(null);
    const setValueL = (key, val) => {
        setData(getData + 1);
        localStorage.setItem(key, JSON.stringify(getData))
        console.log("getData: {0}", getData)
    }
    const getDataFromL = (key) => {
        console.log(getData)
        return getData
    }

    return { getData, setValueL }
}