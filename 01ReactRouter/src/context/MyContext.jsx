import { createContext, useState } from 'react';
export const MyContext = createContext({});

export default function MyContextProvider({ children }) {
    const [userName, setUserName] = useState();

    return (
        <MyContext.Provider value={{ userName, setUserName }}>
            {children}
        </MyContext.Provider>
    )
}