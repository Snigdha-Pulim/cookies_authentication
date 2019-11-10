import React from 'react';
import './App.css';
import Login from './login';
import Navbar from'./navbar';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import { Redirect } from 'react-router'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      logged_in:false,
      to_index:false
    }

  }

  return_from_logout=()=>{
    this.setState({
      to_index:true,
      logged_in:false
    })
    localStorage.clear();
  }

  return_from_login=()=>{
    this.setState({
      logged_in:true
    })
    localStorage.setItem("username","username");
  }
  Index =()=>{
    
    return<div>
    <div className="container">
      <div className="row mb-2" id="row_style">
        <h4 className="text-center col-sm-12"></h4>
        <div className="col-md-5   " />
        
          <div className="col-md-1">
              <Link to="/login" ><button
              className="btn btn-primary display-block"
            >Login</button></Link>
          </div>
          <div className="col-md-1">
              <Link to="/Home"><button
              className="btn btn-primary display-block"
            >Home
            </button></Link>
            </div>
        </div>
        <div className="col-md-5  "/>
     
    </div>
    </div>
  };

  Login =()=>{
    if(localStorage.getItem("length")>=1)
    {
      this.setState({
        logged_in:true
      })
      console.log(this.state.logged_in)
    }
    return(
    <div>
      <Login return={this.return_from_login}/>
    </div>
      );
  };

  Home =()=>{
    if(localStorage.getItem("length")>=1)
    {
      this.setState({
        logged_in:true
      })
      console.log(this.state.logged_in)
    }
    return <div>
    {this.state.logged_in?<div>
      <Navbar logout={this.return_from_logout}/><div class="centered"><h1>you are logged in!</h1></div>
    </div>:<Redirect to="/login"/>}
    </div>;
  };

  componentDidMount() {
    if(localStorage.getItem("username")==="username")
    {
      this.setState({
        logged_in:true
      })
      console.log(this.state.logged_in)
    }
}

  render() {
    return (
      <Router> 
  <Route path ="/username" component={this.Home}/>
  <Route path="/" exact component={this.Index} />
  <Route path="/login" component={this.Login} />
  <Route path="/Home" component={this.Home} />
  {this.state.logged_in?<Redirect to="/username" />:<div></div>}
  {this.state.to_index?<Redirect to="/" />:<div></div>}
      </Router>
    );
  }

}

export default App;