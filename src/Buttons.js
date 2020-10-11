import React from "react";
import "./Buttons.css";

export default function Buttons() {
  return (
    <div className="Buttons col-12 col-sm-4">
      <div className="btn-group" role="group">
        <button className="mr-2" type="button" id="switch">
          <i className="pe-is-w-degree-fahrenheit"></i>
        </button>
        <button className="ml-2" type="button" id="location">
          <i className="fas fa-map-marker-alt"></i>
        </button>
      </div>
    </div>
  );
}
