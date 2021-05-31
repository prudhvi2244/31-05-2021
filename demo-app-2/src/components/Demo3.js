import React,{useState} from 'react'

function Demo3() {
    let totalTickets=10
    let [ticket,setTicket]=useState(totalTickets)
    return (
        <div>
            <h2>Book Tickets Online</h2>
            <hr/>
            <h3>Total Tickets : {ticket}</h3>
            <button onClick={()=>setTicket(ticket-1)} className='btn btn-success'>Book Ticket</button>
        </div>
    )
}

export default Demo3
