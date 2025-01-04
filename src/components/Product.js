import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';

function Product() {
    const [Products, SetProducts] = useState([]);
    
    useEffect(() => {
        GitAllProduct();
    }, []);

    const GitAllProduct = () => {
        const url = 'http://localhost:5050/products';
        fetch(url)
            .then((res) => res.json())
            .then((data) => { 
                SetProducts(data); 
            });
    };

    const deleteproduct = (product) => {
        Swal.fire({
            title: `Are you sure to delete \n(${product.title})?`,
            showCancelButton: true,
            confirmButtonText: "Sure",
            showLoaderOnConfirm: true,
        }).then((data) => {
            if (data.isConfirmed) {
                let url = `http://localhost:5050/products/${product.id}`;
                
                // First, delete the product
                fetch(url, {
                    method: "DELETE"
                })
                    .then(() => {
                        // After deleting, update the IDs of the remaining products
                       
                        Swal.fire({
                            icon: "success",
                            title: "Success",
                            text: `Deleted and IDs updated successfully!`,
                            timer: 3000,
                            timerProgressBar: true,
                            showConfirmButton: false, // Removes the confirm button
                        });
                        GitAllProduct();
                    });
            }
        });
    };

    
    return (
        <>
            <h1>Products page</h1>
            <Link className="btn btn-success btn-sm mt-3" to={'/product/Add'}>Add New Product</Link>
            <table className="table table-striped mt-5">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Title</th>
                        <th scope="col">Price</th>
                        <th scope="col">Operations</th>
                    </tr>
                </thead>
                <tbody>
                    {Products.map((product,index) => {
                        
                        return (
                            <tr key={product.id}>
                                <th scope="row">{index+1}</th>
                                <td>{product.title}</td>
                                <td>{product.price}</td>
                                <td>
                                    <button className="btn btn-danger btn-sm" onClick={() => deleteproduct(product)}>Delete</button>
                                    <Link to={`/product/${product.id}`} className="btn btn-info btn-sm">View</Link>
                                    <Link to={`/product/edit/${product.id}`} className="btn btn-primary btn-sm">Edit</Link>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
}

export default Product;
