import axios from 'axios'
import history from '../history'

let initialExpense = {
    // items:{'item1'10.15, 'item2': 30.40},
    // items:[{item: 'item1', price: 10.15},{item: 'item2', price: 20.20}],
    // item: {}
}
// items.map(elem=>{
//     elem.item
//     elem.price
// })

//**Action type
const ADD_ITEM = 'ADD_ITEM';

//**Action creator
const addItem = (item)=>{
    type:ADD_ITEM,
    item
}

export const addExpenseItem = (user, item, price) =>
    dispatch => 
        axios.post(`/api/expense/add`, {user, item, price})
        .then(res=>{
            dispatch(addItem(res.data))
        }).catch(Error())
        
export default function dummyReducer (state=null, action) {
    switch(action.type){
        case ADD_ITEM:
             console.log('working??')
        //     // const itemsCopy = [...items]
        //     // itemsCopy.push(item)
        //     // return {...state, items: itemsCopy}
        //     return action.item

        default: state
    }
}