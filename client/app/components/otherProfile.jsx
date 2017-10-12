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
           <div className="pull-right ">
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
        </MuiThemeProvider>
    );
  }
}

