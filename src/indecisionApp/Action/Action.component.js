import React, { Component } from "react";
import { Button } from "../../Component/CommenPagemap";
class Action extends Component {
  render() {
    return (
      <div>
        {this.props.hasoption ? (
        <Button
          onclickhandler={this.props.handelPick}
          innerText={"What shoud I DO ?"}
        />
        ) : (
          <p>No Work ToDo</p>
        )}
      </div>
    );
  }
}

export { Action };
