import React from 'react';
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
import {MenuItem, Avatar} from 'material-ui';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import ActionHome from 'material-ui/svg-icons/action/home';
import {List, ListItem} from 'material-ui/List';
import NavigationExpandMoreIcon from "material-ui/svg-icons/navigation/expand-more";
import IconMenu from "material-ui/IconMenu";

const muiTheme = getMuiTheme({
  palette: {},
});
const buttonStyle = {
    // width: 36,
    // height: 36,
}
@observer
export default class Buttons extends React.Component {
  constructor() {
    super();
    this.state = {open: false,contacts:true,recent:false}
  }
  componentWillMount () {
    userstore.user =JSON.parse(localStorage.getItem("userInfo"));    
  }
  componentDidMount() {
  }
  gotohome(){
console.log("Inside go to home")
UIStore.home = true;
console.log("Inside go to home UIStore ",UIStore.home)
  }
  all(){
        UIStore.home = false;
         //Emitting event to receive conversations
         socket.emit('gettingConversation', {
           to: UserStore.user.username,
           username: UserStore.user.username,
         });
       }
  unread(){
        UIStore.home = false;
 //Emitting event to receive conversations
     socket.emit('unreadConversations', {
      to: UserStore.user.username,
      username: UserStore.user.username,
    });
  }
  contacts = function(){
    UIStore.home = false;
    UIStore.recent = false;
    UIStore.contacts = true;
    this.setState({recent:false,contacts:true});
     //Emitting event to receive conversations
     socket.emit('gettingConversation', {
      to: UserStore.user.username,
      username: UserStore.user.username,
    });
  }
  recent = function(){
        UIStore.home = false;
        UIStore.recent = true;
        UIStore.contacts = false;
        this.setState({recent: true, contacts: false});
   //Emitting event to receive recent conversations
   socket.emit('gettingRecentConversation', {
    to: UserStore.user.username,
    username: UserStore.user.username,
  });
  }
  render() {
    return <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <div>
            <div style={{display: 'inline-flex'}}>
              <button className="removing" onClick={this.gotohome.bind(this)} style={{display: 'inline-flex'}}>
                <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
                <p style={{marginTop: '10%'}}>Home</p>
              </button>
              <button className="removing" style={{display: 'inline-flex', marginLeft: '20%'}}>
                <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 19c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM6 1c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12-8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-6 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                </svg>
                <p style={{marginTop: '10%', marginLeft: '10%'}}>Call</p>
              </button>
              <button className="removing" style={{display: 'inline-flex', marginLeft: '20%'}}>
                <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
                <p style={{marginTop: '10%', marginLeft: '10%'}}>New</p>
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="col-md-4">
                <div className={this.state.contacts ? 'selected' : ''} >
                <button className="removing" onClick={this.contacts.bind(this)}>
                  <p style={{marginTop: '10%'}}>CONTACTS</p>
                </button>
                </div>
              </div>
              <div className="col-md-4">
                              <div className={this.state.recent ? 'selected' : ''} >
                <button className="removing" onClick={this.recent.bind(this)}>
                  <p style={{marginTop: '14%'}}>RECENT</p>
                </button>
              </div>
              </div>
              <div className="col-md-4" style={{marginTop: '-2%'}}>
                <IconMenu className="pull-right" iconButtonElement={<IconButton touch={true}>
                      <NavigationExpandMoreIcon />
                    </IconButton>}>
                  <MenuItem primaryText="All" onClick={this.all.bind(this)} />
                  <MenuItem primaryText="Unread" onClick={this.unread.bind(this)} />
                </IconMenu>
              </div>
            </div>
          </div>
        </div>
      </MuiThemeProvider>;
  }
}

