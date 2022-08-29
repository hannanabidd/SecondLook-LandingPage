import React from "react";
import { GetStartedButton } from "../GetStartedButton";
import "./Ortho.css";
function Ortho() {
  return (
    <>
      <div className="ortho">
        <div className="ortho-img">
          <img src="/img/salogun.png"></img>
        </div>
        <h2 className="ortho_heading">
          Orthopedic Services that you can trust
        </h2>
        <div className="ortho_line_div"></div>
        <p
          className="ortho_p"
          // style={{ fontFamily: "Poppins", fontWeight: "400" }}
        >
          SecondLook Ortho provides patients a second opinion related to their
          orthopedic injury, diagnosis and/or treatment options. We hope to
          offer clarity and guidance to help you make the best decision on how
          to proceed with your care.
        </p>
        <img className="absoluteimg" src="/img/watermark.png"></img>

        <GetStartedButton />
      </div>
    </>
  );
}

export default Ortho;
