import React from "react";
const ItemListComponent = ({ items }) => {
    
    console.log('List component', items);

    return (
        <>
            <ul>
                {
                    items.map((item) => (
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
export default ItemListComponent;