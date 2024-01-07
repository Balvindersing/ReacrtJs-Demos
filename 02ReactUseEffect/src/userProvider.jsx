import userContext from "./userContext";
export default function UserProvider({ children }) {
    const m1 = (message) => {
        console.log(message);
    }
    const m2 = () => {
        console.log("M2 is called");
    }
    return <userContext.Provider value={{ m1, m2 }}>
        {children}
    </userContext.Provider>
}