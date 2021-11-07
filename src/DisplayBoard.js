import React, { Component } from "react";
import { BetContext } from "./BetContext";
import "./index.css";

export default class DisplayBoard extends Component {
  constructor() {
    super();
    this.state = {
      stakes: 4,
      unit: 44.56,
      bet_price: 0,
      winning_average: 22
    };
    this.handleStakes = this.handleStakes.bind(this);
    this.handleBetPrice = this.handleBetPrice.bind(this);
    this.handleResetBetPrice = this.handleResetBetPrice.bind(this);
    this.handleResetStakes = this.handleResetStakes.bind(this);
  }

  //event handler for stakes click.
  handleStakes() {
    this.setState({ stakes: this.state.stakes * 2 });
  }

  //event handler for Price click.
  handleBetPrice() {
    this.setState({ bet_price: this.state.bet_price + this.state.unit });
  }

  //event handler for reset price click.
  handleResetBetPrice() {
    this.setState({ bet_price: this.state.bet_price * 0 });
  }

  //event handler for reset stakes click.
  handleResetStakes() {
    this.setState({ stakes: this.state.stakes * 0 + 4 });
  }

  static contextType = BetContext;

  render() {
    const { lightTheme, lightOption, darkOption } = this.context;
    //console.log(lightTheme, lightOption, darkOption);
    const applyTheme = lightTheme ? lightOption : darkOption;
    return (
      <div
        className="main-div"
        style={{ backgroundColor: applyTheme.backgroundHex }}
      >
        <button
          style={{
            color: applyTheme.fontMode,
            backgroundColor: applyTheme.buttonHex
          }}
          className="my-button"
        >
          {this.state.stakes}
        </button>
        <button
          style={{
            color: applyTheme.fontMode,
            backgroundColor: applyTheme.buttonHex
          }}
          className="my-button"
        >
          {this.state.unit}
        </button>
        <button
          style={{
            color: applyTheme.fontMode,
            backgroundColor: applyTheme.buttonHex
          }}
          className="my-button"
        >
          {this.state.bet_price}
        </button>
        <button
          style={{
            color: applyTheme.fontMode,
            backgroundColor: applyTheme.buttonHex
          }}
          className="my-button"
        >
          {this.state.winning_average}
        </button>
        <div className="sub-div">
          <button
            style={{
              color: applyTheme.fontMode,
              backgroundColor: applyTheme.buttonHex
            }}
            className="bottom-button"
            onClick={this.handleStakes}
          >
            Increase Stakes
          </button>
          <button
            style={{
              color: applyTheme.fontMode,
              backgroundColor: applyTheme.buttonHex
            }}
            className="bottom-button"
            onClick={this.handleBetPrice}
          >
            Increase Bet_Price
          </button>
          <button
            style={{
              color: applyTheme.fontMode,
              backgroundColor: applyTheme.buttonHex
            }}
            className="bottom-button"
            onClick={this.handleResetStakes}
          >
            Reset Stakes
          </button>
          <button
            style={{
              color: applyTheme.fontMode,
              backgroundColor: applyTheme.buttonHex
            }}
            className="bottom-button"
            onClick={this.handleResetBetPrice}
          >
            Reset Bet_Price
          </button>
        </div>
      </div>
    );
  }
}
