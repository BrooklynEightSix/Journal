import ADD_ITEM from '../actions/expenseActions'

let state = {
    // items:{'item1'10.15, 'item2': 30.40},
    items:[{item: item1, price: 10.15},{item: item2, price: 20.20}]
    item: {}
}
// items.map(elem=>{
//     elem.item
//     elem.price
// })

export default function dummyReducer(state = {}, action) {
    switch(action.type){
        case ADD_ITEM:
            const itemsCopy = [...items]
            itemsCopy.push(item)
            return{...state, items: itemsCopy}

        default: state
    }
}