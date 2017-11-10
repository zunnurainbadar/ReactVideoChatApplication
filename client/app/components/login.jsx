import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { browserHistory } from "react-router";

import getMuiTheme from "material-ui/styles/getMuiTheme";
import { cyan500 } from "material-ui/styles/colors";
import { greenA400 } from "material-ui/styles/colors";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import userstore from '../store/UserStore';
import UIstore from '../store/UIstore';
import AlertContainer from 'react-alert'
import {observable} from 'mobx';
import {observer} from 'mobx-react';
const style = {
 width: '100%',
  display:"block",
  margin:"2%",
};


const muiTheme = getMuiTheme({
  palette: {

  }
});
@observer
export default class Login extends React.Component {

  constructor(props)
  {
    super(props);
    this.state = {
   
    };    
  }

  alertOptions = {
    offset: 14,
    position: 'bottom left',
    theme: 'dark',
    time: 5000,
    transition: 'scale'
  }
 
  showAlertWrong = () => {
    this.msg.error('Username or Password is invalid',{
      time: 2000,
    })
  }
  showAlertEmailEmpty = () => {
    this.msg.error('Email is Empty',{
      time: 2000,
    })
  }
  showAlertPasswordEmpty = () => {
    this.msg.error('Password is Empty',{
      time: 2000,
    })
  }
  btnLogin = (e) => {
    e.preventDefault();
    if(this.refs.email.value == "" ||this.refs.password.value == "")
    {
      if(this.refs.email.value == ""){
        this.showAlertEmailEmpty(); 
      }
      if(this.refs.password.value == ""){
        this.showAlertPasswordEmpty(); 
      }
    }else{

    // this.showAlert();
    var data = {email:this.refs.email.value,password:this.refs.password.value}
    console.log("This is handleOpen ");
     $.ajax({
      type: "POST",
      url: "/api/allUsers/login",
      data: data
    })
      .done(function(data) {

        console.log("asdsadasdsad",data);
        if(data== "undefined" || data=="null"|| data==""){
       browserHistory.push("/login");
      }
      else{
        userstore.user = data;
        console.log("data",data);
        localStorage.setItem("userInfo", JSON.stringify(data));
       browserHistory.push("/");
      }
      })
      .fail(function(jqXhr) {
        console.log("failed to register POST REQ",jqXhr);
        UIstore.alert = true;
        UIstore.alert = false;
        // browserHistory.push("/login");

      });
    }

  };  


  render() {
if(UIstore.alert == true){
this.showAlertWrong();
}
    const sty =
    {
      marginTop: "10%",    
    }
    return <MuiThemeProvider muiTheme={muiTheme}>
        <div className="container" style={sty}>
          <form onSubmit={this.btnLogin.bind(this)}>
            <div className="login-box">
              <div className="login-logo">
                <center>
                  <h2 ui-sref="messenger">Messenger</h2>
                </center>
              </div>
              <div className="login-box-body">
                <center>
                  <p className="login-box-msg">
                    Sign in to start your session
                  </p>
                </center>
                <div className="col-md-4 col-md-offset-4">
                  <div className="form-group has-feedback">
                    <input name="email" type="email" className="form-control" placeholder="Email" ref="email" />
                    <span className="glyphicon glyphicon-envelope form-control-feedback" />
                  </div>
                  <div className="form-group has-feedback">
                    <input name="password" type="password" className="form-control" placeholder="Password" ref="password" />
                    <span className="glyphicon glyphicon-lock form-control-feedback" />
                  </div>
                  <div className="row">
                    <div className="col-xs-8">
                      <a href="/signup">SignUp</a>
                    </div>
                    <div className="col-xs-4">
                      <button type="submit" className="btn btn-primary btn-block btn-flat">
                        Sign In
                      </button>
                    </div>
                  </div>
                  <AlertContainer ref={a => (this.msg = a)} {...this.alertOptions} />
                </div>
              </div>
            </div>
          </form>
        </div>
      </MuiThemeProvider>;
  }
}
 