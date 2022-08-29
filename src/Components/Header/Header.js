import React from "react";
import "./Header.css";
// import "bootstrap/dist/css/bootstrap.min.css";

function Header() {
  return (
    <div className="headertop">
      <div className="heading1">
        <div className="headingimgdiv">
          <img src="/img/email.svg" />
        </div>

        <a href="/sign-in">
          <div className="heading_hv"> Provider@secondlookortho.com</div>
        </a>
      </div>
      <div className="headerline"></div>
      <div className="heading1">
        <div className="headingimgdiv">
          <img src="/img/call.svg" />
        </div>
        <div className="heading_hv ">1 (800)840-2046</div>
      </div>
    </div>
  );
}

export default Header;
