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
import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';

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
  componentDidMount() {}
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <List style={{display: 'inline-flex'}}>
            <ListItem
              disabled={true}
              leftAvatar={
                <Avatar src={UserStore.user.avatar} size={70} />
              }
/>
<ListItem>
              <h2 style={{marginTop:"2%"}}>{UserStore.user.fullname}</h2>
              </ListItem>
          </List>
        </div>
      </MuiThemeProvider>
    );
  }
}
