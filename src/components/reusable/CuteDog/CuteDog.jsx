import React from "react";
import "./cuteDog.css";

const CuteDog = () => {
  return (
    <div className="dog-container">
      <div className="dog">
        <div className="ears-left dog-ears"></div>
        <div className="ears-right dog-ears"></div>

        <div className="dog-head">
          <div className="dog-eyes"></div>
          <div className="dog-mouth">
            <div className="dog-nose"></div>
            <div className="dog-tongue"></div>
          </div>
        </div>
        <div className="dog-tail"></div>
        <div className="dog-body">
          <div className="dog-foot"></div>
        </div>
        <div className="ball"></div>
      </div>
    </div>
  );
};

export default CuteDog;
