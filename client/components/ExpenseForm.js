import React, { Component } from 'react'
import {connect} from 'react-redux'

const ExpenseForm = (props)=> {
    const {handleSubmit} = props
    console.log('WORKINGS?')
    return (
            <div>
                <h1>EXPENSE</h1>
                <form onSubmit={handleSubmit}>
                    <input type='text' name='item' placeholder='item' />
                    <input type='float' name='price' placeholder='price' />
                    <button type='submit'>Submit</button>
                </form>
                
            </div>
        );
}

const mapToState = (state) =>{
return {
    
    }
}

const mapDispatch = (dispatch)=>{
    return {
        handleSubmit (evt) {
        evt.preventDefault()
        const item = evt.target.item.value
        const price = evt.target.price.value
        console.log('****',item, price)
        //dispatch()
        }
    }
}
export default connect(mapToState,mapDispatch)(ExpenseForm)
