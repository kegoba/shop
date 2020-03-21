
import { ADD_TO_CART, REMOVE_ITEM, BALANCE} from './cart-actions'

 export const AddToCart = (id)=>{
    return{
        type : ADD_TO_CART,
        id  
    }
}




export const RemoveItem = (id)=>({
type : REMOVE_ITEM,
id

})



export const Balance =  (email)=>({
    type : BALANCE ,
    email
})


