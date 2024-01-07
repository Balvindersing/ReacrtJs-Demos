import React, { useCallback, useReducer } from "react";
import ItemListReducer from "../stores/reducer/itemsReducer";
import uniqid from 'uniqid';

const ItemsListComponentWithRedcuer = (props) => {
    //With Redcuer
    const addItemWithReducer = useCallback(() => {
        props.dataProp();
    });
    console.log('List component with Redcuer', props.itemsData);
    return (
        <>
            <button onClick={addItemWithReducer}>Add New Item with Redcuer</button>
            <br />
            <ul>
                {props.itemsData.length > 0 &&
                    props.itemsData.map((item) => (
                        <li style={{
                            marginTop: '5px',
                            backgroundColor: 'burlywood',
                            borderRadius: '5px',
                            boxShadow: '0px 4px 10px 4px #8c8585'
                        }} key={item.Id}>Id:  {item.Id.toUpperCase()} , Name: {item.name.toUpperCase()}, Age: {item.age}</li>
                    ))}
            </ul>
        </>
    )
}
export default ItemsListComponentWithRedcuer;