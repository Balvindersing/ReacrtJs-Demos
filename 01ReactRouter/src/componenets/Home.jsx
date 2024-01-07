import { useContext, useEffect, useMemo } from "react";
import { MyContext } from "../context/MyContext";
function Home() {
    const { userName } = useContext(MyContext);
    useEffect(() => {
        console.clear();
        console.log('home is runnig');

        return () => {
            console.log('Clean update in home is runnig');
        }

    }, [userName]);
    console.log(userName)
    return (
        <h1>Home Page {userName}</h1>
    )
}
export default Home;