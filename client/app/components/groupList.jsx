import React from "react";
import { observer } from "mobx-react";
import UIStore from "../store/UIstore.js";
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
import {MenuItem, makeSelectable, Badge} from 'material-ui';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import {map, observable} from 'mobx';
let SelectableList = makeSelectable(List);
const muiTheme = getMuiTheme({
  palette: {},
});
const liStyle = {
 
}

@observer
export default class GroupList extends React.Component {
  constructor() {
    super();
    this.state = {open: false}
  }
  componentWillMount () {
    userstore.user =JSON.parse(localStorage.getItem("userInfo"));    
  }
  componentDidMount() {
    socket.on(UserStore.user.username+'updatedConversations',function(data){
      console.log("inside conversation updation ",data);
      console.log('Inside myconversations', UIStore.recent);
      if(!UIStore.recent){
      ChatStore.conversations = data;      
      }
    })
    //Receiving all conversations
    socket.on(UserStore.user.username + 'myConversations', function(data) {
      console.log("Inside myconversations",data);

      ChatStore.conversations = data;
      ChatStore.conversationSelected = data[0];
      //Getting messages when click on conversation
      socket.emit('gettingMessages', {
        to: UserStore.user.username,
        conv: ChatStore.conversationSelected,
      });
      //Receiving messages of a conversation
      socket.on(UserStore.user.username + 'myMessages', function(data) {
        ChatStore.messages = data;
      });
      //Getting all users;
      socket.emit('gettingALlUsers', {});
      //Receining all users
      socket.on('receivingUsers', function(data) {
        UserStore.allUsers = data;
      });
    });
          //Emitting event to receive conversations
    socket.emit('gettingConversation', {
      to: UserStore.user.username,
      username: UserStore.user.username,
    });
  }
  btnConversation = conv => {
    UIStore.home = false;
      console.log("inside conversation",conv);
    //Selected conversation
    ChatStore.conversationSelected = conv;
    //Emittin getting messages
    socket.emit('gettingMessages', {to: UserStore.user.username, conv: conv});
    socket.emit('updatingchatlist', { 
        to:  UserStore.user.username
      });
    //Receiving messsages on selecting conversation
    socket.on(UserStore.user.username + 'myMessages', function(data) {
      ChatStore.messages = data;
    });
    
  };
  render() {
    return (
       <MuiThemeProvider muiTheme={muiTheme}>
     <div >
                    <hr/>
            <SelectableList>
              {ChatStore.conversations.map(conv => {
                //Mapping all converations
                if (conv.unreadCount>0) {
                return (
                  <div key={conv._id} >
                       
                      <ListItem
                    primaryText= {conv.userTwo}
                    value={conv._id}
                    leftAvatar={<Avatar src={conv.avatar} />}
                    onClick={this.btnConversation.bind(this,conv)}
                    rightIconButton={<Badge
                        badgeContent={conv.unreadCount}
                        badgeStyle={{backgroundColor:"#FF8C00",color:"#ffffff"}}
                      >
                      </Badge>}
                  />
                  </div>
                );
                }else{
                                  return (
                  <div key={conv._id} >
                       
                      <ListItem
                    primaryText= {conv.userTwo}
                    value={conv._id}
                    leftAvatar={<Avatar src={conv.avatar} />}
                    onClick={this.btnConversation.bind(this,conv)}
                      />
                  </div>
                );
                }

              })}
            </SelectableList>
            </div>
        </MuiThemeProvider>
    );
  }
}
