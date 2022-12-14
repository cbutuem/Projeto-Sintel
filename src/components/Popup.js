import React from "react";

const Popup = props => {
    return (
      <div className="popup-box">
        <div className="box">
          <span className="close-icon" onClick={props.handleClose}>x</span>
          <span class= "check_pop">{props.content}</span>
        </div>
      </div>
    );
  };
 
  export default Popup;
