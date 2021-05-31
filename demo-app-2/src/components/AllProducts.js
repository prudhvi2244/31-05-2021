import React, { useState, useEffect } from "react";
import axios from 'axios'
function AllProducts() {
  let initialProducts = [];
  let [products, setProducts] = useState(initialProducts);

  useEffect(() => {
    const URL = "http://localhost:8080/product/allProducts";
    axios
      .get(URL)
      .then((response) => {
          setProducts(response.data)
          console.log(response.data)
      })
      .catch((error) => console.log(error.message));
  },[])

  return (
    <div>
      <h2>All Products</h2>
      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Product Price</th>
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
