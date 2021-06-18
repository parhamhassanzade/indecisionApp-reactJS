import React, { Component } from "react";
import { ModalPage } from "../../Component/CommenPagemap";
import { Header, Action, Options, AddOptions } from "../Pagemap";
import style from "../MainPage/main.module.scss";
class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: [],
    };
  }

  //?set the data to dom in first render
  componentDidMount() {
    const data = localStorage.getItem("job");
    const jobs = JSON.parse(data);
    if (jobs) {
      this.setState({
        options: jobs,
      });
    }
  }

  //?save data to localstorage after update state
  componentDidUpdate() {
    const json = JSON.stringify(this.state.options);
    localStorage.setItem("job", json);
  }

  //?remove all jobs
  handleRemoveAllBtn = () => {
    this.setState({ options: [] });
  };

  //? remove single job handler
  handleRemoveSinglejobBtn = (optionToDelete) => {
    this.setState({
      options: this.state.options.filter((option) => {
        return( optionToDelete !== option)
      }),
    });
  };

  //?pick job from options
  handelPick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const job = this.state.options[randomNum];
    alert(job);
  };

  //? handle add option to the option component
  handleAddOption = (option) => {
    if (this.state.options.indexOf(option) > -1) {
      return alert("this item is already  ");
    }
    this.setState({
      options: this.state.options.concat([option]),
    });
  };

  render() {
    return (
      <div className={style.body}>
        <Header />
        <Action
          handelPick={this.handelPick}
          hasoption={this.state.options.length > 0}
        />
        <Options
          handleRemoveAllBtn={this.handleRemoveAllBtn}
          options={this.state.options}
          handleRemoveSinglejobBtn={this.handleRemoveSinglejobBtn}
        />
        <AddOptions handleAddOption={this.handleAddOption} />
        <ModalPage />
      </div>
    );
  }
}

export default Main;
