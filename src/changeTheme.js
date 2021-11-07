import React, { Component } from "react";
import { BetContext } from "./BetContext";

class ChangeTheme extends Component {
  static contextType = BetContext;
  render() {
    const { changeTheme } = this.context;
    return <button onClick={changeTheme}>theme Toggle</button>;
  }
}
export default ChangeTheme;
