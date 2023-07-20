import React from "react";
const InnerComponent = (props) => {
  console.log("InnerCompo", props.InnerText);

  return (
    <div>
      <div className="innerCircle">
        <p className="innertext">{props.InnerText}</p>
      </div>
    </div>
  );
};

export default InnerComponent;
