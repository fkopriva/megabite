import React from "react";

function MessageBox(props) {
  return (
    <div className={`alert alert-${props.variant || "infor"}`}>
      {props.children}
    </div>
  );
}
export default MessageBox;
