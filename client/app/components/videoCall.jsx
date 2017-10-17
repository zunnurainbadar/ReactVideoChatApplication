import React from "react";
import { observer } from "mobx-react";
import Store from "../store/UIstore.js";
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
import UserStore from "../store/UserStore";


var webrtc;
var room;
var isBusy = false;
const muiTheme = getMuiTheme({
  palette: {},
});

@observer
export default class videoCall extends React.Component {
  constructor() {
    super();
    this.state = {open: false}
  }
  componentWillMount () {
    UserStore.user =JSON.parse(localStorage.getItem("userInfo"));
        console.log("This is in parameter ",this.props.params.roomToJoin)
        room = this.props.params.roomToJoin;
        
             webrtc = new SimpleWebRTC({
            localVideoEl: 'localVideo',
            remoteVideosEl: 'remotesVideos',
            autoRequestMedia: true,
            autoplay: false
        });
        webrtc.on('readyToCall', function() {
            console.log('Ready to call');
            webrtc.joinRoom(ChatStore.roomToJoin);
        });
        console.log("This is username ",UserStore.user.username);
        

  }
  componentDidMount() {

};
  render() {
    console.log("Thiss is room ",room);
          if(room){
            return (
       <MuiThemeProvider muiTheme={muiTheme}>
      <div>
          <div>
            <div id="remotesVideos" />
            <div>
              <video height="200" id="localVideo" />
            </div>
          </div>        
          </div>
        </MuiThemeProvider>
    );
      }else{
          return(
   <MuiThemeProvider muiTheme={muiTheme}>
      <div>
          <h2>Sorry!!!! You have to select conversation</h2>
          </div>
          </MuiThemeProvider>
          )
      }

  }
}

