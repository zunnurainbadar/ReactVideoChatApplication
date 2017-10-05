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

var username = "zunnurainbadar";

@observer
export default class Chat extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {
    socket.emit('gettingConversation',{to:username,username:"zunnurainbadar"});

    socket.on(username+"myConversations",function(data){
      console.log("This is conversation coming in my conversations ", data);
      ChatStore.conversations = data;
    })
  } 
  
  btnConversation = conv => {
console.log("You clicked on this conversation");
console.log(conv);
  };

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
        </div>
    );
  }
}
