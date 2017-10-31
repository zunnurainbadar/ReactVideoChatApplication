import React from 'react';
import {observer} from 'mobx-react';
import Store from '../store/UIstore.js';
import UserStore from '../store/UserStore';
import ChatStore from '../store/ChatStore';
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
import {browserHistory} from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';

import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText,
} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const muiTheme = getMuiTheme({
  palette: {},
});

@observer
export default class Settings extends React.Component {
  constructor() {
    super();
    this.state = {open: false, dialogChangePassword: false};
  }
  componentWillMount() {
    UserStore.user = JSON.parse(localStorage.getItem('userInfo'));
  }
  changePassword() {
    console.log('You are Changing your Password');
    this.setState({dialogChangePassword:true});
  }
  cancel() {
    console.log('You are canceling your Password');
  }
  save() {
    console.log('You are saving your Password');
      this.setState({dialogChangePassword: false});
  }

  componentDidMount() {}
  render() {
            const actions = [
                <RaisedButton
                    label="Cancel"
                    onTouchTap={this.cancel.bind(this)}
                    backgroundColor={'#D40000'}
                    labelColor={"#ffffff"}
                    />,
                <RaisedButton
                    label="Save"
                    onTouchTap={this.save.bind(this)}
                    backgroundColor={'#2b842b'}
                    labelColor={"#ffffff"}
                    />
    ];
    return <MuiThemeProvider muiTheme={muiTheme}>
        <div className="container profile">
          <Card>
            <CardTitle title="Settings" subtitle="" />
            <CardText>
              <div className="col-md-12">
                <br />
                <br />

                <div className="col-md-6">
                  <Card>
                    <CardText>
                      <b>
                        <h3>Name:</h3>
                      </b>
                      <hr />
                      <b>
                        <h3>Username</h3>
                      </b>
                      <hr />
                      <b>
                        <h3>Description</h3>
                      </b>
                      <hr />
                      <br />
                      <br />
                      <br />
                    
                    </CardText>
                  </Card>
                </div>
                <div className="col-md-6">
                  <Card>
                    <CardText>
                      <h3>
                        {UserStore.user.fullname}
                      </h3>
                      <hr />
                      <h3>
                        {UserStore.user.username}
                      </h3>
                      <hr />
                      <h3>
                        {UserStore.user.desc}
                      </h3>
                      <hr />
                      <br />
                      <center>
                        <RaisedButton labelColor="#ffffff" backgroundColor="#3fb93f" label="Change Password" onTouchTap={this.changePassword.bind(this)} />
                      </center>
                    </CardText>
                  </Card>
                </div>
              </div>
            </CardText>
          </Card>
          <Dialog title="Change Password" actions={actions} modal={false} open={this.state.dialogChangePassword}>
            <h3>
              <input type="text" ref="oldPassword" placeholder="Enter Your old password"/>
              <input type="text" ref="newPassword" placeholder="Enter Your New password"/>
              <input type="text" ref="confirmnewPassword" placeholder="Confirm new password"/>
            </h3>
          </Dialog>
          <Dialog title="Video Call" actions={actions} modal={false} open={ChatStore.dialogOpen} titleStyle={{backgroundColor: '#000000', color: '#ffffff'}} actionsContainerStyle={{backgroundColor: '#000000', color: '#ffffff'}} bodyStyle={{backgroundColor: '#000000', color: '#ffffff'}}>
            <h3>
              {ChatStore.callFrom} is calling you{' '}
            </h3>
          </Dialog>
        </div>
      </MuiThemeProvider>;
  }
}
