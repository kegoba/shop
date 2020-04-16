import React, { Component } from "react";
import { Link } from "react-router-dom";
import {Alert} from "reactstrap"
import {connect} from "react-redux"
import {URL} from "../asset/asset"
import axios from "axios";
import {Login_action} from "../reducer/Action"
import "./index.css";
//import Auth from "../Auth/auth";

const MapStateToProps = (state)=>({
  user : state.user
})
const MapDispatchToProps =(dispatch) =>({
  Login_action : (user)=>{
     dispatch(Login_action(user));
  }
})

class Login extends Component {
  constructor(props) {
    super(props);
    this.onchangeEmail = this.onchangeEmail.bind(this);
    this.onchangePassword = this.onchangePassword.bind(this);
    this.handlesubmit = this.handlesubmit.bind(this);

    this.state = {
      user: [],
      email: "",
      password: "",
      isLogin: false,
      error : false,
      message : "",
    };
  }

  onchangeEmail(event) {
    console.log(event.target.value);
    this.setState({email: event.target.value,});
  }
  onchangePassword(event) {
    console.log(event.target.value);
    this.setState({ password: event.target.value,});
  }

  handlesubmit = () => {
    const { email, password} = this.state
    if (email.length < 5 && password.length < 3){
      this.setState({error : true, message : "Please Enter A Valid Data"},()=>{
          window.setTimeout(()=>{
          this.setState({
          error : false
          })
        }, 3000)
      })
    } else {
    const postdata = {email: email, password: password, };
    axios.post( URL + "/login/", postdata)
        .then((resp) => {
          if (resp.status === 200){
            this.props.Login_action(resp.data);
            this.setState({user : resp.data})
            console.log(this.state.user)
            
            this.props.history.push("/cart")
        }
        else if ( resp.status === 300){
        this.setState({error: true, message: "InValid Data"}, () => {
            window.setTimeout(() => {
            this.setState({error: false})
          }, 3000)
        })} 
      })
      .catch( (err)=> {
        this.setState({ error: true,message: "Error While Trying To  Login"}, 
        () => {
          window.setTimeout(() => {
          this.setState({error: false})
        },3000)})
       // console.log(err);
      });
    }
  };


  render() {
    return (
      <div className="">
        <div className="container reg-login">
          <div className="row">
            <div className="col">
              <button type="submit" className="btn btn-info">
                <a href="/reg" className="reg-sm btn-info">
                  Register
                </a>
                <a href="/login" className="login-sm btn-info">
                  Login
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="login-form">
          <Alert isOpen={this.state.error} >{ this.state.message} </Alert>
          <div className="container ">
            <div className="row">
              <div className="col">
                <input
                  placeholder="E-mail"
                  type="text"
                  className=""
                  onChange={this.onchangeEmail}
                  value={this.state.email}
                />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col">
                <input
                  placeholder="Password"
                  type="password"
                  autoComplete="on"
                  onChange={this.onchangePassword}
                  value={this.state.password}
                />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col">
                <button
                  type="submit"
                  className="btn btn-info"
                  onClick={this.handlesubmit}
                >
                  Login
                </button>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col">
                <p className="registered">
                  Not registered? <Link to={"/reg"}> Register </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect( MapStateToProps, MapDispatchToProps)(Login)
