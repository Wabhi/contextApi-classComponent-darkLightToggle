import React, { Component } from "react";
import DisplayBoard from "./DisplayBoard";
import BetContextProvider from "./BetContext";
import ChangeTheme from "./changeTheme";

export default class App extends Component {
  render() {
    return (
      <div>
        <BetContextProvider>
          <DisplayBoard />
          <ChangeTheme />
        </BetContextProvider>
      </div>
    );
  }
}
