import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

function ProductEdit() {
    let { ProductID } = useParams();
    let [product, editproduct] = useState([]);
    const [title, setitle] = useState('');
    const [price, sePrice] = useState(0);
    let navigate = useNavigate();
    const [Description, setDescription] = useState('');
    useEffect(() => {
        fetch(`http://localhost:5050/products/${ProductID}`)
            .then((res) => res.json())
            .then((productfetched) => editproduct(productfetched));
    }, [ProductID]);

    const formSubmit = (e) => {
        e.preventDefault();
        
        fetch(`http://localhost:5050/products/${ProductID}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "id": ProductID,
                title,
                price,
                Description:Description,
                image:product.image,
                category:product.category

            }),})
            .then((res) => res.json())
            .then((data) => {
                
                navigate('/product')
        });
        Swal.fire({
                    icon: "success",
                    title: "Success",
                    text: `Product "${title}" Edited successfully!`,
                    timer: 3000,
                    timerProgressBar: true,
                    showConfirmButton: false, // Removes the confirm button
                });
    }

    return (
        <form onSubmit={formSubmit}>
            <div className="card" style={{ textAlign: "center", padding: "20px" }}>
                <img
                    src={product.image}
                    style={{
                        width: "400px",
                        margin: "0 auto",
                        display: "block",
                    }}
                    className="card-img-top"
                    alt="Product"

                />
                <div className="card-body">
                    <h1>Product Title</h1>
                    <input
                        type="text"
                        placeholder={product.title}

                        style={{ width: "100%", marginBottom: "10px" }}
                        onChange={(e) => setitle(e.target.value)}

                    ></input>
                    <h4>Product Description</h4>
                    <input
                        type="text"
                        placeholder={product.description}
                        style={{ width: "100%", marginBottom: "10px" }}
                        onChange={(e) => setDescription(e.target.value)}
                    ></input>
                    <h5>Price $</h5>
                    <input
                        type="number"
                        placeholder={product.price}
                        onChange={(e) => sePrice(e.target.value)}
                        style={{ width: "100%", marginBottom: "20px" }}
                    ></input>
                </div>
                <button
                    type="submit"
                    className="btn btn-primary"
                    style={{
                        width: "25%",
                        float: "right",
                        marginTop: "10px",
                        
                        // or "absolute" based on your layout

                    }}
                    
                >
                    Edit Product
                </button>
            </div>
        </form>
    );
}

export default ProductEdit;
