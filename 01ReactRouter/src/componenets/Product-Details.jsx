import { useParams } from "react-router-dom";
const ProductDetail = () => {
    const {id} = useParams();
    return (
        <>
            <h3>Details</h3>
            <h3>Product Name:  {id}</h3>
        </>
    )
}
export default ProductDetail;