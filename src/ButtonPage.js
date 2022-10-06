import React from "react";
import "./ButtonPage.css";
import Buttons from "./Button";
function ButtonPage() {
  return (
    <div className="Button_background">
      <div className="Backdrop"></div>
      <div className="Title">
        <img src={require("./Assets/Kleo-logo.png")} alt=""></img>
      </div>
      <Buttons />
    </div>
  );
}

export default ButtonPage;
