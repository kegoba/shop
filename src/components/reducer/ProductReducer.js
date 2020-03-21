import polo4 from "./image/polo4.jpg"
import polo1 from "./image/polo1.jpg"
import polo2 from "./image/polo2.jpg"
import polo3 from "./image/polo3.jpg"
import polo7 from "./image/polo7.jpg"
import polo5 from "./image/polo5.jpg"
import polo6 from "./image/polo6.jpg"
import women1 from "./image/women1.jpg"
import women2 from "./image/women2.jpg"
import women3 from "./image/women3.jpg"
import women4 from "./image/women4.jpg"
import women5 from "./image/women5.jpg"
import women6 from "./image/women6.jpg"
import shoe1 from "./image/shoe1.jpg"
import shoe2 from "./image/shoe2.jpg"
import shoe3 from "./image/shoe3.jpg"
import shoe4 from "./image/shoe4.jpg"
import shoe5 from "./image/shoe5.jpg"
import shoe6 from "./image/shoe6.jpg"


import { ADD_TO_CART, REMOVE_ITEM , BALANCE} from "./cart-actions"

 const initial_state = {
    item :[
        {id :1,  name: polo1,  price: 5100 , cat:"men"},
        { id: 2, name: polo2, price: 4500, cat: "men" },
        { id: 3, name: polo3, price: 8550 , cat: "men"},
        { id: 4, name: polo4, price: 3050, cat: "men" },
        { id: 5, name: polo5, price: 8100, cat: "men" },
        { id: 6, name: polo6, price: 3150, cat: "men" },
        { id: 8, name: shoe1, price: 4050, cat: "men" },
        { id: 9, name: shoe2, price: 4050, cat: "men" },
        { id: 10, name: shoe3, price: 4050, cat: "men" },
        { id: 11, name: shoe4, price: 4050, cat: "men" },
        { id: 12, name: shoe5, price: 4050, cat: "men" },
        { id: 13, name: shoe6, price: 4050, cat: "men" },
        { id: 14, name: women1, price: 5100, cat: "women" },
        { id: 15, name: women2, price: 5110, cat: "women" },
        { id: 16, name: women3, price: 5150, cat: "women" },
        { id: 17, name: women4, price: 5100, cat: "women" },
        { id: 18, name: women5, price: 4500, cat: "women" },
        { id: 19, name: women6, price: 5110, cat: "women" },
    ],
    addedItems:[],
    number_of_items : 0,
    total_cost : 0,
    email: "egobakelvin@gmail.com",
    balance: 0,
}

const AppReducer = (state = initial_state, action)=>{
    if(action.type === ADD_TO_CART){
        let cartItem = state.item.find(item => item.id === action.id)
        let item_exist = state.addedItems.find(item => item.id === action.id)
        if(item_exist){
            alert("Item Exist In Your Cart")
            return {
                ...state 
            }
        }else{
            let new_cost = parseInt(state.total_cost) + parseInt(cartItem.price)
            return{
                ...state , addedItems : [...state.addedItems , cartItem],
                total_cost : new_cost
            }
        }
    }
    
    if (action.type === REMOVE_ITEM){
        let item_to_remove = state.addedItems.find(item  => item.id === action.id)
        let item_exist = state.addedItems.filter(item => item.id !== action.id)
        console.log("remaining item", item_exist)
        let new_cost = (state.total_cost) - (item_to_remove.price) 
        
        return {
            ...state, 
            addedItems : item_exist,
            total_cost : new_cost,
           
        }
        
    
    }
    if (action.type === BALANCE){
        const user = state.user.filter(user => user.email === action.email )
        if(user){
            const balance = state.user.balance + user.balance
            console.log(balance)

        return {
                ...state, balance: balance
            }

        }
        
    }

    else {
        return state
     }
}
    



 //console.log(initial_state.added_items)
export default AppReducer