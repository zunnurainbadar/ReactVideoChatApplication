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
import {MenuItem, FloatingActionButton} from 'material-ui';
import UserStore from "../store/UserStore";
import VideCallIcon from "material-ui/svg-icons/av/videocam";

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
muteVideo(){
  console.log("MuteVideo is called");
}
  render() {
          if(room){
            return (
       <MuiThemeProvider muiTheme={muiTheme}>
      <div className= "container-fluid containers" >
          <div className="row">
          <div className= "col-md-12" >
          <div className= "col-md-8" >
            <div id="remotesVideos" className = "remoteVideo" />
            <div className="overlay">
            <FloatingActionButton 
                 mini={true}
                 backgroundColor={"#077DB4"} 
                 disabled={false} 
                 labelColor={'#FFFFFF'}
                onClick={this.muteVideo.bind(this)}
              >
                    <VideCallIcon/>
               </FloatingActionButton>
            </div>
            </div>
            <div className= "col-md-2" >
              <video id="localVideo" className="localVideo" >
              </video>
            </div>
            <div className= "col-md-2" >
            </div>
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

