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
const KEYS_TO_FILTERS = ['username', 'fullname'];
import { browserHistory } from "react-router";

const style = {
  height: '100%',
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
      open: false,
      searchTerm:
        'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    };
  }

  componentWillMount() {
     UserStore.user =JSON.parse(localStorage.getItem("userInfo"));
}

  componentDidMount() {
    //Emitting event to receive conversations
    socket.emit('gettingConversation', {
      to: UserStore.user.username,
      username: UserStore.user.username,
    });
    //Receiving all conversations
    socket.on(UserStore.user.username + 'myConversations', function(data) {
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

    //Receiving message Real time
    socket.on(UserStore.user.username + 'messageSent', function(data) {
      if (
        ChatStore.conversationSelected.userTwo == data.sender ||
        UserStore.user.username == data.sender
      ) {
        ChatStore.messages.push(data);
      }
    });
    //Receiving createConversation event
    socket.on(UserStore.user.username + 'conversationCreated', function(data) {
      //Updating conversations
      socket.emit('gettingConversation', {
        to: UserStore.user.username,
        username: UserStore.user.username,
      });
      setTimeout(function() {
        console.log('Conversation created');
        Store.newChatDrawerState = false;
      }, 2000);
    });
  }

  btnConversation = conv => {
    //Selected conversation
    ChatStore.conversationSelected = conv;
    //Emittin getting messages
    socket.emit('gettingMessages', {to: UserStore.user.username, conv: conv});
    //Receiving messsages on selecting conversation
    socket.on(UserStore.user.username + 'myMessages', function(data) {
      ChatStore.messages = data;
    });
  };
  videoCall = conv => {
    //Changing view for video call
    Store.videoCallView = true;
    Store.callView = false;
    Store.conversationView = false;
    ChatStore.roomToJoin = ChatStore.conversationSelected.cid;
    browserHistory.push('/videoCall/'+ChatStore.roomToJoin)
  };
  Call = conv => {
    //Changing call for view
    Store.videoCallView = false;
    Store.callView = true;
    Store.conversationView = false;
        browserHistory.push('/call/'+ChatStore.roomToJoin)
  };

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
  createConversation = user => {
    //Creating conversations
    socket.emit('createConversation', {
      userOne: UserStore.user.username,
      userTwo: user.username,
      date: Date.now(),
    });
  };
  createConvBtnClick = function() {
    //Open drawer of creating conversation
    Store.newChatDrawerState = true;
  };
  //Function for realtime search
  searchUpdated(term) {
    this.setState({searchTerm: term});
  }
  render() {
    //Filtering data of all users in realtime search
    const filteredUsers = UserStore.allUsers.filter(
      createFilter(this.state.searchTerm, KEYS_TO_FILTERS)
    );
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={sty}>
          <div className="col-md-3">
            <div>
              {ChatStore.conversations.map(conv => {
                //Mapping all converations
                return (
                  <li key={conv._id}>
                    <center>
                      <button
                        className="btn btn-block btn-success"
                        onTouchTap={this.btnConversation.bind(this, conv)}
                      >
                        <p>
                          {conv.userTwo}
                        </p>
                        <input
                          type="button"
                          value="Video Call"
                          onClick={this.videoCall.bind(this, conv)}
                          className="pull-right btn-danger"
                        />
                        <input
                          type="button"
                          value="Call"
                          onClick={this.Call.bind(this, conv)}
                          className="pull-right btn-danger"
                        />
                      </button>
                    </center>
                  </li>
                );
              })}
            </div>
          </div>
          <div className="col-md-9">
            <div className="pull-right">
              <IconButton
                className="btn btn-succes"
                onTouchTap={this.createConvBtnClick.bind(this)}
              >
                <ContentAdd />
              </IconButton>
            </div>
            <div>
              {ChatStore.messages.map(messages => {
                // Check if message is mine or not
                return (
                  <li key={messages.id}>
                    <ul>
                      {messages.message}
                    </ul>
                  </li>
                );
              })}
            </div>
            <div>
              <textarea
                ref="message"
                style={chatinputbox}
                placeholder="Please Enter Your message......."
                className="form-control"
                errorText="This field is required"
              />
              <input
                type="button"
                value="send"
                className="btn btn-success"
                onClick={this.sendMessage.bind(this)}
              />
            </div>
          </div>
          <Drawer
            docked={false}
            width={300}
            open={Store.newChatDrawerState}
            onRequestChange={open => this.setState({newChatDrawerState})}
          >
            <SearchInput
              className="search-input"
              onChange={this.searchUpdated.bind(this)}
            />
            {filteredUsers.map(user => {
              //Mapping filtered users
              if (user.username != UserStore.user.username) {
                return (
                  <div key={user.id}>
                    <button onClick={this.createConversation.bind(this, user)}>
                      <h3>
                        {user.fullname}
                      </h3>
                      <p>
                        @{user.username}
                      </p>
                    </button>
                  </div>
                );
              }
            })}
          </Drawer>
        </div>
      </MuiThemeProvider>
    );
  }
}
