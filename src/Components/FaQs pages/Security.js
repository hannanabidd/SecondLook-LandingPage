import React from "react";
import "./Security.css";
function Security() {
  return (
    <div className="sec_div">
      <div className="sec_div1">
        <div className="sec_heading">GENERAL HIPAA Compliant</div>
        <div className="sec_para">
          SecondLook Ortho is HIPAA Compliant and utilizes end-to-end encryption
          to ensure that only you and the person you're communicating with can
          access your photos, video, and documents. We don't share or sell
          personal information.
        </div>
      </div>
      <div className="sec_div2">
        <div className="sec_div1">
          <div className="sec_heading">How is data kept secure?</div>
          <div className="sec_para">
            Data is kept secure using HIPAA-compliant servers. The data is
            256-bit encrypted.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Security;
