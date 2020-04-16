import React, { Component } from "react"
import {URL} from "../asset/asset"
import { RemoveItem, BALANCE, Add_qty, Sub_qty, Login_action} from "../reducer/Action"
import { connect } from "react-redux"
import {Alert }from "reactstrap"
//import Payment from "./Payment"
import axios from "axios"
const MapStateToProps = (state)=>{
    return{
        item: state.cart,
        cost: state.total_cost,
        number_of_item : state.number_of_items,
        product_quatity : state.product_quatity,
        email: state.email,
        user_id: state.user_id
        
    }
}
const MapDispatchToProps =(dispatch)=>({
    RemoveItem : (product_id)=>{
        dispatch(RemoveItem(product_id))
    },
    Add_qty : (product_id)=>{
        dispatch(Add_qty(product_id))
    },
    Sub_qty : (product_id) =>{
        dispatch(Sub_qty(product_id))
    }
})
class Cart extends Component {
    constructor() {
        super()
        this.RemoveCart = this.RemoveCart.bind(this)
        this.SubQTYCart = this.SubQTYCart.bind(this);
        this.AddQTYCart = this.AddQTYCart.bind(this);
        this.handleCheck = this.handleCheck.bind(this);
        this.state = {
            user : [],
            cost : 0,
            items: [],
            exsit : false,
            balance : 2,
            order : false,
            msg : ""

        }
    }
    componentDidMount(){
       const user = this.props.user
       this.setState({
           user : user
       })
       console.log("when user just enter cart page", this.state.user)
    }

   
    RemoveCart=(product_id)=>{
        this.props.RemoveItem(product_id)
    }
    AddQTYCart = (product_id) =>{
         this.props.Add_qty (product_id);

    }

    SubQTYCart = (product_id)=>{
        this.props.Sub_qty(product_id)
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

    handleCheck=()=>{
        let  item  = this.props.item
        let  cost = this.props.cost
        let  user_id = this.props.user_id
        console.log(user_id)
        if(!user_id){
            this.props.history.push("/login");

        }
        else{
           
            let data = JSON.stringify(item)
            const postdata = {order_item: data, total_price : cost }
            axios.post(URL + "/order/" + user_id + "/", postdata)
                .then((resp) => {
                    console.log(resp.data)
                    if (resp.status ===200){
                        this.setState({ order: true, msg : "Order  Successful"}, () => {
                            window.setTimeout(() => {
                                this.setState({
                                    order: false
                                })
                            }, 6000)
                        })
                    }else{
                        this.setState({ order: true}, () => {
                            window.setTimeout(() => {
                                this.setState({
                                    order: false, msg: "Order  Not Successful error"
                                })
                            }, 6000)
                        })
                    } 
                })
                .catch((error)=>{
                    this.setState({ order: true }, () => {
                        window.setTimeout(() => {
                            this.setState({
                                order: false, msg: "Order  Not Successful error"
                            })
                        }, 6000)
                    })
                   
                })
            //alert("Order successful")
        }
        

    }
    render() {
       const items  = this.props.item;
        let number_of_item = this.props.nu_of_item
        let QTY = this.props.product_quatity;
        const cost = this.props.cost.toFixed(2)
        return (  
               
        <div> 
            {!items.length ?
            (<div className="container no-item">
              <h2>  No Item In The Cart  </h2>
            </div> ):
                (
        <div>
                    
                    <div className="container cart  animated swing">
                        <h4 className="  btn-info" > Cost of {number_of_item}  Item (s) {"N" + cost}   </h4>
                                <Alert isOpen={this.state.order} >{this.state.msg} </Alert>
                        <div className="row">
                            {items.map((item, key) =>
                                <div key={key} className="col ">
                                    <span className="card  bg-light">
                                        <p className="card-title"> {item.product_desc} {QTY} </p>
                                        <span className="card-body-m"> 
                                        <img className="image  " src={URL + item.image}  alt={item.image} />
                                        </span>
                                        <span className="price card-footer" >
                                        <b className=" btn-info  ca"  onClick={() => this.RemoveCart(item.product_id)} >  <strong> - </strong>  </b>
                                        </span>
                                        <span className=" card-footer">  {"N" + item.product_price} </span> 
                                     </span>
                                </div>
                                
                            )}
                        </div>
                    </div>
                    <div className="constainer pay">
                        <div className="row">
                            <div className="col">
                                <h4 className="  btn-info" onClick={this.handleCheck}>  Check Out </h4>
                            </div>
                        </div>
                        </div>
         </div>
        )}        
    </div>
        )
    }  
}

export default  connect(MapStateToProps, MapDispatchToProps)(Cart);
