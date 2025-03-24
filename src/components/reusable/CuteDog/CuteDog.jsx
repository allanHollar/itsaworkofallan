import React from "react";
import "./cuteDog.css";

const CuteDog = () => {
  return (
    <div class="dog-container">
      <div class="dog">
        <div class="dog-head">
          <div class="ears-left dog-ears"></div>
          <div class="ears-right dog-ears"></div>
          <div class="dog-eyes"></div>
          <div class="dog-mouth">
            <div class="dog-nose"></div>
            <div class="dog-tongue"></div>
          </div>
        </div>
        <div class="dog-tail"></div>
        <div class="dog-body">
          <div class="dog-foot"></div>
        </div>
        <div class="ball"></div>
      </div>
    </div>
  );
};

export default CuteDog;
