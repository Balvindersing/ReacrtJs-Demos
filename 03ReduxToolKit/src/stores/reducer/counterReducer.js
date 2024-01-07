import React, { useReducer } from 'react';
const counterReducer = (stateCounter, action) => {
    console.log(action)
    if (action.type === 'Add') {
        return stateCounter + 1;
    }
    else if (action.type === 'remove') {
        let data = action.payload;
        return stateCounter - 1;
    } else {
        return stateCounter = 0;
    }
}

export default counterReducer;