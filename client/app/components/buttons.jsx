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
    width: 36,
    height: 36,
}
@observer
export default class Buttons extends React.Component {
  constructor() {
    super();
    this.state = {open: false}
  }
  componentWillMount () {
    userstore.user =JSON.parse(localStorage.getItem("userInfo"));    
  }
  componentDidMount() {
  }
  gotohome(){
console.log("Inside go to home")
  }
  all(){
console.log("Inside All")
  }
  unread(){
console.log("Inside unread")
  }
  render() {
    return (
       <MuiThemeProvider muiTheme={muiTheme}>
       <div style={buttonStyle}>
      <div>
<div style={{display:"inline-flex"}}>  
<button className="removing" onClick={this.gotohome.bind(this)} style={{display:"inline-flex"}}>
   <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
    <path d="M0 0h24v24H0z" fill="none"/>
</svg><p style={{marginTop:"10%"}}>Home</p>
</button>
<button className="removing" onClick={this.gotohome.bind(this)} style={{display:"inline-flex", marginLeft:"20%"}}>
   <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M12 19c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM6 1c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12-8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-6 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
</svg><p style={{marginTop:"10%", marginLeft:"10%"}}>Call</p>
</button>
<button className="removing" onClick={this.gotohome.bind(this)} style={{display:"inline-flex",marginLeft:"20%"}}>
  <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
    <path d="M0 0h24v24H0z" fill="none"/>
</svg><p style={{marginTop:"10%", marginLeft:"10%"}}>New</p>
</button>
</div>
        </div>
        <div style={{display:"inline-flex",marginTop:"10%"}}>
        <button className="removing" onClick={this.gotohome.bind(this)}>
        <p style={{marginTop:"10%", marginLeft:"10%"}}>Contacts</p>
</button>
        <button className="removing" onClick={this.gotohome.bind(this)} style={{marginLeft:"20%"}}>
        <p style={{marginTop:"10%", marginLeft:"10%"}}>Recent</p>
</button>
        <IconMenu
                  className="pull-right"
                  iconButtonElement={
                    <IconButton touch={true}>
                      <NavigationExpandMoreIcon />
                    </IconButton>
                  }
                >
                  <MenuItem primaryText="All" onClick={this.all.bind(this)} />
                  <MenuItem primaryText="Unread" onClick={this.unread.bind(this)} />
                </IconMenu>
      </div>
        </div>
        </MuiThemeProvider>
    );
  }
}

