import React, { Component } from 'react';

class Expense extends Component {
    constructor(){
        super()
        this.state = {
            item: 'fakeitem',
            price: '$10000000'
        }

        this.onSubmit = this.onSubmit.bind(this)
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
                    <input type='text' name='item' value={this.state.item}/>
                    <button>Submit</button>
                </form>
                
            </div>
        );
    }
}

export default Expense;