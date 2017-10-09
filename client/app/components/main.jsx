var React = require("react");
var { Link, IndexLink } = require("react-router");
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import RaisedButton from "material-ui/RaisedButton";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import { cyan500 } from "material-ui/styles/colors";
import { greenA400 } from "material-ui/styles/colors";
import Chat from "./chat";
import Login from "./login.jsx";
import Store from "../store/UIstore.js";
import videoCall from "./videoCall.jsx";
import Call from "./call.jsx";
import UserStore from "../store/UserStore";
import ChatStore from "../store/ChatStore";
// This replaces the textColor value on the palette
// and then update the keys for each component that depends on it.
// More on Colors: http://www.material-ui.com/#/customization/colors
const muiTheme = getMuiTheme({
  palette: {
    //   textColor: greenA400,
    primary1Color: greenA400
    //   primary2Color: greenA400,
    //  primary3Color:greenA400,
    //   accent1Color: greenA400,
    //   accent2Color: greenA400,
    //   accent3Color: greenA400

    //this is for changing the theme
  },
  toggle: {
    thumbOnColor: "yellow",
    trackOnColor: "red",
    backgroundColor: "red"
  },
  appBar: {
    height: 50
  }
});

const style = {
  height: '100%',
}

var Main = () => {
  // console.log("Inside main again");
  // if(Store.conversationView == true && Store.videoCallView == false && Store.callView == false){
  return (
    <MuiThemeProvider muiTheme={muiTheme}>

      <div style={style}>
        {/*<NewNav />*/}
     <Chat></Chat>
      </div>
    </MuiThemeProvider>
  );
  // }
// else if(Store.conversationView == false && Store.videoCallView == true && Store.callView == false){
//   return (
//     <MuiThemeProvider muiTheme={muiTheme}>

//       <div style={style}>
//         {/*<NewNav />*/}
//      <videoCall></videoCall>
//       </div>
//     </MuiThemeProvider>
//   );
//   }
//   else if(Store.conversationView == false && Store.videoCallView == false && Store.callView == true){
//   return (
//     <MuiThemeProvider muiTheme={muiTheme}>

//       <div style={style}>
//         {/*<NewNav />*/}
//      <Call></Call>
//       </div>
//     </MuiThemeProvider>
//   );
// }
// else{
//     return (
//     <MuiThemeProvider muiTheme={muiTheme}>

//       <div style={style}>
//         {/*<NewNav />*/}
//      <Login></Login>
//       </div>
//     </MuiThemeProvider>
//   );
// }

};

module.exports = Main;