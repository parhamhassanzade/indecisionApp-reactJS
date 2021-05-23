import React, { Component } from "react";
import { Header, Action, Options, AddOptions } from "../Pagemap";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: ["option one", "option two", "option three"],
    };
  }

  //?remove all jobs
  handleRemoveAllBtn = () => {
    this.setState({ options: [] });
  };

  //?pick job from options
  handelPick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const job = this.state.options[randomNum];
    alert(job);
  };

  render() {
    return (
      <div>
        <Header />
        <Action
          handelPick={this.handelPick}
          hasoption={this.state.options.length > 0}
        />
        <Options
          handleRemoveAllBtn={this.handleRemoveAllBtn}
          options={this.state.options}
        />
        <AddOptions />
      </div>
    );
  }
}

export default Main;
