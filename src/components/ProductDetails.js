import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetails(){
    let {ProductID}=useParams();
    let [product, editproduct]=useState([]);
    
    useEffect(()=>{
        fetch(`http://localhost:5050/products/${ProductID}`)
        .then((res) => res.json())
        .then((productfetched)=>editproduct(productfetched));
    },[ProductID])
    console.log(product.id);

    return (
        <div className="card">
            <img src={product.image} className="card-img-top" alt="Product" />
            <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
              
                <p className="card-text">{product.description}.</p>
            
              <h1>Price : {product.price}$</h1>
              
            </div>
        </div>
    );
}
export default ProductDetails;