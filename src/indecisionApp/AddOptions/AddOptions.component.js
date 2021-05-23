import React, { Component } from "react";
import { Button } from "../../Component/CommenPagemap";
class AddOptions extends Component {
  constructor(props) {
    super(props);
    this.handleAddOptionbtn = this.handleAddOptionbtn.bind(this);
  }
  handleAddOptionbtn(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();

    if (option) {
      this.props.handleAddOption(option);
      e.target.elements.option.value = "";
    }
  }
  render() {
    return (
      <form onSubmit={this.handleAddOptionbtn}>
        <input type="text" name="option" placeholder={"work todo..."} />
        <Button types="submit" innerText={"Add Option"} />
      </form>
    );
  }
}

export { AddOptions };
