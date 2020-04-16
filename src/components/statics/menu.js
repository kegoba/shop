import React, { Component } from "react"
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom'
import Login from  "../login/Login"
import Reg from "../login/Reg";
import Home from "../home/Home"
import Cart from "../cart/Cart"
import Payment from "../payment/Payment"
import PayInput from "../payment/payInput"
import Addproduct from "../cart/addproduct"
import Men from "../Category/men"
import Women from "../Category/women"

const Call =(callback)=>{
    console.log(callback)//Transaction declined. Please use the test card.
    return(
        <div>
            <p className="alert alert-success"> {callback} </p>

        </div>
    )

}

class Menu extends Component {
    constructor() {
        super()
        this.state = {
            user: [],
            isLogin : false,
            

        }

    }
    
    render() {
        //const user  = this.state.user.first_name
        return (
          <Router className="container text-center">
            <div className="menu">
              <nav className="navbar fixed-top menu navbar-expand-lg navbar-light ">
                <Link className="navbar-brand" to={"/"}> Home</Link>
                <button
                  type="button"
                  className="navbar-toggler"
                  data-toggle="collapse"
                  data-target="#dropDrown"
                >
                  <span className="navbar-toggler-icon"> </span>
                </button>
                <div className="collapse navbar-collapse" id="dropDrown">
                  <ul className="navbar-nav ">
                    <li className="nav-item text-left">
                      <Link to={"/cart"} className="nav-link">
                        Cart
                      </Link>
                    </li>
                    <li className="nav-item text-left">
                      <Link to={"/women"} className="nav-link">
                        Women' Wear
                      </Link>
                    </li>
                    <li className="nav-item text-left">
                      <Link to={"/men"} className="nav-link">
                        Men's Wear
                      </Link>
                    </li>
                    <li className="nav-item text-left">
                      <Link to={"/pay"} className="nav-link">
                        Fund Your Wallet
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
            <div className="name">
              <div className="container"></div>
            </div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/cart" component={Cart} />
              <Route path="/payment" component={Payment} />
              <Route path="/pay" component={PayInput} />
              <Route path="/callback" component={Call} />
              <Route path="/product" component={Addproduct} />
              <Route path="/men" component={Men} />
              <Route path="/women" component={Women} />
              <Route path="/login" component={Login} />
              <Route path="/reg" component={Reg} />
            </Switch>
          </Router>
        );
    }
}

export default Menu;
