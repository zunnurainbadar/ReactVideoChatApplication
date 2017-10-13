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
import {MenuItem} from 'material-ui';
import SearchInput, {createFilter} from 'react-search-input';
import { browserHistory } from "react-router";

const style = {
  height: '100%',
};
const liStyle = {
 listStyle: "none"
};
const createConversationStyle = {
  height: '50%',
};
const sty = {
  marginTop: '5%',
};
const chatinputbox = {
  height: '3.5rem',
  margin: '0 0 0rem',
  resize: 'none',
};
const muiTheme = getMuiTheme({
  palette: {},
});

@observer
export default class Chat extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false
     
    };
  }

  componentWillMount() {
     UserStore.user =JSON.parse(localStorage.getItem("userInfo"));
}

  componentDidMount() {


    //Receiving message Real time
    socket.on(UserStore.user.username + 'messageSent', function(data) {
      if (
        ChatStore.conversationSelected.userTwo == data.sender ||
        UserStore.user.username == data.sender
      ) {
        ChatStore.messages.push(data);
      }
    });
   
  }

  
 

  sendMessage = function() {
    if (this.refs.message.value == '') {
      console.log('Cannot send message is empty');
    } else {
      //Emitting send message
      socket.emit('sendMessage', {
        to: ChatStore.conversationSelected.userTwo,
        message: this.refs.message.value,
        sender: UserStore.user.username,
        conversationWith: ChatStore.conversationSelected.userTwo,
        time: Date.now(),
        cid: ChatStore.conversationSelected.cid,
      });
      this.refs.message.value = '';
    }
  };

  // createConvBtnClick = function() {
  //   //Open drawer of creating conversation
  //   Store.newChatDrawerState = true;
  // };
  //Function for realtime search
 
  render() {

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div >
                    <hr/>
            <div style={sty}>

              {ChatStore.messages.map(messages => {
                // Check if message is mine or not
                if(messages.sender == UserStore.user.username)
                return (
                  <div className="mineMsg">
                  <ul style={liStyle}>
                  <li key={messages.id}>
                    <h4 style={{padding:"1%",paddingRight:"0%"}}>
                      {messages.message}
                    </h4>
                  </li>
                  </ul>
                  </div>
                );
                else
           return(
                  <div className="otherMsg">
                  <ul style={liStyle}>
                  <li key={messages.id}>
                    <h4 style={{padding:"1%",paddingLeft:"0%"}}>
                      {messages.message}
                    </h4>
                  </li>
                  </ul>
                  </div>
                );
              })}
            </div>
            <div>
            
              <textarea
                ref="message"
                style={chatinputbox}
                placeholder="Type a message here......."
                className="form-control"
                errorText="This field is required"
              />
              <input
                type="button"
                value="send"
                className="btn btn-success"
                onClick={this.sendMessage.bind(this)}
              />
              <div>
              
              </div>
            </div>
          </div>
      </MuiThemeProvider>
    );
  }
}
