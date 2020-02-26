import React, { Component } from "react"
import {connect} from "react-redux"
import {  Link } from 'react-router-dom'
import {AddToCart} from "../reducer/Action"


const MapStateToProps =(state)=>{
    console.log(state, "this state")
    return {
        items : state.item
    }
    
}

const MapDispatchToProps= (dispatch)=>({
    
    AddToCart : (id)=>{
        dispatch(AddToCart(id))
        
    }

})

class Home extends Component {
    constructor() {
        super()
        this.handleToCart = this.handleToCart.bind(this)
        this.state = {
            item: [],
            exsit : false,
            message: "",
            msg : false

        }

    }
  

    componentDidMount(){
       // localStorage.removeItem("product")
       
    }

    handleToCart(id) {
    
     this.props.AddToCart(id)
     this.setState({
         message: "Item Added Successfully"
     })

       

    }

    render() {
       let message = this.state.message
       let item  = this.props.items;
       let exist = this.state.exsit;
        return (
        <div>    
                  <h1> products  </h1>
                <p className="alert-success"> {message} </p>
                <div className="container culture  animated swing">
                        <div className="row">
                        {item.map((item, key) =>
                            <div key={key} className="col">
                                <img src={item.name} />
                                <div className="container">
                                    <div className="row">
                                        <div className="col">
                                         <div className="text-primary"> N {item.price} </div>
                                        </div>
                                        <div className="col">
                                            <i className="btn btn-success" onClick={()=>this.handleToCart(item.id, item.name, item.price)}> Buy </i>
                                           
                                        </div>
                                    </div>
                                        
                                </div>
                                
                            </div>
                            
                        )}
                        {exist ?
                            (<p>  This Item Has Been Added To Cart</p>)
                            :
                            <p>  </p>}
                        </div>
                    
                

                       
                    
               </div>
              
        </div>



        )
    }  
}

export default  connect(MapStateToProps,MapDispatchToProps)(Home);
