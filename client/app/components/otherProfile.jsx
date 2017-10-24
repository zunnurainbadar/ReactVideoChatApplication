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
import {MenuItem, Avatar, List, ListItem} from 'material-ui';
import Call from './call';
import videoCall from './videoCall';
import RaisedButton from "material-ui/RaisedButton";
import FloatingActionButton from 'material-ui/FloatingActionButton';
import VideCallIcon from "material-ui/svg-icons/av/videocam"
import CallIcon from "material-ui/svg-icons/communication/call"
import AddPerson from "material-ui/svg-icons/social/person-add"
import { browserHistory } from "react-router";
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

var answer = false;
const muiTheme = getMuiTheme({
  palette: {},
});

@observer
export default class OtherProfile extends React.Component {
  constructor() {
    super();
     this.state = {
      open: false
    };
  }
  componentWillMount () {
    userstore.user =JSON.parse(localStorage.getItem("userInfo"));    
  }
  componentDidMount() {
    //Show the dialog that use is calling
    socket.on(UserStore.user.username+"calling",function(data){
        if(ChatStore.isBusy == false){
          console.log(data.from + " is calling you");
          ChatStore.callFrom = data.from;
          ChatStore.callTo = data.to;
          ChatStore.videoCall = data.videoCall;
          ChatStore.call = data.call;
          ChatStore.roomToJoin = data.room;
          ChatStore.dialogOpen = true;
          }
          else
          {
            console.log("Busy on another call");
          }
        })
        // socket.on('videoCall',function(data){

        // })
        //When other user pressed answer
        socket.on(UserStore.user.username+'answers',function(data){
         if(ChatStore.videoCall == true){
              browserHistory.push('/videoCall/'+ChatStore.roomToJoin)
            ChatStore.callingDialogOpen = false;
         }else{
           ChatStore.callingDialogOpen = false;
              browserHistory.push('/call/'+ChatStore.roomToJoin)
         }
        })
        //When other user press reject
        socket.on('rejects',function(data){
         console.log("User clicked on Reject button",data);
         ChatStore.callingDialogOpen = false;
        })
        //When user clicks on cancel button
        socket.on(UserStore.user.username+"cancels",function(data){
          ChatStore.dialogOpen = false;
        })
  }
//For video calling
   videoCall = function() {
     ChatStore.callingDialogOpen = true;
     console.log("This is video call function");
    //Changing view for video call
    Store.videoCallView = true;
    Store.callView = false;
    Store.conversationView = false;
    ChatStore.videoCall = true;    
    ChatStore.call = false;
    ChatStore.roomToJoin = ChatStore.conversationSelected.cid;
    ChatStore.to = ChatStore.conversationSelected.userTwo;
    ChatStore.from = UserStore.user.username;
    ChatStore.callTo =ChatStore.conversationSelected.userTwo;
    ChatStore.callFrom = UserStore.user.username;
    console.log("This is chatStore conversation selected ",ChatStore.conversationSelected.userTwo);
    // Sending Notification of call to Other person
    socket.emit("NewVideoCall",{to:ChatStore.conversationSelected.userTwo,room:ChatStore.roomToJoin,from: UserStore.user.username,videoCall:true,call:false});
    // browserHistory.push('/videoCall/'+ChatStore.roomToJoin)
  };
  Call = function() {
    //Changing call for view
    Store.videoCallView = false;
    Store.callView = true;
    Store.conversationView = false;
    ChatStore.videoCall = false;    
    ChatStore.call = true;
    // browserHistory.push('/call/'+ChatStore.roomToJoin)
  };
  // when user answers the call
  answer = function(){
    answer = true;
    ChatStore.isBusy = true;
    socket.emit("answer",{to:ChatStore.callFrom,from:ChatStore.callTo,answer:answer,isBusy:ChatStore.isBusy})
    ChatStore.dialogOpen = false;
    if(ChatStore.videoCall == true){
    browserHistory.push('/videoCall/'+ChatStore.roomToJoin)    
    }else{
          browserHistory.push('/call/'+ChatStore.roomToJoin)
    }

  }
  //When user rejects the call
  reject = function(){
    answer = false;
  ChatStore.isBusy = false;
    socket.emit("reject",{to:ChatStore.from,answer:answer,isBusy:ChatStore.isBusy})
    ChatStore.dialogOpen = false;
  }
  cancel = function(){
    ChatStore.callingDialogOpen = false;
    socket.emit('cancel',{to:ChatStore.conversationSelected.userTwo,room:ChatStore.roomToJoin,from: UserStore.user.username});
  }
  render() {
    const actions = [
      <FlatButton
        label="Answer"
        primary={true}
         keyboardFocused={true}
         backgroundColor= {"#00ff00"}
        onClick={this.answer.bind(this)}
      />,
      <FlatButton
        label="Reject"
        primary={true}
       backgroundColor= {"#ff0000"}
        onClick={this.reject.bind(this)}
      />,
    ];
    const actionsCalling  = [
      <FlatButton
        label="Cancel"
        primary={true}
         keyboardFocused={true}
         backgroundColor= {"#00ff00"}
        onClick={this.cancel.bind(this)}
      />
    ];
    return (
       <MuiThemeProvider muiTheme={muiTheme}>
      <div className="row">
        <div className="col-md-12">  
        <div className="col-md-6"> 
            <List style={{display: 'inline-flex',width:"100%"}}>
            <ListItem
              disabled={true}
              leftAvatar={
                <Avatar src={ChatStore.conversationSelected.avatar} size={70} />
              }
/>
<ListItem>
              <h2 style={{marginTop:"2%"}}>{ChatStore.conversationSelected.userTwo}</h2>
               <h5>{UserStore.user.desc}</h5>
              </ListItem>
          </List>
          </div>
          <div className="col-md-6">
           <div className="pull-right" style={{marginTop: "5%"}}>
               <FloatingActionButton 
               backgroundColor={"#077DB4"} 
              disabled={false} 
              labelColor={'#FFFFFF'}
               onClick={this.videoCall.bind(this)}
              >
                    <VideCallIcon />
               </FloatingActionButton>
               <FloatingActionButton 
               backgroundColor={"#077DB4"} 
              disabled={false} 
              labelColor={'#FFFFFF'}
               onClick={this.Call.bind(this)}
              >
                    <CallIcon />
               </FloatingActionButton>
               <FloatingActionButton 
               backgroundColor={"#FFFFFF"} 
              disabled={true} 
              labelColor={'#077DB4'}
              >
                    <AddPerson />
               </FloatingActionButton>
</div>
</div>
</div>
<Dialog
          title="Video Call"
          actions={actions}
          modal={false}
          open={ChatStore.dialogOpen}
        >
          SomeOne is calling you
        </Dialog>
<Dialog
          title="Calling"
          actions={actionsCalling}
          modal={false}
          open={ChatStore.callingDialogOpen}
        >
        Calling......
        </Dialog>
        </div>
        </MuiThemeProvider>
    );
  }
}

