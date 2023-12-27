import { Link } from 'react-router-dom';
const DUMMYDATA = [
    {
        Id: 1, Name: "Product 1"
    },
    {
        Id: 2, Name: "Product 2"
    },
    {
        Id: 3, Name: "Product 3"
    }
];
function Product() {
    console.log("working Product " + DUMMYDATA.length)
    return (
        <div style={{margin:'10px 0px 0px 0px'}}>
            
            {DUMMYDATA.map(item =>
            <>
                <div key={item.Id} className='div-style'>
                  Id:  {item.Id}
                </div>
                <hr />
             </>   
            )}
        </div>
    )
}
export default Product;