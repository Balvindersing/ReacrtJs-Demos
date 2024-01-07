import React from "react";

const ItemListWithReducer = (stateItem, action) => {
    debugger
    switch (action.type) {
        case 'add':
            return stateItem.push(action.payload);
        case 'remove':
            return stateItem.filters((item) => item !== action.payload)

    }
}

export default ItemListWithReducer;