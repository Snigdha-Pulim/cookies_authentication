import React from "react";
class Login extends React.Component {
  constructor(props) {
    super(props);
    var p=0;
    this.state = {
        Username: "",
        password: "",
        error1:false,
        error2:false,
        error3:false,
        error4:undefined

    };
  }

  username_value = even => {
    this.setState({ Username: even.target.value });
  };
  password_value= even=>{
    this.setState({ password: even.target.value });
  }

  check_function1=()=>{
      if(this.state.Username===""){
          this.setState({
              error1:true
          })
      }
      else if(this.state.password===""){
        this.setState({
            error2:true
        })
      }
      else{
          this.check_function2()
      }
    }
    check_function2=()=>{
            this.setState({
              error1: false,
              error2: false
            });
        if (this.state.Username==="username") {
            this.setState({
                error4:false
            })
          if (this.state.password==="password") {
            this.props.return()
            this.setState({
              error3: false
            });
          }
          else
          {
              this.setState({
                  error3:true
              })
          }
        }
      else{
        this.setState({
          error4:true
      })
      }
  }

  enter_for_username=(e)=>{
      if(e.key==='Enter')
      {
          this.check_function1();
      }
  }

  enter_for_password=(e)=>{
    if(e.key==='Enter')
    {
        this.check_function1();
    }
}
  render() {
    return (
      <div>
        <div className="container">
          <div className="row" id="row_style">
            <h4 className="text-center col-sm-12">LogIn here</h4>
            <div className="col-md-3   col-md-offset-4" />
            <div className="col-md-6   col-md-offset-4">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  value={this.state.Username}
                  onChange={this.username_value}
                  placeholder="Username"
                  onKeyDown={this.enter_for_username}
                />
              </div>
              <input
                type="password"
                className="form-control"
                value={this.state.password}
                onChange={this.password_value}
                placeholder="password"
                onKeyDown={this.enter_for_password}
              />
              {this.state.error1?<div className="small text-danger">username is not entered</div>:""}
              {this.state.error2?<div className="small text-danger">password is not entered</div>:""}
              {this.state.error3?<div className="small text-danger">wrong password</div>:""}
              {this.state.error4?<div className="small text-danger">Invalid username</div>:""}
              <br />
              <div className="form-group">
                <button
                  className="btn btn-primary display-block"
                  onClick={this.check_function1}
                >
                  LogIn
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;