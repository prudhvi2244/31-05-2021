import React, { Component } from 'react'

export class Demo1 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             msg:'Welcome Guest'
        }
    }
    
    handleBtnClick=()=>
    {
        this.setState({
            msg:'Thank You For Subscribing!'
        })
    }


    render() {
        return (
            <div>
                <h2>Class Component</h2>
                <hr/>
                <h3>{this.state.msg}</h3>
                <button onClick={this.handleBtnClick} className='btn btn-primary'>Subscribe</button>
            </div>
        )
    }
}

export default Demo1
