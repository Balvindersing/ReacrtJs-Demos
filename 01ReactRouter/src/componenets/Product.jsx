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
        <>
        <hr/>
            <ul>
                {DUMMYDATA.map(item =>
                    <li key={item.Id}>
                        <Link to={`/product-details/${item.Id}`}>  {item.Name}</Link>  </li>
                )}
            </ul>
        </>
    )
}
export default Product;