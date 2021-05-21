import React, { Component } from "react";
import { Button } from "../../Component/CommenPagemap";
class Action extends Component {
  actionhandler() {
    alert("hello this is action part");
  }
  

  render() {
    return (
      <div>
        
    
         {this.props.hasoption ? <Button
            onclickhandler={this.actionhandler}
            innerText={"What shoud I DO ?"}
          />: alert("you have no work todo!!")}
       
        
        
      </div>
    );
  }
}

export { Action };
