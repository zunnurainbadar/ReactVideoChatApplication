import React from "react";
import { observer } from "mobx-react";
import Store from "../store/UIstore.js";
import UserStore from "../store/UserStore";
import ChatStore from "../store/ChatStore";
import SimpleWebRTC from "../../node_modules/simplewebrtc/out/simplewebrtc.bundle"
import IconButton from "material-ui/IconButton";
import ContentAdd from "material-ui/svg-icons/content/add";
import getMuiTheme from "material-ui/styles/getMuiTheme";
// import { cyan500 } from "material-ui/styles/colors";
// import { greenA400 } from "material-ui/styles/colors";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Drawer from 'material-ui/Drawer';
import {MenuItem} from 'material-ui';

const muiTheme = getMuiTheme({
  palette: {},
});
const buttonStyle = {

}
@observer
export default class Buttons extends React.Component {
  constructor() {
    super();
    this.state = {open: false}
  }
  componentWillMount () {
    userstore.user =JSON.parse(localStorage.getItem("userInfo"));    
  }
  componentDidMount() {
  }
  render() {
    return (
       <MuiThemeProvider muiTheme={muiTheme}>
       <div style={buttonStyle}>
      <div>
           <button>Home</button>
           <button>Call</button>
           <button>New</button>
        </div>
        <div>
            <button>Contacts</button>
            <button>Recent</button>
        </div>
        </div>
        </MuiThemeProvider>
    );
  }
}

