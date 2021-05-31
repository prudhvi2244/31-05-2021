import React, { useState } from 'react'

function Demo5() 
{

   let initialItems=[10,300,500,600]
   let [items,setItems]= useState(initialItems)
  
   function handleItems()
   {
       setItems([...items,Math.floor(Math.random(2)*10)])
   }
  
   return (
        <div>
            <h2>All Items</h2>
            <hr/>
            <ul>
            {
               items.map(item=><li>{item}</li>)
            }
            </ul>
            <button onClick={handleItems} className='btn btn-info'>Add Item</button>
        </div>
    )
}

export default Demo5
