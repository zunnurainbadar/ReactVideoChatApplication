import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

import getMuiTheme from "material-ui/styles/getMuiTheme";
import { cyan500 } from "material-ui/styles/colors";
import { greenA400 } from "material-ui/styles/colors";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
const style = {
 width: '100%',
  display:"block",
  margin:"2%",
};
    const modalstyle ={
      width:"75%",
      textAlign:"center",
      paddingLeft:"20%"
        }
        const stylefacebook = {
   width: '100%',
  display:"block",
  margin:"2%",
backgroundColor:"#5499C7",
color:"white"
};
const stylegmail = {
   width: '100%',
  display:"block",
  margin:"2%",
backgroundColor:"#E74C3C",
color:"white"
};

const muiTheme = getMuiTheme({
  palette: {

  }
});

/**
 * Dialog with action buttons. The actions are passed in as an array of React objects,
 * in this example [FlatButtons](/#/components/flat-button).
 *
 * You can also close this dialog by clicking outside the dialog, or with the 'Esc' key.
 */
export default class Login extends React.Component {

  constructor(props)
  {
    super(props);
    
  }
  state = {
  };

  handleOpen = () => {
  };  


  render() {

    const sty =
    {
      marginTop: "10%",    
    }

    return (
          <MuiThemeProvider muiTheme={muiTheme}>
      <div className="container" style={sty}>

          <div className="login-box">
    <div className="login-logo">
       <center><h2 ui-sref="messenger">Messenger</h2></center>
    </div>
    <div className="login-box-body">
       <center><p className="login-box-msg">Sign in to start your session</p></center>
        <div className="col-md-4 col-md-offset-4">
        <form method="post" action="/api/allUsers/login">
            <div className="form-group has-feedback">
                <input name="email" type="email" className="form-control" placeholder="Email"/>
                <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
            </div>
            <div className="form-group has-feedback">
                <input  name="password" type="password" className="form-control" placeholder="Password"/>
                <span className="glyphicon glyphicon-lock form-control-feedback"></span>
            </div>
            <div className="row">
                <div className="col-xs-8">
                    <a href="/signup">SignUp</a>
                </div>
                <div className="col-xs-4">
                    <button type="submit" className="btn btn-primary btn-block btn-flat">Sign In</button>
                </div>
            </div>
    </form>
    </div>


</div>
</div>
      </div>
</MuiThemeProvider>
    );
  }
}
 