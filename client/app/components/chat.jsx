import React from "react";
import { observer } from "mobx-react";
import Store from "../store/UIstore.js";
import UserStore from "../store/UserStore";
import ChatStore from "../store/ChatStore";

const style = {
  height: "100%"
};
const sty = {
  marginTop: "5%"
};
const chatinputbox = {
  height: "3.5rem",
  margin: "0 0 0rem",
  resize: "none"
};

var username = "zunnurainbadar";

@observer
export default class Chat extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  
  componentWillMount () {
  //    $.ajax({
  //     url: '/userInfo',
  //     type: "GET",
  //     data: {
  //       format: "json"
  //     },
  //     dataType: "json",
  //     success: function(data) {
  //       console.log("Success");
  //       UserStore.user = data;
  // }
  //    })
  }

  
  componentDidMount() {
    //Here we have to get user details from user and send it to server side same things both
    socket.emit('gettingConversation',{to:UserStore.user.username,username:UserStore.user.username});
//Here in to we have ChatStore.conversations.userTwo
    socket.on(UserStore.user.username+"myConversations",function(data){
      console.log("This is conversation coming in my conversations ", data);
      ChatStore.conversations = data;
      ChatStore.conversationSelected =data[0]; 
      socket.emit('gettingMessages',{to:UserStore.user.username,conv:ChatStore.conversationSelected});
       socket.on(UserStore.user.username+"myMessages",function(data){
    console.log("These are messages ",data);
    ChatStore.messages = data;
  })
    })

  } 
  
  btnConversation = conv => {
  console.log("You clicked on this conversation");
  console.log(conv);
  ChatStore.conversationSelected = conv;
      socket.emit('gettingMessages',{to:UserStore.user.username,conv:conv});
  socket.on(UserStore.user.username+"myMessages",function(data){
    console.log("These are messages ",data);
    ChatStore.messages = data;
  })
  
};


sendMessage = function(){
  console.log("This is seendMessage",this.refs.message.value);
  if(this.refs.message.value == ''){
   console.log("Cannot send message is empty"); 
  }else{
    socket.emit("sendMessage",{to:ChatStore.conversationSelected.userTwo,message:this.refs.message.value, sender : UserStore.user.username,conversationWith :ChatStore.conversationSelected.userTwo,time : Date.now(),cid : ChatStore.conversationSelected.cid})
socket.on(UserStore.user.username+"messageSent",function(data){
    console.log("These are messages ",data);
    ChatStore.messages.push(data);
  })
  }
}
  render() {
    return (
      <div style={sty}>
      <div className="col-md-3">
      <div>
      {ChatStore.conversations.map(conv => {
        return (
                      <li key={conv._id}>
                            <center><button className="btn btn-block btn-success" onTouchTap={this.btnConversation.bind(this, conv)}>{conv.userTwo}</button></center>
                      </li>
        )
        })
    }
      </div>
        </div>
      <div className="col-md-9">
      <div>
      {ChatStore.messages.map(messages => {
// Check if message is mine or not
        return (
                      <li key={messages.id}>
                            <ul>{messages.message}</ul>
                      </li>
        )
        })
    }
      </div>
      <div>
<textarea
                  ref="message"
                  style={chatinputbox}
                  placeholder="Please Enter Your message......."
                  className="form-control"
                  errorText="This field is required"
                />
                <input type="button" value="send" className="btn btn-success" onClick={this.sendMessage.bind(this)}/>
        </div>
        </div>
        </div>
    );
  }
}
