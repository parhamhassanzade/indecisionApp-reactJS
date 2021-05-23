import React, { Component } from "react";
import { Header, Action, Options, AddOptions } from "../Pagemap";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: [],
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

  //? handle add option to the option component
  handleAddOption=(option)=>{
    this.setState({ 
      options: this.state.options.concat([option])
    })
  }

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
        <AddOptions handleAddOption={this.handleAddOption}/>
      </div>
    );
  }
}

export default Main;
