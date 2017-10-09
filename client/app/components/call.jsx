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



@observer
export default class Call extends React.Component {
  constructor() {
    super();
    this.state = {open: false}
  }
  componentWillMount () {
  }
  componentDidMount() {
  }

//   videoCall = conv => {
//  var webrtc = new SimpleWebRTC({
//             localVideoEl: 'localVideo',
//             remoteVideosEl: 'remotesVideos',
//             autoRequestMedia: true,
//             autoplay: false
//         });
//         webrtc.on('readyToCall', function() {
//             console.log('Ready to call');
//             webrtc.joinRoom("room");
//         });
  
// };
  render() {
    return (
       <MuiThemeProvider muiTheme={muiTheme}>
      <div>
        </div>
        </MuiThemeProvider>
    );
  }
}

