import React, { useState } from "react";
function Demo2() {
    let welcome='Welcome Guest'
    let [msg,setMsg]=useState(welcome)
  
    return (
    <div>
      <h2>Functional Component</h2>
       <hr />
      <h3>{msg}</h3>
      <button onClick={()=>setMsg('Thank You For Subscribing!')} className='btn btn-danger'>Subcribe</button>
    </div>
  );
}

export default Demo2;
