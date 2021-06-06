import React, { Component } from "react";
class Button extends Component {
  render() {
    return (
      <>
        <button
          disabled={false}
          type={this.props.types || "button"}
          onClick={this.props.onclickhandler}
        >
          {this.props.innerText}
        </button>
      </>
    );
  }
}

export { Button };
