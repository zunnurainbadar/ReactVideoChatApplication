var React = require("react");
var ReactDOM = require("react-dom");
var {
  Route,
  Router,
  hashHistory,
  browserHistory,
  IndexRoute
} = require("react-router");
var Main = require("./components/main");
import Login from "./components/login.jsx";
import Signup from "./components/signup.jsx";
import Chat from "./components/chat.jsx";
import videoCall from "./components/videoCall.jsx";
import Settings from "./components/settings.jsx";
import Call from "./components/call.jsx";
import injectTapEventPlugin from "react-tap-event-plugin";
import Store from "./store/UIstore.js";
import NotFound from "./components/NotFound.jsx";
// import requireAuth from "auth.js";

// require("style!css!foundation-sites/dist/foundation.min.css");

// app.scss
require("style!css!sass!applicationStyles");
// require("style!css!sass!snowStyle");
// require("style!css!sass!coreStyle");
// require("./styles/app.scss");

// require("style!css!sass!homepage");

// $(document).foundation();
injectTapEventPlugin();

// const NotFound = () => <h1>404.. This page is not found!</h1>;
function requireVerification(nextState, replace)  {
var userInfo = JSON.parse(localStorage.getItem("userInfo"));

if(userInfo){
if(userInfo.id){
  console.log("This is token ",userInfo.id);
}  
}else{
  replace({ pathname: "/login" });
  
}

};

ReactDOM.render(
  //Props passed
  // <Router history={hashHistory}>
  <Router history={browserHistory}>
    <Route path="/" component={Main} onEnter={requireVerification}>
      {' '}
    </Route>
    <Route path="/login" component={Login} />
    <Route path="/signup" component={Signup} />
    <Route
      path="/settings"
      component={Settings}
      onEnter={requireVerification}
    />
    <Route
      path="/call/:roomToJoin"
      component={Call}
      onEnter={requireVerification}
    />
    <Route
      path="/videoCall/:roomToJoin"
      component={videoCall}
      onEnter={requireVerification}
    />
    <Route path="*" component={NotFound} />
  </Router>,
  document.getElementById('app')
);

// <Route path="*" component={NotFound} />

//           <Route path="/special" component={Main} onEnter={requireAuth} />

// <Route path="app" component={Main} onEnter={requireAuth}  />
