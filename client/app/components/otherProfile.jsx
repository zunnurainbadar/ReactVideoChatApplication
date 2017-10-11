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
import Call from './call';
import videoCall from './videoCall';

const muiTheme = getMuiTheme({
  palette: {},
});

@observer
export default class OtherProfile extends React.Component {
  constructor() {
    super();
    this.state = {open: false}
  }
  componentWillMount () {
    userstore.user =JSON.parse(localStorage.getItem("userInfo"));    
  }
  componentDidMount() {
  }

   videoCall = function() {
    //Changing view for video call
    Store.videoCallView = true;
    Store.callView = false;
    Store.conversationView = false;
    ChatStore.roomToJoin = ChatStore.conversationSelected.cid;
    browserHistory.push('/videoCall/'+ChatStore.roomToJoin)
  };
  Call = function() {
    //Changing call for view
    Store.videoCallView = false;
    Store.callView = true;
    Store.conversationView = false;
        browserHistory.push('/call/'+ChatStore.roomToJoin)
  };
  render() {
    return (
       <MuiThemeProvider muiTheme={muiTheme}>
      <div>
           <h2>Zunnurain </h2>
                                   <input
                          type="button"
                          value="Video Call"
                          onClick={this.videoCall.bind(this)}
                          className="pull-right btn-danger"
                        />
                        <input
                          type="button"
                          value="Call"
                          onClick={this.Call.bind(this)}
                          className="pull-right btn-danger"
                        />
        </div>
        </MuiThemeProvider>
    );
  }
}

