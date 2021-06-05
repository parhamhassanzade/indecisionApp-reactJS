import React, { Component } from "react";
import { Button } from "../../Component/CommenPagemap";
import { Option } from "../Pagemap";
class Options extends Component {
  render() {
    return (
      <>
        <header>
          <span>
            <p style={{ display: "inline" }}>Your Options</p>
            <Button
              onclickhandler={this.props.handleRemoveAllBtn}
              innerText={"Remove All"}
            />
          </span>
          {this.props.options.map((option) => (
            <Option
              key={option}
              optionvalue={option}
              handleRemoveSinglejobBtn={this.props.handleRemoveSinglejobBtn}
            />
          ))}
        </header>
      </>
    );
  }
}

export { Options };
