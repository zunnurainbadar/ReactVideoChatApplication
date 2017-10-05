import React from "react";
import { observer } from "mobx-react";

const style = {
  height: "100%"
};
export default class MainContainer extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {
  }

  render() {
    return (
      <div className="fullWidth fullheight row expanded">
      <div>
      <center><button className="btn btn-lg btn-danger">Button</button></center>
      </div>
        </div>
    );
  }
}
