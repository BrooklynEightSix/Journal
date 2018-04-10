import React, { Component } from 'react'
import {connect} from 'react-redux'


class ExpenseForm extends Component {
    constructor(){
        super()
        this.state = {
            item: '',
            price: 0.00
        }

        this.onSubmit = this.onSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
    }

    onChange(event){
        this.setState({ [event.target.name]: event.target.value })
    }
    onSubmit(event){
        event.preventDefault()
        const itemInfo = {
            item: this.state.item,
            price: this.state.price
        }
        console.log(itemInfo)
    }

    render() {

        return (
            <div>
                <h1>EXPENSE</h1>
                <form onSubmit={this.onSubmit}>
                    <input type='text' name='item' placeholder='item' value={this.state.item} onChange={this.onChange}/>
                    <input type='float' name='price' placeholder='price' value={this.state.price} onChange={this.onChange}/>
                    <button>Submit</button>
                </form>
                
            </div>
        );
    }
}
// const ExpenseForm = ()=> {
//     return (
//             <div>
//                 <h1>EXPENSE</h1>
//                 <form >
//                     <input type='text' name='item' placeholder='item' value={this.state.item} onChange={this.onChange}/>
//                     <input type='float' name='price' placeholder='price' value={this.state.price} onChange={this.onChange}/>
//                     <button>Submit</button>
//                 </form>
                
//             </div>
//         );
// }

// const mapToState = (state) =>{
// return {}
// }

// const mapDispatch = (dispatch)=>{
//     return {
//         handleSubmit (evt) {
//         evt.preventDefault()
    
//         dispatch()
//         }
//     }
// }
// export default connect(mapToState,mapDispatch)(ExpenseForm)

export default ExpenseForm