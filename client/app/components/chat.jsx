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


@observer
export default class Chat extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  
  componentWillMount () {
  }

  
  componentDidMount() {
    //Emitting event to receive conversations
    socket.emit('gettingConversation',{to:UserStore.user.username,username:UserStore.user.username});
      //Receiving all conversations
    socket.on(UserStore.user.username+"myConversations",function(data){
      ChatStore.conversations = data;
      ChatStore.conversationSelected =data[0]; 
      //Getting messages when click on conversation
      socket.emit('gettingMessages',{to:UserStore.user.username,conv:ChatStore.conversationSelected});
      //Receiving messages of a conversation
       socket.on(UserStore.user.username+"myMessages",function(data){
    ChatStore.messages = data;
  })
    })

    //Receiving message Real time
socket.on(UserStore.user.username+"messageSent",function(data){
  if(ChatStore.conversationSelected.userTwo == data.sender || UserStore.user.username == data.sender){
    ChatStore.messages.push(data);
  }
  })
  } 
  
  btnConversation = conv => {
  ChatStore.conversationSelected = conv;
//Emittin getting messages
      socket.emit('gettingMessages',{to:UserStore.user.username,conv:conv});
  socket.on(UserStore.user.username+"myMessages",function(data){
    ChatStore.messages = data;
  })
  
};


sendMessage = function(){
  if(this.refs.message.value == ''){
   console.log("Cannot send message is empty"); 
  }else{
    socket.emit("sendMessage",{to:ChatStore.conversationSelected.userTwo,message:this.refs.message.value, sender : UserStore.user.username,conversationWith :ChatStore.conversationSelected.userTwo,time : Date.now(),cid : ChatStore.conversationSelected.cid})
    this.refs.message.value = '';

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
