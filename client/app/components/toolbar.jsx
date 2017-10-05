import React from "react";
import IconMenu from "material-ui/IconMenu";
import MoreVertIcon from "material-ui/svg-icons/navigation/more-vert";
import {
  grey400,
  darkBlack,
  lightBlack,
  blue300
} from "material-ui/styles/colors";
import { List, ListItem } from "material-ui/List";
import Avatar from "material-ui/Avatar";
import IconButton from "material-ui/IconButton";
import FontIcon from "material-ui/FontIcon";
import NavigationExpandMoreIcon from "material-ui/svg-icons/navigation/expand-more";
import SocialPeople from "material-ui/svg-icons/social/person-add";
import ActionAssignment from "material-ui/svg-icons/action/assignment";
import { Menu, MenuItem } from "material-ui/Menu";
import DropDownMenu from "material-ui/DropDownMenu";
import RaisedButton from "material-ui/RaisedButton";

import {
  Toolbar,
  ToolbarGroup,
  ToolbarSeparator,
  ToolbarTitle
} from "material-ui/Toolbar";
var { Link, IndexLink, browserHistory } = require("react-router");
import { AppBar, Drawer } from "material-ui";
import Store from "../store/UIstore";
import { observer } from "mobx-react";
import NavigationClose from "material-ui/svg-icons/navigation/close";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";

// const backgroundhover = {
//   backgroundColor: 'E8E8E8',
// }

const materialbackground = {
  backgroundImage: 'url("assets/images/materialpic.png")',
  width: "256px",
  height: "180px"
};
const style = {
  // backgroundColor: '#D0E9EA',
  backgroundColor: "$secondaryColor"
  // backgroundColor: '#dcf8c6',
};

const buttonMargin = {
  margin: 12
};
const leftmost = {
  marginLeft: 0
};
const avatar = {
  marginLeft: "auto",
  marginRight: "auto",
  display: "block"
};
const userRealName = {
  fontSize: "22px",
  textAlign: "center"
};
const wordwrap = {
  wordWrap: "breakWord",
  overflow: "hidden"
};

const savebtn = {
  bottom: "1px"
};
const pinstyle = {
  width: "22px",
  height: "22px",
  margin: "0 50px",
  display: "inline-block",
  transform: "rotate(330deg)"
};
const customContentStyle = {
  width: "30%",
  maxWidth: "none"
};
// var socket;
// const style = {
//   margin: 12,
//   marginRight: 20
// };
const paddingIcon = {
  paddingBottom: "48px"
};
// const iconButtonElement = (
//   <IconButton
//     style={paddingIcon}
//     touch={true}
//     tooltip="more"
//     tooltipPosition="bottom-left"
//   >
//     <MoreVertIcon color={darkBlack} />
//   </IconButton>
// );

const menuStyle = {
  height: "20px",
  width: "20px"
};
@observer
export default class ToolbarExamplesSimple extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 3,
      yum: true,
      open: false,
      openDialog: false,
      obj: {},
      yay: true
    };
  }
 

  render() {
   return (
<div><h1>Hello This is toolbar</h1></div>
    )
  }
}
