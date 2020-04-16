import {URL} from "../asset/asset"
import { ADD_TO_CART, REMOVE_ITEM ,BALANCE ,ADD_QTY, SUB_QTY, LOGIN, PAY}  from "./cart-actions"
import axios from "axios"

 const initial_state = {
    user:[],
    item:[],
    cart:[],
    number_of_items : 0,
    total_cost : 0,
    balance: 0,
    quatity : 0,
    product_quatity : 1 ,
    
}


export const GetProduct=(state)=>{
    axios.get(URL+"/getproduct/")
        .then((resp) => {
            state = resp.data
            initial_state.item = Object.assign(initial_state.item, state)
            return state
        })   
}


export const AppReducer = (state=initial_state, action)=>{
    if(action.type === ADD_TO_CART){
        console.log(state.user)
        let cartItem = state.item.find(item => item.product_id === action.product_id)
        //console.log(cartItem ,"cartiem")
        
        let item_exist = state.cart.find(item => item.product_id === action.product_id)

        if(item_exist){
            //alert("Item Exist In Your Cart")
            return {
                ...state 

            }
        }else{

            let new_cost = parseInt(state.total_cost) + parseInt(cartItem.product_price)
            let number_of_item = state.number_of_items + 1
            
            return{
                ...state , cart : [...state.cart , cartItem],
                total_cost : new_cost,
                number_of_items :number_of_item,
                
            }
        }
    }
    
    if (action.type === REMOVE_ITEM){
        let item_to_remove = state.cart.find(item => item.product_id === action.product_id)
        let item_exist = state.cart.filter(item => item.product_id !== action.product_id)
        let new_cost = (state.total_cost) - (item_to_remove.product_price) 
         let number_of_item = state.number_of_items -= 1
        
        
        return {
            ...state, 
            cart : item_exist,
            number_of_items : number_of_item,
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
    if (action.type === ADD_QTY){
        let cart =  state.cart.find(item => item.product_id === action.product_id)
        console.log(cart.product_price)
        let new_cost = parseInt( state.total_cost) + parseInt(cart.product_price)
       let quatity_to_remove  = state.quatity += 1
        let number_of_item = state.number_of_items += 1;
        let QTY = (state.product_quatity += 1);
       
       return {
           ...state, total_cost: new_cost, 
           quatity : quatity_to_remove,
           number_of_items : number_of_item,
           product_quatity : QTY,
       }
    } if (action.type === SUB_QTY) {
        let cart = state.cart.find(
          (item) => item.product_id === action.product_id);
        let new_cost = parseInt(state.total_cost) - parseInt(cart.product_price);
        let quatity_to_remove = (state.quatity -= 1);
         let number_of_item = state.number_of_items -= 1;
         let QTY = (state.product_quatity -= 1);
        return {
          ...state,
          total_cost: new_cost,
          quatity: quatity_to_remove,
          number_of_items : number_of_item,
          product_quatity : QTY
        };

       
      }
       if (action.type === LOGIN){
           let user_id = action.user.user_id;
            let email = action.user.email
          
           return {
               ...state, user : [...state.user],
               email : email, user_id : user_id
           }
       }
       if (action.type === PAY){
           let amount_to_credit = action.amount
           console.log(" amount_to_credit is :", amount_to_credit)
           return {
               ...state, amount_to_credit : amount_to_credit
           }
       }
       else {
        return state;
      }

}
    