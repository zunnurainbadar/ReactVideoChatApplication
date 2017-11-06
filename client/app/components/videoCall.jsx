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
import VideoCallIcon from "material-ui/svg-icons/av/videocam";
import VideoCallOffIcon from "material-ui/svg-icons/av/videocam-off";
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
export default class videoCall extends React.Component {
  constructor() {
    super();
    this.state = {open: false,
   MicButton : <Mic />,
VideoButton : <VideoCallIcon />  ,
MicButtonStatus:true,
VideoButtonStatus:true
  }
  }
  componentWillMount () {
    UserStore.user =JSON.parse(localStorage.getItem("userInfo"));
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
         webrtc.on('videoRemoved', function(video, peer) {
              console.log('Video removed is called');
              ChatStore.isBusy = false;
              ChatStore.answer = false;
              socket.emit('hangup', {
                to: ChatStore.callTo,
                from: ChatStore.callFrom,
                answer: ChatStore.answer,
              });
              socket.emit('hangup', {
              to: UserStore.user.username,
              from:ChatStore.callFrom,
              answer:ChatStore.answer,
              });
         });

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
muteVideo(){
  console.log("MuteVideo is called");
  console.log("Thiss is videButton state ",this.state.VideoButton);
  console.log("THis is dsaasdasd ",<VideoCallIcon/>)
  if(this.state.VideoButtonStatus == true ){
    console.log("Inside if of muteVideo");
  this.setState({  VideoButton : <VideoCallOffIcon />,
  VideoButtonStatus:false })
   webrtc.pauseVideo();
}else{
  console.log("Inside Else of mute Video");
      this.setState({  VideoButton : <VideoCallIcon />,
      VideoButtonStatus:true })
      webrtc.resumeVideo();
  }
}
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
       <MuiThemeProvider muiTheme={muiTheme} className="background">
      <div  style={{overflow:"hidden"}}>
          <div className="row">
          <div className= "col-md-12" >
          <div className= "col-md-8" >
            <div id="remotesVideos" className = "remoteVideo" >
             <div className="overlay row">
            <center><FloatingActionButton 
                 mini={true}
                 backgroundColor={"#077DB4"} 
                 disabled={false} 
                 labelColor={'#FFFFFF'}
                onClick={this.muteVideo.bind(this)}
              >
                    {this.state.VideoButton}
               </FloatingActionButton>
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

