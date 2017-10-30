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
import {MenuItem, IconMenu} from 'material-ui';
import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import { browserHistory } from "react-router";

const muiTheme = getMuiTheme({
  palette: {},
});

@observer
export default class MyProfile extends React.Component {
  constructor() {
    super();
    this.state = {open: false};
  }
  componentWillMount() {
    UserStore.user = JSON.parse(localStorage.getItem('userInfo'));
  }
  signOut(){
    console.log("This is logout ");
    localStorage.clear();
    browserHistory.push('/login');
  }
  componentDidMount() {}
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div >
          <List style={{display: 'inline-flex'}}>
            <ListItem
              disabled={true}
              leftAvatar={
                <Avatar src={UserStore.user.avatar} size={70} />
              }
/>
              <ListItem style={{display: "flex"}}>
              <b><h3 style={{marginTop:"2%"}}>{UserStore.user.fullname}</h3></b>
              </ListItem>
              <ListItem style={{display: "flex"}}>
              <IconMenu
              iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
              anchorOrigin={{horizontal: 'left', vertical: 'top'}}
              targetOrigin={{horizontal: 'left', vertical: 'top'}}
              style={{marginLeft:"0%"}}
            >
              <MenuItem primaryText="Settings" />
              <MenuItem primaryText="Help" />
              <MenuItem primaryText="Sign out" onTouchTap={this.signOut.bind(this)} />
            </IconMenu>
              </ListItem>
          </List>
        </div>
      </MuiThemeProvider>
    );
  }
}
