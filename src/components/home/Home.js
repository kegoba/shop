import React, { Component } from "react"
import {connect} from "react-redux"
import {  Link } from 'react-router-dom'
import {AddToCart} from "../reducer/Action"
import axios from "axios"
import {GetProduct} from "../reducer/ProductReducer"
import {URL} from "../asset/asset"
import {Alert} from "reactstrap"
import Gallary from "../gallary/Gallary"

const MapStateToProps =(state)=>{
    return {
        items : state.item
    }
    
}

const MapDispatchToProps= (dispatch)=>({
    
    AddToCart: (product_id)=>{
        dispatch(AddToCart(product_id))
        
    }

})

class Home extends Component {
    constructor() {
        super()
        this.handleToCart = this.handleToCart.bind(this)
        this.state = {
            items:[],
            men : [],
            women:[],
            message: "",
            show : false,

        }

    }

    componentDidMount(){
        GetProduct()
        axios.get(URL + "/getproduct/")
            .then((resp) => {
                let data = resp.data
                let women = data.filter(item => item.product_category === "WOMEN")
                let men = data.filter(item => item.product_category === "MEN")
                let a =women.slice( 1, 6)
                
               console.log("sliec data",a)
                this.setState({
                    items: data,
                    men : men,
                    women : women
                })
                 console.log(this.state.items )
                
            })

    }
  handleToCart = (product_id, name,price) => {
        console.log(product_id)
        this.props.AddToCart(product_id)
     this.setState({show: true}, ()=>{
     window.setTimeout(()=>{
         this.setState({ show : false})
     },2000)
    })
     }
    render() {
        let women = this.state.women
        let men =  this.state.men
        
        return (
          <div>
            <div>
              <div className="container gallary">
                <Gallary />
                
              </div>
              <p className="women text-right btn-info">
                <a href="/men"> Get All Men's Wear.... </a>
              </p>
              <div className="container animated swing">
                <Alert color="info" isOpen={this.state.show}>
                  Item Added To Cart
                </Alert>
                <div className="row">
                  {men.map((item, key) => (
                    <div key={key} className="col">
                      <span className="card card-body bg-light">
                        <img className="image " src={URL + item.image} alt={item.image}/>
                        <span
                          onClick={() => this.handleToCart(item.product_id)}
                          className=" addTocart  btn-info"
                        >
                          +
                        </span>
                        {"N" + item.product_price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <p className="women btn-info text-right">
                <a href="/women"> Get All Women's Wear......</a>
              </p>
              <div className="container   animated swing">
                <Alert color="info" isOpen={this.state.show}>
                  Item Added To Cart
                </Alert>
                <div className="row">
                  {women.map((item, key) => (
                    <div
                      key={key}
                      className="col"
                      onClick={() => this.handleToCart(item.product_id)}
                    >
                      <span className="card card-body">
                        <img className="image " src={URL + item.image} alt={item.image} />
                        <span
                          onClick={() => this.handleToCart(item.product_id)}
                          className=" addTocart  btn-info"
                        >
                          +
                        </span>
                        {"N" + item.product_price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
    }  
}

export default  connect(MapStateToProps,MapDispatchToProps)(Home);
