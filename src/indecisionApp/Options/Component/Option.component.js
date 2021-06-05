import React, { Component } from "react";
import { Button } from "../../../Component/CommenPagemap";
class Option extends Component {
  render() {
    const handleRemovejob=()=>{
      this.props.handleRemoveSinglejobBtn(this.props.optionvalue)
    }
    return (
      <div>
        <p style={{ display: "inline" }}>{this.props.optionvalue}</p>
        <Button
          innerText={"remove"}
          onclickhandler={handleRemovejob}
        />
      </div>
    );
  }
}

export { Option };
