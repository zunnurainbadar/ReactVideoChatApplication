import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import getMuiTheme from "material-ui/styles/getMuiTheme";
import { cyan500 } from "material-ui/styles/colors";
import { greenA400 } from "material-ui/styles/colors";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";


const muiTheme = getMuiTheme({
  palette: {
    primary1Color: greenA400
   }
});


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

  render() {

    const sty =
    {
      marginTop: "10%",    
    }

    return (
          <MuiThemeProvider muiTheme={muiTheme}>

      <div>
          <div className="login-box" style={sty}>
  <div className="login-logo">
   <center><h2 ui-sref="messenger">Messenger</h2></center>
    </div>
    <div className="login-box-body">
          <center><p className="login-box-msg">Sign up to start your session</p> </center>
        <div className="col-md-4 col-md-offset-4">
        <form  method="post" action="/api/allUsers">
            <div className="form-group has-feedback">
                <input  type="text" className="form-control" name="fullname" placeholder="Full Name"/>
                <span className="glyphicon glyphicon-user form-control-feedback"></span>
            </div>
            <div className="form-group has-feedback">
                <input  type="text" name="username" className="form-control" placeholder="username"/>
                <span className="glyphicon glyphicon-user form-control-feedback"></span>
            </div>
            <div className="form-group has-feedback">
                <input  type="email" name="email" className="form-control" placeholder="Email"/>
                <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
            </div>
            <div className="form-group has-feedback">
                <input  type="password" name="password" className="form-control" placeholder="Password"/>
                <span className="glyphicon glyphicon-lock form-control-feedback"></span>
            </div>
            <div className="row">
                <div className="col-xs-8">
                </div>
                <div className="col-xs-4">
                    <button type="submit" className="btn btn-primary btn-block btn-flat">Sign Up</button>
                </div>
            </div>
        </form>
</div>

    </div>
</div>

      </div>
</MuiThemeProvider>
// labelColor="white" backgroundColor="#00E676"
    );
  }
}
        // <RaisedButton label={this.props.title} style={sty} primary={true}   onTouchTap={this.handleOpen} />       
