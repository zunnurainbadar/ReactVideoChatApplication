import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {browserHistory} from 'react-router';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {cyan500} from 'material-ui/styles/colors';
import {greenA400} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import userstore from '../store/UserStore';
import UIstore from '../store/UIstore';
import AlertContainer from 'react-alert';
import {observable} from 'mobx';
import {observer} from 'mobx-react';
const style = {
  width: '100%',
  display: 'block',
  margin: '2%',
};

const muiTheme = getMuiTheme({
  palette: {},
});
@observer
export default class Help extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {   
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="container">
          <h3>Help</h3>
        </div>
      </MuiThemeProvider>
    );
  }
}
