import React, { Component } from "react";
import { Header, Action, Options, AddOptions } from "../Pagemap";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: ["option one", "option two", "option three"],
    };
  }

  handleRemoveAllBtn = () => {
    this.setState({ options: [] });
  };
  render() {
    return (
      <div>
        <Header />
        <Action hasoption={this.state.options.length > 0} />

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
