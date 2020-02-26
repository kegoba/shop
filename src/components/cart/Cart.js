import React, { Component } from "react"
import { RemoveItem} from "../reducer/Action"
import { connect } from "react-redux"

const MapStateToProps = (state)=>{
    console.log(state.addedItems)
    return{
        item: state.addedItems,
        cost: state.total_cost,
    }
}
const MapDispatchToProps =(dispatch)=>({
    RemoveItem : (id)=>{
        dispatch(RemoveItem(id))
    }  
})
class Cart extends Component {
    constructor() {
        super()
        this.RemoveCart = this.RemoveCart.bind(this)
        this.state = {
            cost : 0,
            items: [],
            exsit : false,
            balance : 2

        }
    }
   
    RemoveCart(id){
        this.props.RemoveItem(id)
    }
    handlePayment(item, cost){
        if(item){
            let balance = this.state.balance
            if (balance < cost){
                alert("insufficient Fund, kindly Fund Your Account")
            }
            
        } else{
            alert("No Item In The Cart") 
        }
     
    }
    render() {
       const items  = this.props.item;
       

        const cost = this.props.cost.toFixed(2)
        return (     
        <div>    
                <h3>  number of items  {items.length} </h3>
                <div className="container culture  animated swing">
                        <div className="row">
                        {items.map((item, key) =>
                            <div key={key} className="col">
                                <img src={item.name} />
                                <div className="container">
                                    <div className="row">
                                        <div className="col">
                                         <div className="text-primary"> N {item.price} </div>
                                        </div>
                                        <div className="col">
                                            <i className="btn btn-success" onClick={()=>this.RemoveCart(item.id, item.name, item.price)}> Remove cart </i>
                                           
                                        </div>
                                    </div>
                                    
                                </div>
                                
                            </div>
                            
                        )}
                    
                       
                        </div>
                        
               </div>
                <div className="constainer">
                    <h4 className="  "> Cost of {items.length}  Item (s) N{cost} </h4>
                </div>

               <div className="constainer">
                    <h4 className=" btn btn-primary  " onClick={()=>this.handlePayment (this.props.item, this.props.cost)} > ORDER ITEM  </h4>
               </div>
              
        </div>
        )
    }  
}

export default  connect(MapStateToProps, MapDispatchToProps)(Cart);
