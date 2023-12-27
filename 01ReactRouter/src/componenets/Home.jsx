import { useContext } from "react";
import { MyContext } from "../context/MyContext";
function Home() {
    const { userName} = useContext(MyContext);
    useEffect(() => { 

    },[userName])
    console.log(userName)
    return (
        <h1>Home Page {userName}</h1>
    )
}
export default Home;