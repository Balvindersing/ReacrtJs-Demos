import { DUMMYDATA } from "../MockDATA";

export const useBookListReducer = (state, action) => {

    if (action.type == "add") {
        console.log("Add working!!")
        return [...state, action.payload]
    }
    if (action.type == "remove") {
        console.log("Remove working!!")
        return state.filter(item => item.id !== action.payload);
    }
    else {
        return DUMMYDATA;
    }
}

//2451, 350