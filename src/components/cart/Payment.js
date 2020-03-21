import React, { Component } from "react"
import { Balance} from "../reducer/Action"
import PaystackButton from 'react-paystack'
import { BALANCE } from "../reducer/cart-actions"
import {connect} from "react-redux"

const MapstateToProps =(state) =>{
    console.log()
    return {
        balance: state.balance,
        cost : state.total_cost,
        email : state.email,
    }

}

const MapDispatchToProps =(dispatch) =>{
    return{
        Balance : (email)=>{dispatch(BALANCE)}
    }


}


class Payment extends Component {

    state = {
        key: "pk_test_204cf2fadfce622574c2cc420051688ea10b12fa", 
        email: "",
        amount: 0,
    }

    callback = (response) => {
        console.log(response," payment made successfully");
        if (response.status === "Success"){
            this.setState({


            })
        }


    }
      

    close = () => {
        console.log("Payment closed");
    }

    getReference = () => {
        //you can put any unique reference implementation code here
        let text = "";
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-.=";

        for (let i = 0; i < 15; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }

    componentDidMount(){
        const { balance, cost, email } = this.props
        console.log(cost, "balance")
        const amount = (parseInt(cost)* 100) 
        this.setState({
            balance : balance,
            email : email,
            amount : amount

        })

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
                        paystackkey={this.state.key}
                        tag="btn"
                    />
                </div>
                </div>
            </div>
        );
    }
}

export default  connect(MapstateToProps, MapDispatchToProps) (Payment)