import React from "react";
var { Link, IndexLink } = require("react-router");
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import RaisedButton from "material-ui/RaisedButton";
import Login from "./login.jsx";
import Signup from "./signup.jsx";
import muiThemeable from "material-ui/styles/muiThemeable";
import { Scrollbars } from "react-custom-scrollbars";
import { greenA400 } from "material-ui/styles/colors";
import getMuiTheme from "material-ui/styles/getMuiTheme";

/**
 * Dialog with action buttons. The actions are passed in as an array of React objects,
 * in this example [FlatButtons](/#/components/flat-button).
 *
 * You can also close this dialog by clicking outside the dialog, or with the 'Esc' key.
 */
const styleimg = {
  width: "30%",
  height: "350px"
};
const scrollx = {
  overflowX: "hidden"
};
const style = {
  textAlign: "center",
  letterSpacing: "2px"
};

const aligncenter = {
  textAlign: "center",
  fontSize: "18px",
  wordSpacing: "0.5px"
};
const aligncentercollaborate = {
  textAlign: "center",
  wordSpacing: "0.5px"
};

const muiTheme = getMuiTheme({
  palette: {
    //   textColor: greenA400,
    primary1Color: greenA400
    //  primary3Color:greenA400,
    //   accent1Color: greenA400,
    //   accent2Color: greenA400,
    //   accent3Color: greenA400

    //this is for changing the theme
  }
});

export default class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };

    // this.openLogin = this.openLogin.bind(this);
  }

  componentDidMount() {
  }

  componentWillMount() {

  }


  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={scrollx}>
        </div>
      </MuiThemeProvider>
    );
  }
}
//  <RaisedButton onTouchTap={this.openLogin} />
