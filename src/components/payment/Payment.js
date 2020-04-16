import React, { Component } from "react"
import { Balance} from "../reducer/Action"
import PaystackButton from 'react-paystack'
import { BALANCE } from "../reducer/cart-actions"
import {connect} from "react-redux"
import {URL, KEY} from "../asset/asset"
import axios from "axios"

const MapstateToProps =(state) =>{
    return {
       // user: state.user,
        cost: state.amount_to_credit,
        email : state.email,
        user_id: state.user_id
    }

}

const MapDispatchToProps =(dispatch) =>{
    return{
        Balance : (email)=>{dispatch(BALANCE)}
    }


}


class Payment extends Component {
    constructor(){
        super()
        this.state= {
            email: "",
            user_id :"",
            amount: 0,
          

    }

   }
        componentDidMount() {
      this.setState({
          email  :  this.props.email,
          user_id: this.props.user_id,
          amount : this.props.cost * 100
      }, ()=>{
          console.log("payment" ,this.state.email, this.state.user_id)
      })
       

    }
    callback = (resp) => {
        console.log(resp," payment made successfully");
        if (resp.status === "Success"){
            console.log(resp.data)
            const data={wallet : this.state.amount}
           axios.post(URL+ "/updateuser/" + this.state.user_id + "/", data)
           .then((resp), ()=>{
               console.log("update sucessful")
           })
           .catch((error)=>{
               console.log(error)
           })
        }


    }
      

    close = () => {
        console.log("Payment closed" );
    }

    getReference = () => {
        //you can put any unique reference implementation code here
        let text = "";
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-.=";

        for (let i = 0; i < 15; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }

    render() {
        
       
        return (
            <div className="payment">
                <div className="row">
                    <div className="col">
                    <PaystackButton
                        text="Make Payment"
                        class="payButton"
                        close = {this.close}
                        callback={this.callback}
                        disabled={true} 
                        embed={true} 
                        reference={this.getReference()}
                        email={this.state.email}
                        amount={this.state.amount}
                        paystackkey={KEY}
                        tag="button"
                    />
                </div>
                </div>
            </div>
        );
    }
}

export default  connect(MapstateToProps, MapDispatchToProps) (Payment)