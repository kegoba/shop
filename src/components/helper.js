const AppReducer = (state = initial_state, action) => {
    if (action.type === ADD_TO_CART) {
        const items = state.item.find(item => item.id === action.id)
        const cartItem = state.addedItems.find(item => item.id === action.id)
        console.log(cartItem)
        if (cartItem) {
            return {
                ...state
            }
        } else {
            let new_cost = parseInt(state.total_cost) + parseInt(items.price)
            return {


                ...state, addedItems: [...state.addedItems, items],
                total_cost: new_cost
            }
        }


    } else {return state}

}

