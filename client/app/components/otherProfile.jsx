import React from 'react';
import {observer} from 'mobx-react';
import Store from '../store/UIstore.js';
import UserStore from '../store/UserStore';
import ChatStore from '../store/ChatStore';
import SimpleWebRTC from '../../node_modules/simplewebrtc/out/simplewebrtc.bundle';
import IconButton from 'material-ui/IconButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import { cyan500 } from "material-ui/styles/colors";
// import { greenA400 } from "material-ui/styles/colors";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Drawer from 'material-ui/Drawer';
import {MenuItem, Avatar, List, ListItem} from 'material-ui';
import Call from './call';
import videoCall from './videoCall';
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import VideoCallIcon from 'material-ui/svg-icons/av/videocam';
import CallIcon from 'material-ui/svg-icons/communication/call';
import AddPerson from 'material-ui/svg-icons/social/person-add';
import {browserHistory} from 'react-router';
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
      open: false,
    };
  }
  componentWillMount() {
    userstore.user = JSON.parse(localStorage.getItem('userInfo'));
  }
  componentDidMount() {
    //Show the dialog that use is calling
    socket.on(UserStore.user.username + 'calling', function(data) {
      console.log('THis is busy option ', ChatStore.isBusy);
      if (ChatStore.isBusy == false) {
        console.log(data.from + ' is calling you');
        ChatStore.callFrom = data.from;
        ChatStore.callTo = data.to;
        ChatStore.videoCall = data.videoCall;
        ChatStore.call = data.call;
        ChatStore.roomToJoin = data.room;
        ChatStore.dialogOpen = true;
        ChatStore.isBusy == true;
      } else {
        socket.emit('busy', {to: data.from, from: data.to});
      }
    });
    //When other user pressed answer
    socket.on(UserStore.user.username + 'answers', function(data) {
      ChatStore.isBusy = true;
      if (ChatStore.videoCall == true) {
        browserHistory.push('/videoCall/' + ChatStore.roomToJoin);
        ChatStore.callingDialogOpen = false;
      } else {
        ChatStore.callingDialogOpen = false;
        browserHistory.push('/call/' + ChatStore.roomToJoin);
      }
    });
    //When other user press reject
    socket.on('rejects', function(data) {
      console.log('User clicked on Reject button', data);
      ChatStore.callingDialogOpen = false;
      ChatStore.from = '';
      ChatStore.to = '';
      ChatStore.callFrom = '';
      ChatStore.callTo = '';
    });
    //When user clicks on cancel button
    socket.on(UserStore.user.username + 'cancels', function(data) {
      ChatStore.dialogOpen = false;
      ChatStore.from = '';
      ChatStore.to = '';
      ChatStore.callFrom = '';
      ChatStore.callTo = '';
    });
    //When Other user is busy on another call
    socket.on(UserStore.user.username + 'busys', function(data) {
      ChatStore.callingDialogOpen = false;
      ChatStore.from = '';
      ChatStore.to = '';
      ChatStore.callFrom = '';
      ChatStore.callTo = '';
      ChatStore.busyDialogOpen = true;
      setTimeout(function() {
        ChatStore.busyDialogOpen = false;
      }, 3000);
    });
  }
  //For video calling
  videoCall = function() {
    ChatStore.callingDialogOpen = true;
    console.log('This is video call function');
    //Changing view for video call
    Store.videoCallView = true;
    Store.callView = false;
    Store.conversationView = false;
    ChatStore.videoCall = true;
    ChatStore.call = false;
    ChatStore.roomToJoin = ChatStore.conversationSelected.cid;
    ChatStore.to = ChatStore.conversationSelected.userTwo;
    ChatStore.from = UserStore.user.username;
    ChatStore.callTo = ChatStore.conversationSelected.userTwo;
    ChatStore.callFrom = UserStore.user.username;
    console.log(
      'This is chatStore conversation selected ',
      ChatStore.conversationSelected.userTwo
    );
    // Sending Notification of call to Other person
    socket.emit('NewVideoCall', {
      to: ChatStore.conversationSelected.userTwo,
      room: ChatStore.roomToJoin,
      from: UserStore.user.username,
      videoCall: true,
      call: false,
    });
    // browserHistory.push('/videoCall/'+ChatStore.roomToJoin)
  };
  Call = function() {
    ChatStore.callingDialogOpen = true;
    console.log('This is video call function');
    //Changing view for video call
    Store.videoCallView = false;
    Store.callView = true;
    Store.conversationView = false;
    ChatStore.videoCall = false;
    ChatStore.call = true;
    ChatStore.roomToJoin = ChatStore.conversationSelected.cid;
    ChatStore.to = ChatStore.conversationSelected.userTwo;
    ChatStore.from = UserStore.user.username;
    ChatStore.callTo = ChatStore.conversationSelected.userTwo;
    ChatStore.callFrom = UserStore.user.username;
    console.log(
      'This is chatStore conversation selected ',
      ChatStore.conversationSelected.userTwo
    );
    // Sending Notification of call to Other person
    socket.emit('NewCall', {
      to: ChatStore.conversationSelected.userTwo,
      room: ChatStore.roomToJoin,
      from: UserStore.user.username,
      videoCall: false,
      call: true,
    });
    // browserHistory.push('/videoCall/'+ChatStore.roomToJoin)
  };
  // when user answers the call
  answer = function() {
    answer = true;
    ChatStore.isBusy = true;
    socket.emit('answer', {
      to: ChatStore.callFrom,
      from: ChatStore.callTo,
      answer: answer,
      isBusy: ChatStore.isBusy,
    });
    ChatStore.dialogOpen = false;
    if (ChatStore.videoCall == true) {
      browserHistory.push('/videoCall/' + ChatStore.roomToJoin);
    } else {
      browserHistory.push('/call/' + ChatStore.roomToJoin);
    }
  };
  //When user rejects the call
  reject = function() {
    answer = false;
    ChatStore.isBusy = false;
    ChatStore.from = '';
    ChatStore.to = '';
    ChatStore.callFrom = '';
    ChatStore.callTo = '';
    socket.emit('reject', {
      to: ChatStore.from,
      answer: answer,
      isBusy: ChatStore.isBusy,
    });
    ChatStore.dialogOpen = false;
  };
  cancel = function() {
    ChatStore.callingDialogOpen = false;
    ChatStore.from = '';
    ChatStore.to = '';
    ChatStore.callFrom = '';
    ChatStore.callTo = '';
    socket.emit('cancel', {
      to: ChatStore.conversationSelected.userTwo,
      room: ChatStore.roomToJoin,
      from: UserStore.user.username,
    });
  };
  render() {
    const actions = [
      <FloatingActionButton
      backgroundColor={'#2b842b'}
      color={'#ffffff'}
      onClick={this.answer.bind(this)}
      style={{marginRight:"1%"}}
      labelColor={'#FFFFFF'}
      onClick={this.answer.bind(this)}
    >
      <CallIcon />
    </FloatingActionButton>
      ,
      <FloatingActionButton
      backgroundColor={'#ff0000'}
      color={'#ffffff'}
      labelColor={'#FFFFFF'}
      onClick={this.reject.bind(this)}
      style={{marginRight:"1%"}}
      className="rotateAnswer"
    >
      <CallIcon />
    </FloatingActionButton>
      ,
    ];
    const actionsCalling = [
      <center>
      <FloatingActionButton
      backgroundColor={'#ff0000'}
      color={'#ffffff'}
      labelColor={'#FFFFFF'}
      onClick={this.cancel.bind(this)}
      style={{marginRight:"1%"}}
      className="rotateAnswer"
    >
      <CallIcon />
    </FloatingActionButton>
    </center>
      ,
    ];
    if (ChatStore.conversationSelected) {
      return (
        <MuiThemeProvider muiTheme={muiTheme}>
          <div className="row">
            <div className="col-md-12">
              <div className="col-md-6">
                <List style={{display: 'inline-flex', width: '100%'}}>
                  <ListItem
                    disabled={true}
                    leftAvatar={
                      <Avatar
                        src={ChatStore.conversationSelected.avatar}
                        size={70}
                      />
                    }
                  />
                  <ListItem>
                    <h2 style={{marginTop: '2%'}}>
                      {ChatStore.conversationSelected.userTwo}
                    </h2>
                    <h5>
                      {UserStore.user.desc}
                    </h5>
                  </ListItem>
                </List>
              </div>
              <div className="col-md-6">
                <div className="pull-right" style={{marginTop: '5%'}}>
                  <FloatingActionButton
                    backgroundColor={'#077DB4'}
                    disabled={false}
                    labelColor={'#FFFFFF'}
                    onClick={this.videoCall.bind(this)}
                  >
                    <VideoCallIcon />
                  </FloatingActionButton>
                  <FloatingActionButton
                    backgroundColor={'#077DB4'}
                    disabled={false}
                    labelColor={'#FFFFFF'}
                    onClick={this.Call.bind(this)}
                  >
                    <CallIcon />
                  </FloatingActionButton>

                  <FloatingActionButton
                    backgroundColor={'#FFFFFF'}
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
              titleStyle	={{backgroundColor:"#000000",color:"#ffffff"}}
              actionsContainerStyle={{backgroundColor:"#000000",color:"#ffffff"}}
              bodyStyle={{backgroundColor:"#000000",color:"#ffffff"}}
            >
            <h3>{ChatStore.callFrom} is calling you </h3>
            </Dialog>
            <Dialog
              title="Calling"
              actions={actionsCalling}
              modal={false}
              open={ChatStore.callingDialogOpen}
              titleStyle	= {{backgroundColor:"#000000",color:"#ffffff",textAlign:"center"}}
              actionsContainerStyle={{backgroundColor:"#000000",color:"#ffffff"}}
              bodyStyle={{backgroundColor:"#000000",color:"#ffffff"}}
              contentStyle={{width: '40%'}}
            >
<center>            <img src="E:/work/React/chat application/ReactVideoChatApplication/client/public/images/Calling.gif"  width="30%"/></center>
            </Dialog>
            <Dialog title="Busy" modal={false} open={ChatStore.busyDialogOpen}>
              {ChatStore.to} is busy on another Call.Please try again later
            </Dialog>
          </div>
        </MuiThemeProvider>
      );
    } else {
      return (
        <MuiThemeProvider muiTheme={muiTheme}>
          <div className="row">
            <div className="col-md-12">
              <div>
                <h3> You have no conversations please create a conversation</h3>
              </div>
            </div>
          </div>
        </MuiThemeProvider>
      );
    }
  }
}
