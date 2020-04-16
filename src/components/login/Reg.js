import React, { Component } from "react";
import Axios from "axios";
import {URL} from "../asset/asset"
import {Alert} from "reactstrap"

class Reg extends Component {
  constructor() {
    super();
    this.onchangeName = this.onchangeName.bind(this);
    this.onchangeEmail = this.onchangeEmail.bind(this);
    this.onchangePassword = this.onchangePassword.bind(this);
    this.onchangePhone = this.onchangePhone.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      user : [],
      name: "",
      email: "",
      password: "",
      phone : "",
      error : false,
    };
  }
  onchangeName = (e) => {
    this.setState({
      name: e.target.value,
    });
  }
  onchangeEmail =(e) => {
    this.setState({
      email: e.target.value,
    });
    console.log(this.state.email)
  }
  onchangePassword =(e) => {
    this.setState({
      password: e.target.value,
    });
  }
   onchangePhone =(e) => {
    this.setState({
      phone: e.target.value,
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const {name, email, password, phone} = this.state
    if ((name.length >4) && (email.length> 4) && (password.length>4) && (phone.length>4)){
      const postdata = { name: name, email: email, password: password, phone: phone };
      Axios.post(URL + "/register/", postdata)
        .then((resp) => {
         // console.log("registration successful", resp.data)
        })
        .catch((err) => {
          console.log(err)
        })
    } else{
      console.log("invalid data")
      this.setState({ error: true }, () => {
        window.setTimeout(()=>{
          this.setState({
            error : false
          })
        },4000)
       })
    }   
  };
  render() {
    return (
      <div>
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
        <Alert isOpen={this.state.error}> Please Enter a Valid Data </Alert>
        <div className=" container login-form text-center">
          <div className="container">
            <div className="row">
              <div className="col">
                <input
                  placeholder="Full Name"
                  type="text"
                  onChange={this.onchangeName}
                  value={this.state.name}
                />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col">
                <input
                  placeholder="E-mail"
                  type="text"
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
                  placeholder="Phone"
                  type="text"
                  onChange={this.onchangePhone}
                  value={this.state.phone}
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
                  className="btn btn-primary"
                  onClick={this.handleSubmit}
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Reg;
