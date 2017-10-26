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
import Mic from "material-ui/svg-icons/av/mic";
import MicOff from "material-ui/svg-icons/av/mic-off";
import Hangup from "material-ui/svg-icons/communication/call-end";
import { browserHistory } from "react-router";

var webrtc;
var room;
const muiTheme = getMuiTheme({
  palette: {},
});

@observer
export default class Call extends React.Component {
  constructor() {
    super();
    this.state = {open: false,
   MicButton : <Mic />,
MicButtonStatus:true,
  }
  }
  componentWillMount () {
    UserStore.user =JSON.parse(localStorage.getItem("userInfo"));
        console.log("This is in parameter ",this.props.params.roomToJoin)
        room = this.props.params.roomToJoin;
                    webrtc = new SimpleWebRTC({
                        autoRequestMedia: false,
                        receiveMedia: {
                            offerToReceiveAudio: true,
                            offerToReceiveVideo: false
                        },
                        media: {
                            audio: true,
                            video: false
                        }
                    });

                    webrtc.on('connectionReady', function(sessionId) {
                        console.log('Ready to call');
                        webrtc.startLocalVideo();
                        webrtc.joinRoom(ChatStore.roomToJoin);

                    })
        console.log("This is username ",UserStore.user.username);
        

  }
  componentDidMount() {
socket.on(UserStore.user.username+"hangups",function(data){
  console.log("Inside hangups");
  ChatStore.from="";
  ChatStore.to="";
  ChatStore.callFrom="";
  ChatStore.callTo="";
  ChatStore.isBusy = false;
  ChatStore.answer = false;
   webrtc.leaveRoom();
   webrtc.stopLocalVideo();
    browserHistory.push('/');
})
};
mute(){
  console.log("Mute is called");
    if(this.state.MicButtonStatus == true ){
  this.setState({  MicButton : <MicOff />,
  MicButtonStatus:false
 })
 webrtc.mute();
  }else{
      this.setState({  MicButton : <Mic />,
      MicButtonStatus:true })
      webrtc.unmute();
  }
}
add(){
  console.log("Add is called");
}
hangup(){
  console.log("Hangup is called");
  ChatStore.isBusy = false;
  ChatStore.answer = false;
  console.log("This is chatStore.chatTo",ChatStore.callTo);
  console.log("This is chatStore.chatFrom",ChatStore.callFrom);
  socket.emit("hangup",{to:ChatStore.callTo,from:ChatStore.callFrom,answer: ChatStore.answer})
}
  render() {
          if(room){
            return (
       <MuiThemeProvider muiTheme={muiTheme} className="background" style={{overflow:"hidden"}}>
      <div  style={{paddingTop: "15%"}}>
          <div className= "col-md-12">
          <div className="row">
            <center><h2>User One</h2></center>
          </div>

             <div className="row">
            <center>
               <FloatingActionButton 
                 mini={true}
                 backgroundColor={"#077DB4"} 
                 disabled={false} 
                 labelColor={'#FFFFFF'}
                onClick={this.mute.bind(this)}
              >
                    {this.state.MicButton}
               </FloatingActionButton>
                <FloatingActionButton 
                 mini={true}
                 backgroundColor={"#077DB4"} 
                 disabled={true} 
                 labelColor={'#FFFFFF'}
                onClick={this.add.bind(this)}
              >
                    <ContentAdd/>
               </FloatingActionButton>
                <FloatingActionButton 
                 mini={true}
                 backgroundColor={"#FF0000"} 
                 disabled={false} 
                 labelColor={'#FFFFFF'}
                onClick={this.hangup.bind(this)}
              >
                    <Hangup/>
               </FloatingActionButton>
               </center>
            </div>
            <div className="row">
              <center><h2>User Two</h2></center>
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

