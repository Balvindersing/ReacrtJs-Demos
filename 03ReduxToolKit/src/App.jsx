import { useCallback, useReducer, useState, } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { addCounter, removeCounter } from './stores/slices/counterSlice'
import { addItems, removeItem } from './stores/slices/itemsSlice'
import ItemListComponent from './components/itemsListComponent'
import uniqid from 'uniqid';
import CounterWithReducer from './components/counterWithRedcuer'
import ItemListReducer from './stores/reducer/itemsReducer'
import ItemsListComponentWithRedcuer from './components/itemsListComponentWithRedcuer'
import ItemListWithReducer from './stores/reducer/itemsReducer'
function App() {
  const [count, setCount] = useState(0)
  const counterVal = useSelector((state) => state.counter);
  const items = useSelector((state) => state.items);

  const dispatch = useDispatch();
  const counterAdd = () => {
    dispatch(addCounter());
  }
  const counterRemove = () => {
    dispatch(removeCounter());
  }
  console.log(counterVal);
  console.log("items: ", items);

  const addItem = () => {
    debugger
    dispatch(addItems({ name: "Test - " + uniqid(), Id: uniqid(), age: 21 }));
  };
  const removeItem = () => {

  };
  const [itmesWithReducer, dispatchWithRedcuer] = useReducer(ItemListWithReducer, [{ name: 'Test - ' + uniqid(), Id: uniqid(), age: '21' }, { name: 'Test - ' + uniqid(), Id: uniqid(), age: '21' }]);
  const addItemWithReducer = useCallback(() => {
    dispatchWithRedcuer({ type: 'add', payload: { name: 'Test - ' + uniqid(), Id: uniqid(), age: '21' } })
    console.log('No of count: ', itmesWithReducer.length)
  });

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={counterRemove}>
          -
        </button>
        {counterVal}
        <button onClick={counterAdd}>
          +
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <hr />
      <h1>Display Item Lits</h1>
      <button onClick={addItem}>Add New Item</button>
      <ItemListComponent items={items}></ItemListComponent>

      <hr />
      <h1>Use-Reducer</h1>

      <CounterWithReducer />

      <hr />
      <h1>Display Item Lits with Redcuer</h1>
      <ItemsListComponentWithRedcuer itemsData={itmesWithReducer} dataProp={addItemWithReducer}></ItemsListComponentWithRedcuer>

    </>
  )
}

export default App
