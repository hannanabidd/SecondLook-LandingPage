import React from "react";
import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";

export const GetStartedButton = () => {
  //   const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <div className="dd" style={{ width: "max-content" }}>
      {/* <a href={isAuthenticated ? "/consultation-form" : "/sign-in"}> */}
      <button className="themebutton">GET STARTED</button>
      {/* </a> */}
      <Link to="/sign-in">
        <div className="img_wrap">
          <img src="/img/chevron-right.svg" className="get-started-icon" />
        </div>
      </Link>
    </div>
  );
};
