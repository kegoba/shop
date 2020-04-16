import React, { Component } from "react"
import axios from "axios"
import { URL } from "../asset/asset"
import { AddToCart } from "../reducer/Action"
import { connect } from "react-redux"
import { GetProduct } from "../reducer/ProductReducer"
import {Alert} from "reactstrap"



const MapStateToProps = (state) => {
    return state
}

const MapDispatchToProps = (dispatch) => ({
    AddToCart: (product_id) => {
        dispatch(AddToCart(product_id))

    }

})


class Women extends Component {
    constructor() {
        super()
        this.state = {
            women: [],
            show: "",


        }
    }

    componentDidMount() {
        GetProduct()
        axios.get(URL + "/women/")
            .then((resp) => {
                console.log(resp.data)
                this.setState({
                    women: resp.data
                })
              
            })
    }
    handleToCart(product_id) {
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
        return (
          <div>
            <p className="women"> Women's Wear </p>
            <div className="container culture  ">
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
                      <img
                        className="image "
                        src={URL + item.image}
                        alt={item.image}
                      />
                      <span className=" addTocart  btn-info"> + </span>
                      {"N" + item.product_price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
    }

}


export default connect(MapStateToProps, MapDispatchToProps)(Women)