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
import {MenuItem, IconMenu} from 'material-ui';
import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import { browserHistory } from "react-router";
import {map} from 'mobx';
import {makeSelectable} from 'material-ui';
import Subheader from 'material-ui/Subheader';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import VideoCallIcon from 'material-ui/svg-icons/av/videocam';
import CallIcon from 'material-ui/svg-icons/communication/call';
let SelectableList = makeSelectable(List);
const muiTheme = getMuiTheme({
  palette: {},
});

@observer
export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {open: false};
  }
//   componentDidMount() {
//     UserStore.user = JSON.parse(localStorage.getItem('userInfo'));
//      //Show the dialog that use is calling
//      socket.on(UserStore.user.username + 'calling', function(data) {
//         console.log('THis is busy option ', ChatStore.isBusy);
//         if (ChatStore.isBusy == false) {
//           console.log(data.from + ' is calling you');
//           ChatStore.callFrom = data.from;
//           ChatStore.callTo = data.to;
//           ChatStore.videoCall = data.videoCall;
//           ChatStore.call = data.call;
//           ChatStore.roomToJoin = data.room;
//           ChatStore.dialogOpen = true;
//           ChatStore.isBusy == true;
//         } else {
//           socket.emit('busy', {to: data.from, from: data.to});
//         }
//       });
//       //When other user pressed answer
//       socket.on(UserStore.user.username + 'answers', function(data) {
//         ChatStore.isBusy = true;
//         if (ChatStore.videoCall == true) {
//           browserHistory.push('/videoCall/' + ChatStore.roomToJoin);
//           ChatStore.callingDialogOpen = false;
//         } else {
//           ChatStore.callingDialogOpen = false;
//           browserHistory.push('/call/' + ChatStore.roomToJoin);
//         }
//       });
//       //When other user press reject
//       socket.on('rejects', function(data) {
//         console.log('User clicked on Reject button', data);
//         ChatStore.callingDialogOpen = false;
//         ChatStore.from = '';
//         ChatStore.to = '';
//         ChatStore.callFrom = '';
//         ChatStore.callTo = '';
//       });
//       //When user clicks on cancel button
//       socket.on(UserStore.user.username + 'cancels', function(data) {
//         ChatStore.dialogOpen = false;
//         ChatStore.from = '';
//         ChatStore.to = '';
//         ChatStore.callFrom = '';
//         ChatStore.callTo = '';
//       });
//       //When Other user is busy on another call
//       socket.on(UserStore.user.username + 'busys', function(data) {
//         ChatStore.callingDialogOpen = false;
//         ChatStore.from = '';
//         ChatStore.to = '';
//         ChatStore.callFrom = '';
//         ChatStore.callTo = '';
//         ChatStore.busyDialogOpen = true;
//         setTimeout(function() {
//           ChatStore.busyDialogOpen = false;
//         }, 3000);
//       });
//   }
  componentWillMount() {}
    //For video calling
    videoCall= conv =>  {
        ChatStore.callingDialogOpen = true;
        console.log('This is video call function',conv);
        //Changing view for video call
        Store.videoCallView = true;
        Store.callView = false;
        Store.conversationView = false;
        ChatStore.videoCall = true;
        ChatStore.call = false;
        ChatStore.roomToJoin = ChatStore.conversationSelected.cid;
        ChatStore.to = conv.userTwo;
        ChatStore.from = UserStore.user.username;
        ChatStore.callTo = conv.userTwo;
        ChatStore.callFrom = UserStore.user.username;
        console.log(
          'This is chatStore conversation selected ',
          ChatStore.conversationSelected.userTwo
        );
        // Sending Notification of call to Other person
        socket.emit('NewVideoCall', {
          to: conv.userTwo,
          room: ChatStore.roomToJoin,
          from: UserStore.user.username,
          videoCall: true,
          call: false,
        });
        // browserHistory.push('/videoCall/'+ChatStore.roomToJoin)
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
      console.log("THis is inside home");
    //   const actions = [
    //     <FloatingActionButton
    //     backgroundColor={'#2b842b'}
    //     color={'#ffffff'}
    //     onClick={this.answer.bind(this)}
    //     style={{marginRight:"1%"}}
    //     labelColor={'#FFFFFF'}
    //     onClick={this.answer.bind(this)}
    //   >
    //     <CallIcon />
    //   </FloatingActionButton>
    //     ,
    //     <FloatingActionButton
    //     backgroundColor={'#ff0000'}
    //     color={'#ffffff'}
    //     labelColor={'#FFFFFF'}
    //     onClick={this.reject.bind(this)}
    //     style={{marginRight:"1%"}}
    //     className="rotateAnswer"
    //   >
    //     <CallIcon />
    //   </FloatingActionButton>
    //     ,
    //   ];
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
    return (
        <MuiThemeProvider muiTheme={muiTheme}>
        <div >
                       <hr/>
               <SelectableList>
                 {ChatStore.conversations.map(conv => {
                   //Mapping all converations
                   return (
                     <div key={conv._id} >
                     <div className="col-md-4">
                     <ListItem
                     primaryText= {conv.userTwo}
                     secondaryText={conv.desc}
                     value={conv._id}
                     rightIcon={<VideoCallIcon onClick= {this.videoCall.bind(this,conv)}/>}
                     leftAvatar={<Avatar src={conv.avatar} />}
                      />
                      <br/>
                      <br/>
                      <br/>
                   </div>                     
                     </div>

                   );
                 })}
               </SelectableList>
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
             <center><img src="https://www.rogers.com/web/smb/bss/images/widget-loader-lg_no-lang.gif"  width="10%"/></center>
           
             </Dialog>
               </div>
           </MuiThemeProvider>
    );
  }
}
