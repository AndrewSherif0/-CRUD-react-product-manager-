import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
function AddProduct() {
    const [title,setitle]=useState('');
    const [price,sePrice]=useState(0);
    const [Products, SetProducts] = useState([]);
let navigate = useNavigate();
useEffect(() => {
    fetchProducts();
}, []);

const fetchProducts = () => {
    fetch("http://localhost:5050/products")
        .then((res) => res.json())
        .then((data) => {
            SetProducts(data);
        });
};

const calculateLastId = () => {
    if (Products.length === 0) {
        return 0; // Default to 0 if no products exist
    }
    return Math.max(...Products.map((product) => product.id));
};

// Example usage:
const lastId = calculateLastId();

console.log("Last ID:", lastId);

//1:21
const formSubmit=(e)=>{
    e.preventDefault();
    fetch("http://localhost:5050/products", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
             "id":String(lastId+1),
            title,
            price }),
    })
        .then((res) => res.json())
        .then((data) => {
            console.log('New Product:', data);
            navigate('/product')
        });
        Swal.fire({
            icon: "success",
            title: "Success",
            text: `Product "${title}" added successfully!`,
            timer: 3000,
            timerProgressBar: true,
            showConfirmButton: false, // Removes the confirm button
        });

};


    return (
        <>
            <form onSubmit={formSubmit} >
                <div className="mb-3">
                    <label htmlFor="productTitle"
                     className="form-label">Title</label>
                    <input type="text" 
                    className="form-control"
                    id="productTitle"
                    aria-describedby="productTitle"
                    placeholder="Title"
                   
                    onChange={(e)=>setitle(e.target.value)}
                    />
                </div>
               
                
                <div className="mb-3">
                    <label htmlFor="productPrice" 
                    className="form-label">Price</label>
                    <input type="number" 
                    className="form-control" 
                    id="productPrice" 
                    aria-describedby="productPrice"
                    placeholder="Price"
                    onChange={(e)=>sePrice(e.target.value)}   />
                 
                </div>
               
                <button type="submit" className="btn btn-primary">Add Product</button>
            </form>
        </>
    );
}

export default AddProduct;