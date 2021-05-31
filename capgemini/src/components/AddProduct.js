import React ,{useState,useEffect} from 'react'
import axios from 'axios'
function AddProduct() {

    let initialProduct={pname:'',price:0.0}
    let [product,setProduct]=useState(initialProduct)
    let [msg,setMsg]=useState('')
    let [id,setId]=useState(0)

    useEffect(()=>
    {
        const URL=`http://localhost:8080/product/saveProduct`
        axios.post(URL,product).then(response=>
            {
                setMsg(response.data)
            }).catch(error=>console.log(error.message))
    },[id])


   function handleBtnClick()
    {
        setId(1)
    }
    return (
        <div >
            <h2 className='text-primary'>Add Product</h2>
            <hr/>
            <form>
                <div className='form-group'>
                    <label>Product Name</label>
                    <input className='form-control' value={product.pname} onChange={e=>setProduct({...product,pname:e.target.value})}/>
                </div>
                <div className='form-group'>
                    <label>Product Price</label>
                    <input type='number' className='form-control' value={product.price} onChange={e=>setProduct({...product,price:e.target.value})}/>
                </div>
                <button onClick={handleBtnClick} className='btn btn-success mt-2'>Add Product</button>
            </form>
            <h6 className='mt-2 alert alert-success'>{msg}</h6>
        </div>
    )
}

export default AddProduct
