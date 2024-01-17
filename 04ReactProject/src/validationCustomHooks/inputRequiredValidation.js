import React, { useState } from "react";
export const useInPutValidation = (initialValue) => {
    const [value, setValue] = useState(initialValue);
    const [isValid, setIsValid] = useState(true);
    console.log("custom validation working")
    const onChangeHandler = (event) => {
        console.log("custom validation working", event)
        console.log("value: ", event.target.value);
        setValue(event.target.value);
        if (event.target.value == "") {
            setIsValid(false);
        } else {
            setIsValid(true);

        }
    }
    const onTouchHandler = (event) => {
        console.log("custom validation working", event)
        console.log("value: ", event.target.value);
        if (event.target.value == "") {
            setIsValid(false);
        }
    }
    return { value, isValid, onChangeHandler, onTouchHandler }
}
export const useNumberValidation = (initialValue) => {
    const pattern = /^\d+$/;
    const [valueNo, setValueNo] = useState(initialValue);
    const [isValid_Req, setIsValid_Req] = useState(true);
    const [isValidNo, setIsValidNo] = useState(true);
    console.log("custom validation working")
    const onChangeHandlerNo = (event) => {
        console.log("custom validation working", event)
        console.log("value: ", event.target.value);
        //setValueNo(event.target.value);
        if (event.target.value == "") {
            setIsValid_Req(true);
            setIsValidNo(false);
            setValueNo('')
        } else {
            setIsValid_Req(true);
        }
        if (!pattern.test(event.target.value)) {
            setIsValidNo(false)
            // event.isDefaultPrevented();
        } else {
            setValueNo(event.target.value);
            setIsValidNo(true)
        }
    }
    const onTouchHandlerNo = (event) => {
        console.log("custom validation working", event)
        console.log("value: ", event.target.value);
        if (event.target.value == "") {
            setIsValid_Req(false);
            setIsValidNo(true)
        }
    }
    return { valueNo, isValidNo, isValid_Req, onChangeHandlerNo, onTouchHandlerNo }
}
