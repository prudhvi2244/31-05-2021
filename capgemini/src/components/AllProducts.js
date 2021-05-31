import React, { useState, useEffect } from "react";
import axios from "axios";
function AllProducts(props) {
  let initialProducts = [];
  let [products, setProducts] = useState(initialProducts);
  useEffect(() => {
    const URL = `http://localhost:8080/product/allProducts`;
    axios
      .get(URL)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  function goToAddProduct() {
    props.history.push('/addProduct')
  }

  return (
    <div>
      <h2 className="text-primary">All Products</h2>
      <hr />
      <button onClick={goToAddProduct} className="btn btn-danger mt-2 mb-2">
        Add Product
      </button>
      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Product City</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr>
              <td>{product.pid}</td>
              <td>{product.pname}</td>
              <td>{product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AllProducts;
