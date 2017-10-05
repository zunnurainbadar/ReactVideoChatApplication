import React from "react";
import Drawer from "material-ui/Drawer";
import MenuItem from "material-ui/MenuItem";
import RaisedButton from "material-ui/RaisedButton";
import muiThemeable from "material-ui/styles/muiThemeable";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import IconButton from "material-ui/IconButton";
import IconMenu from "material-ui/IconMenu";
import Store from "../store/UIstore.js";
import { observer } from "mobx-react";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import { cyan500 } from "material-ui/styles/colors";
import { greenA400 } from "material-ui/styles/colors";

import { browserHistory } from "react-router";

// import Store from "app/store/UIstore.js";
const tableDisplay = {
  display: "table"
};
import { Card, CardHeader, CardTitle, CardText } from "material-ui/Card";
const muiTheme = getMuiTheme({
  palette: {
    //   textColor: greenA400,
    primary1Color: greenA400
    //  primary3Color:greenA400,
    //   accent1Color: greenA400,
    //   accent2Color: greenA400,
    //   accent3Color: greenA400

    //this is for changing the theme
  },
  toggle: {
    thumbOnColor: "yellow",
    trackOnColor: "red",
    backgroundColor: "red"
  },
  appBar: {
    height: 50
  }
});

const style = {
  height: "100%"
};
const style2 = {
  margin: 12
};

const header = {
  textAlign: "center"
};

// @observer
export default class NotFound extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick = () => {
  };

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <br />
          <div className="row fullwidth">
            <div className="columns medium-12 large-12">
              <Card>
                <CardTitle title="404 Error" />
                <CardText>
                  <h2>
                    {" "}Oops… looks like something went wrong! This page does<br />
                    not exist or has been moved.
                  </h2>
                </CardText>
              </Card>
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}
