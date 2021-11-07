import React, { Component } from "react";
export const BetContext = React.createContext();

class BetContextProvider extends Component {
  constructor() {
    super();
    this.state = {
      lightTheme: true,
      lightOption: {
        fontMode: "#5c5c5c",
        backgroundHex: "green",
        buttonHex: "blue"
      },
      darkOption: {
        fontMode: "#dbdbdb",
        backgroundHex: "pink",
        buttonHex: "yellow"
      }
    };
    this.changeTheme = this.changeTheme.bind(this);
  }

  changeTheme = () => {
    this.setState({
      lightTheme: !this.state.lightTheme
    });
  };
  render() {
    return (
      <div>
        <BetContext.Provider
          value={{ ...this.state, changeTheme: this.changeTheme }}
        >
          {this.props.children}
        </BetContext.Provider>
      </div>
    );
  }
}
export default BetContextProvider;
