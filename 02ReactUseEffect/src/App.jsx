import { useCallback, useContext, useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ChildComponent from './child.component'
import UserProvider from './userProvider'

function App() {
  const [count, setCount] = useState(0)

  // const func = () => {
  //   setTimeout(x => {
  //     console.log("running set time out")
  //   }, 5000);
  //   return 10
  // };

  // const v2 = useCallback(x => {
  //   console.log("memorunning v2")
  //   setCount((count) => count + 1)
  //   console.log(count)
  // }, []);

  // const v1 =
  //   useMemo(x => {
  //     console.log("v1")
  //     let v11 = 10 + count;
  //     return v11;
  //   }, [v2]);
  // console.log(v1)
  return (
    <UserProvider>

      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <ChildComponent></ChildComponent>
    </UserProvider>
  )
}

export default App
