import React, { Component } from "react";
import '../styles/home-page.css'
import AuthService from "../services/auth.service";
import { Switch, Route, Link } from "react-router-dom";
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: AuthService.getCurrentUser()
    };
  }

  render() {
    return (
      <div className="container">
        <header className="jumbotron">
          <h2>Welcome to our post service!</h2>
<br/>
            <p>
              To send an email <Link to={"/register"}>Signup</Link> or <Link to={"/login"}>Login</Link>
            </p>

        </header>
      </div>
    );
  }
}