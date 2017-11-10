import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import getMuiTheme from "material-ui/styles/getMuiTheme";
import { cyan500 } from "material-ui/styles/colors";
import { greenA400 } from "material-ui/styles/colors";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AlertContainer from 'react-alert'
import {observable} from 'mobx';
import {observer} from 'mobx-react';
import UIstore from '../store/UIstore';
import { browserHistory } from "react-router";


const muiTheme = getMuiTheme({
  palette: {
    primary1Color: greenA400
   }
});

@observer
export default class Signup extends React.Component {
  
  constructor(props)
  {
    super(props);
    
  }
  state = {
    open: false,
  };

  handleOpen = () => {
  };

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
  showAlertUsernameEmpty = () => {
    this.msg.error('Username is Empty',{
      time: 2000,
    })
  }
  showAlertfullnameEmpty = () => {
    this.msg.error('Name is Empty',{
      time: 2000,
    })
  }
  showAlertWrong = () => {
    this.msg.error('Something is not valid kindly try again',{
      time: 2000,
    })
  }
  btnSignup = (e) => {
    e.preventDefault();
    if(this.refs.email.value == "" ||this.refs.password.value == "")
    {
      if(this.refs.email.value == ""){
        this.showAlertEmailEmpty(); 
      }
      if(this.refs.password.value == ""){
        this.showAlertPasswordEmpty(); 
      }
      if(this.refs.fullname.value == ""){
        this.showAlertfullnameEmpty(); 
      }
      if(this.refs.username.value == ""){
        this.showAlertUsernameEmpty(); 
      }
    }else{

    // this.showAlert();
    var data = {email:this.refs.email.value,password:this.refs.password.value,fullname:this.refs.fullname.value,username:this.refs.username.value}
    console.log("This is handleOpen ");
     $.ajax({
      type: "POST",
      url: "/api/allUsers",
      data: data
    })
      .done(function(data) {

        console.log("asdsadasdsad",data);
        if(data== "undefined" || data=="null"|| data==""){
       browserHistory.push("/signup");
      }
      else{
        userstore.user = data;
    //     console.log("data",data);
        localStorage.setItem("userInfo", JSON.stringify(data));
       browserHistory.push("/");
      }
      })
      .fail(function(jqXhr) {
        console.log("failed to register POST REQ",jqXhr);
        UIstore.alertSignup = true;
        UIstore.alertSignup = false;
        // browserHistory.push("/login");

      });
    }

  };  
  render() {
    if(UIstore.alertSignup == true){
        this.showAlertWrong();
        }
    const sty =
    {
      marginTop: "10%",    
    }

    return <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <form onSubmit={this.btnSignup.bind(this)}>
            <div className="login-box" style={sty}>
              <div className="login-logo">
                <center>
                  <h2 ui-sref="messenger">Messenger</h2>
                </center>
              </div>
              <div className="login-box-body">
                <center>
                  <p className="login-box-msg">
                    Sign up to start your session
                  </p>{' '}
                </center>
                <div className="col-md-4 col-md-offset-4">
                  <div className="form-group has-feedback">
                    <input type="text" className="form-control" name="fullname" placeholder="Full Name" ref="fullname" />
                    <span className="glyphicon glyphicon-user form-control-feedback" />
                  </div>
                  <div className="form-group has-feedback">
                    <input type="text" name="username" className="form-control" placeholder="username" ref="username" />
                    <span className="glyphicon glyphicon-user form-control-feedback" />
                  </div>
                  <div className="form-group has-feedback">
                    <input type="email" name="email" className="form-control" placeholder="Email" ref="email" />
                    <span className="glyphicon glyphicon-envelope form-control-feedback" />
                  </div>
                  <div className="form-group has-feedback">
                    <input type="password" name="password" className="form-control" placeholder="Password" ref="password" />
                    <span className="glyphicon glyphicon-lock form-control-feedback" />
                  </div>
                  <div className="row">
                    <div className="col-xs-8" />
                    <div className="col-xs-4">
                      <button type="submit" className="btn btn-primary btn-block btn-flat">
                        Sign Up
                      </button>
                    </div>
                  </div>
                </div>
                <AlertContainer ref={a => (this.msg = a)} {...this.alertOptions} />
              </div>
            </div>
          </form>
        </div>
      </MuiThemeProvider>;
      // labelColor="white" backgroundColor="#00E676"
  }
}
        // <RaisedButton label={this.props.title} style={sty} primary={true}   onTouchTap={this.handleOpen} />       
