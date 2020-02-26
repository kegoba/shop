import React, { Component } from "react"
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom'
//import CreatePost from "../createPost/createPost"
import Home from "../home/Home"
import Cart from "../cart/Cart"

class Menu extends Component {
    constructor() {
        super()
        this.handleLogout = this.handleLogout.bind(this)
        this.state = {
            user: [],
            isLogin : false,
            

        }

    }
    componentDidMount() {
        const data = JSON.parse(localStorage.getItem("user"))
        
    }
    
    handleLogout(e) {
        localStorage.removeItem("user")
        //this.props.history.push("/logout")

    }
    
    render() {
        //const user  = this.state.user.first_name
        return (

            <Router className="container text-center">
                <div className="menu">
                    <nav className="navbar navbar-expand-lg navbar-light ">
                        <Link className="navbar-brand" to={"/"}> Home  </Link>
                        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#dropDrown">
                            <span className="navbar-toggler-icon"> </span>
                        </button>
                        <div className="collapse navbar-collapse" id="dropDrown" >
                            
                              
                                <ul className="navbar-nav ">
                                
                                <li className="nav-item text-left">
                                    <Link to={"/men"} className="nav-link" > Men's-Wear</Link>
                                </li>
                                <li className="nav-item text-left">
                                    <Link to={"/women"} className="nav-link" > women's-Wear</Link>
                                </li>
                                <li className="nav-item text-left">
                                    <Link to={"/cart"} className="nav-link" > Cart</Link>
                                </li>
                                <li className="nav-item text-left">
                                    <Link to={"/wallet"} className="nav-link" > Wallet</Link>

                                </li>
                                </ul>
     
                               </div>
                         
                    </nav>
                    
                </div>
                <div className="name">
                    <div className="container">
                     
                    </div>
                </div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route  path="/cart" component={Cart} />
                
                    
                </Switch>

            </Router>



        )
    }
}

export default Menu;
