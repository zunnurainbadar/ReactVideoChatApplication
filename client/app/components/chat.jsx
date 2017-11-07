import React from 'react';
import {observer} from 'mobx-react';
import UIStore from '../store/UIstore.js';
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
import {MenuItem, Avatar} from 'material-ui';
import SearchInput, {createFilter} from 'react-search-input';
import { browserHistory } from "react-router";
import Attachment from "material-ui/svg-icons/file/attachment"
import Send from "material-ui/svg-icons/content/send"
import Mood from "material-ui/svg-icons/social/mood"
import Contacts from "material-ui/svg-icons/communication/contact-phone.js"
import Message from "material-ui/svg-icons/communication/message.js"
import VideCallIcon from "material-ui/svg-icons/av/videocam";
import Image from "material-ui/svg-icons/image/image.js";
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Home from '../components/home.jsx'

var time;
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
  border: "none",
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
      console.log("Inside message sent",data);
      if (
        ChatStore.conversationSelected.userTwo == data.sender ||
        UserStore.user.username == data.sender
      ) {
        console.log("Inside if");
        ChatStore.messages.push(data);
      }
    });
   
  }

  
 

  sendMessage = function() {
    console.log("Inside send ",this.refs.message.value);
    if (this.refs.message.value == '') {
      console.log('Cannot send message is empty');
    } else {
      //Getting Date 
      var currentDate = new Date()
      var day = currentDate.getDate()
      var month = currentDate.getMonth() + 1
      var year = currentDate.getFullYear()
      var date = day + "/" + month + "/" + year ;
      var hour = currentDate.getHours();
      var minute = currentDate.getMinutes();
      var second = currentDate.getSeconds();
      var time = hour+":"+minute+":"+second;
      //Emitting send message
      socket.emit('sendMessage', {
        to: ChatStore.conversationSelected.userTwo,
        message: this.refs.message.value,
        sender: UserStore.user.username,
        conversationWith: ChatStore.conversationSelected.userTwo,
        time: time,
        date: date,
        cid: ChatStore.conversationSelected.cid,
        convId: ChatStore.conversationSelected.id,
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
    if (ChatStore.conversationSelected) {
    if(UIStore.home == false){
      console.log("Inside if")
      return (
        <MuiThemeProvider muiTheme={muiTheme} >
          <div className="scrollbar">
                      <hr/>
              <div style={sty}>
                
                {ChatStore.messages.map(messages => {
                  // time = messages.time.split("T");
                  // time = time[1].substr(0,7);
                  // Check if message is mine or not
                  if(messages.sender == UserStore.user.username)
                  return (
                    <div>
                    <ul style={liStyle}>
                    <li key={messages.id}>
                    <div className="row">
                    <div className="col-md-1">
                    </div>
                    <div className="col-md-10 mineMsg">
                    <h4 style={{padding:"1%",paddingRight:"0%"}}>
                        {messages.message}
                    </h4>
                    </div>
                      <div>
                      <b>{messages.time}</b>
                      </div>
                      </div>
                    </li>
                    </ul>
                    </div>
                  );
                  else
             return(
                    <div className="otherMsg">
                    <ul style={liStyle}>
                    <li key={messages.id}>
                    <div className="row">
                    <div  className="col-md-1">
                     <Avatar src={ChatStore.conversationSelected.avatar} size={35} />
                    </div>
                    <div className="col-md-10">
                      <h4 style={{padding:"1%",paddingLeft:"0%"}}>
                        {messages.message}
                      </h4>
                    </div>
                    <div >
                      <time>
                        <b>{messages.time}</b>
                      </time>
                    </div>
                    
                    </div>
                    
                    </li>
                    </ul>
                    </div>
                  );
                })}
              </div>
              <br/>
              <br/>
              <div className ="row fixedbutton">
              <div className="col-md-12">
              <div className="col-md-8">
              <textarea
                rows="2"
                  ref="message"
                  style={chatinputbox}
                  placeholder="Type a message here......."
                  className="form-control"
                  errorText="This field is required"
                />
              </div>         
              <div className = "col-md-4">              
                  <div className="row">
                  <IconButton disabled={true}><Image color="#077DB4" style={{ width: 30,height: 30}}/></IconButton>
                  <IconButton disabled={true}>
                  <Message color="#077DB4" style={{ width: 30,height: 30}} >
                  <VideCallIcon color="#ffffff" />
                  </Message>
                  </IconButton>
                  <IconButton disabled={true}><Contacts color="#077DB4"  style={{ width: 30,height: 30}}/></IconButton>
                  <IconButton disabled={true}><Attachment color="#077DB4" className="rotate" style={{ width: 30,height: 30}}/></IconButton>
                  <IconButton disabled={true}><Mood color="#077DB4" style={{ width: 30,height: 30}} /></IconButton>  
                  <FloatingActionButton 
                   mini={true}
                   backgroundColor={"#077DB4"} 
                   disabled={false} 
                   labelColor={'#FFFFFF'}
                  onClick={this.sendMessage.bind(this)}
                >
                      <Send className="rotateSend"/>
                 </FloatingActionButton>
              </div>   
                </div>
             
                </div>
                </div>
            </div>
        </MuiThemeProvider>
      );
    }else{
      return(      
        <MuiThemeProvider muiTheme={muiTheme}>
        <div className="row">
          <div className="col-md-12">
            <Home/>
          </div>
        </div>
      </MuiThemeProvider>);

    }
  }else{
          return <MuiThemeProvider muiTheme={muiTheme}>
              <div className="row">
                <div className="col-md-12">
                  <br />
                  <br />
                  <br />
                  <hr />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <p>You dont't have any messages yet</p>
                </div>
              </div>
            </MuiThemeProvider>;
  }
  }
}
