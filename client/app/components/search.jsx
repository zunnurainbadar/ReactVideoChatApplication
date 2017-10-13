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
import {MenuItem} from 'material-ui';
import SearchInput, {createFilter} from 'react-search-input';
const KEYS_TO_FILTERS = ['username', 'fullname'];

const muiTheme = getMuiTheme({
  palette: {},
});
const searchStyles = {
  width: "100%",
  height:"50%",
    marginTop: "10%",
    border: "none",
    backgroundColor: "#F0F4F8",
};

@observer
export default class Search extends React.Component {
  constructor() {
    super();
    this.state = {open: false,
     searchTerm:
        'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
    }
  }
  componentWillMount () {
    userstore.user =JSON.parse(localStorage.getItem("userInfo"));    
  }
  componentDidMount() {
 //Receiving createConversation event
    socket.on(UserStore.user.username + 'conversationCreated', function(data) {
      //Updating conversations
      socket.emit('gettingConversation', {
        to: UserStore.user.username,
        username: UserStore.user.username,
      });
    });  
}
    createConversation = user => {
    //Creating conversations
    socket.emit('createConversation', {
      userOne: UserStore.user.username,
      userTwo: user.username,
      date: Date.now(),
    });
  };
   searchUpdated(term) {
    this.setState({searchTerm: term});
    if(term==''){
          this.setState({searchTerm: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'});
    }
  }
  render() {
          //Filtering data of all users in realtime search
    const filteredUsers = UserStore.allUsers.filter(
      createFilter(this.state.searchTerm, KEYS_TO_FILTERS)
    );
    return (
       <MuiThemeProvider muiTheme={muiTheme}>
      <div>
            <SearchInput
              className="search-input"
              onChange={this.searchUpdated.bind(this)}
              style={searchStyles}
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
        </div>
        </MuiThemeProvider>
    );
  }
}

