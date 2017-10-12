var React = require("react");
var { Link, IndexLink } = require("react-router");
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import RaisedButton from "material-ui/RaisedButton";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import { cyan500 } from "material-ui/styles/colors";
import { greenA400 } from "material-ui/styles/colors";
import Chat from "./chat";
import Login from "./login.jsx";
import OtherProfile from "./otherProfile.jsx";
import MyProfile from "./myProfile.jsx";
import Store from "../store/UIstore.js";
import videoCall from "./videoCall.jsx";
import Call from "./call.jsx";
import Search from "./search.jsx";
import Buttons from "./buttons.jsx";
import GroupList from "./groupList.jsx";
import UserStore from "../store/UserStore";
import ChatStore from "../store/ChatStore";
// This replaces the textColor value on the palette
// and then update the keys for each component that depends on it.
// More on Colors: http://www.material-ui.com/#/customization/colors
const muiTheme = getMuiTheme({
  palette: {
    
  },
});

const leftSide = {
  height: '100%',
}
const myProfileStyle = {

}
const searchStyle = {
marginTop:"25%"
}

const groupStyle = {

}
const otherProfileStyle = {

}
const chatStyle = {

}

var Main = () => {
  // console.log("Inside main again");
  // if(Store.conversationView == true && Store.videoCallView == false && Store.callView == false){
  return (
    <MuiThemeProvider muiTheme={muiTheme}>
    <div style={leftSide}>
      <div className="col-md-3 backgroundLeft">
      <div className="row">
      <MyProfile style={myProfileStyle}></MyProfile>
      </div>
            <div className="row">
      <Search style={searchStyle}></Search>
      </div>
            <div className="row">
      <Buttons></Buttons>
      </div>
            <div className="row">
      <GroupList style={groupStyle}></GroupList>
      </div>
      </div>
      <div className="col-md-9">
            <div className="row">
      <OtherProfile style={otherProfileStyle}></OtherProfile>
      </div>
            <div className="row">
     <Chat style={chatStyle}></Chat>
     </div>
      </div>
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