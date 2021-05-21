import React, { Component } from "react";
import { Button } from "../../Component/CommenPagemap";
import { Option } from "../Pagemap";
class Options extends Component {
  handleRemoveAllBtn () {
    alert("remove all works");
  };

  render() {
    return (
      <>
        <header>
          <span>
            <p style={{ display: "inline" }}>Your Options</p>
            <Button
              onclickhandler={this.handleRemoveAllBtn}
              innerText={"Remove All"}
            />
          </span>
          {this.props.options.map((option) => (
            <Option key={option} optionvalue={option} />
          ))}
        </header>
      </>
    );
  }
}

export { Options };
