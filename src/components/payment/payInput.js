import React ,{Component} from "react"
import {Link} from "react-router-dom"
import {connect} from "react-redux"
import { Make_payment } from "../reducer/Action" // ../reducer/Action";
import {Alert} from "reactstrap"


const MapStateToProps = (state)=>({
    email : state.email
})

const MapDispatchToProps = (dispatch)=>({
   Make_payment : (amount)=>{
        dispatch(Make_payment(amount))

    }
})
class PayInput extends Component{
    constructor(){
        super()
        this.state ={
            amount : "",
            msg : "" ,
            error : false,

        }
    }
    onchangeAmount = (e)=>{
        this.setState({
            amount : e.target.value
        })

        console.log(this.state.amount)
    }
    handlePay=(amount)=>{
        let email = this.props.email
        if (!email){
            this.props.history.push("/login")
        }else{
            if (amount < 100) {
                this.setState({ error: true }, () => {
                    window.setTimeout(() => {
                        this.setState({
                            error: false
                        })
                    },4000)

                })
            } else {

                this.props.Make_payment(amount)
                this.props.history.push("/payment")

            }


        }
        
        

    }
  
    render(){
        return(
        <div className="reg-login">
            <form>
                    <Alert color="info"  isOpen={this.state.error} > Invalid Amount</Alert>
                    <div className="container  ">
                        <div className="row">
                            <div className="col">
                                <input
                                    placeholder="Amount"
                                    type="text"
                                    className=""
                                    onChange={this.onchangeAmount}
                                    value={this.state.amount}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                 <p className="btn pay-1 btn-info"  onClick={()=>this.handlePay(this.state.amount)}>  Proceed >>>   </p>
                            
                            </div>
                        </div>
                    </div>   
            </form>
        </div>
        )}

}


export default connect(MapStateToProps, MapDispatchToProps) (PayInput);