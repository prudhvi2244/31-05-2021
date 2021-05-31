import React, { useEffect, useState } from "react";
import axios from "axios";
function GetSingleProduct() {
  let initialProduct = {};
  let [product, setProduct] = useState(initialProduct);
  let [pid, setPid] = useState(0);
  let [btnId,setBtnId]=useState(0)

  useEffect(() => {
    const URL = `http://localhost:8080/product/${pid}`;
    axios
      .get(URL)
      .then((response) => {
        setProduct(response.data);
        console.log(response.data);
      })
      .catch((error) => console.log(error.message));
  },[btnId]);


  function handleBtnClick()
  {
      setBtnId(pid)
  }

  return (
    <div>
      <h4>Product Details</h4>
      <hr />
      <div className="form-group">
        <label>Product ID</label>
        <input
          className="form-control"
          value={pid}
          onChange={(e) =>setPid(e.target.value)}
        />
        <button onClick={handleBtnClick} className='btn btn-success mt-2'>Get Details</button>
      </div>
      <hr/>
      <h5>Product Id :{product.pid} </h5>
      <h5>Product Name :{product.pname}</h5>
      <h5>Product Price :{product.price}</h5>
    </div>
  );
}

export default GetSingleProduct;
