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
//const ADD_ITEM = 'ADD_ITEM'
const GET_ITEM ='GET_ITEM'

//**Action creator
// const addItem = (item)=>{
//     type:ADD_ITEM,
//     item
// }
const getItem = item => ({type: GET_ITEM, item})

export const addExpenseItem = (user, item, price) =>
    dispatch =>
        axios.post(`/api/expenses/add`, {user, item, price})
        .then(res=>{
            dispatch(getItem(res.data))
        }, itemError =>{
            dispatch(getItem({error:itemError}))
        })
        .catch(dispatchOrHistoryErr => console.error(dispatchOrHistoryErr))

export default function (state=initialExpense, action) {
    switch(action.type){
        case GET_ITEM:
             console.log('working??')
             return action.item
        //     // const itemsCopy = [...items]
        //     // itemsCopy.push(item)
        //     // return {...state, items: itemsCopy}
        //     return action.item

        default:
        return state
    }
}
