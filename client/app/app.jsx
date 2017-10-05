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
import injectTapEventPlugin from "react-tap-event-plugin";
import Store from "./store/UIstore.js";
import NotFound from "./components/NotFound.jsx";
//load foundation

require("style!css!foundation-sites/dist/foundation.min.css");

// app.scss
// require("style!css!sass!applicationStyles");
// require("style!css!sass!snowStyle");
// require("style!css!sass!coreStyle");

// require("style!css!sass!homepage");

$(document).foundation();
injectTapEventPlugin();

// const NotFound = () => <h1>404.. This page is not found!</h1>;

ReactDOM.render(
  //Props passed
  // <Router history={hashHistory}>
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      {" "}
    </Route>
    <Route path="/login" component={Login} />
    <Route path="/signup" component={Signup} />
    <Route path="*" component={NotFound} />
  </Router>,
  document.getElementById("app")
);

// <Route path="*" component={NotFound} />

//           <Route path="/special" component={Main} onEnter={requireAuth} />

// <Route path="app" component={Main} onEnter={requireAuth}  />
