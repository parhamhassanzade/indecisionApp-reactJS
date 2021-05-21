import React, { Component } from "react";
import { Button } from "../../Component/CommenPagemap";
class AddOptions extends Component {
  handleAddOptionbtn(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();

    if (option) {
      alert(option);
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
