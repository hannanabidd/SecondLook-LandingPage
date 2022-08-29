import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
// import Image from "../../assets/images/profile-avatar.jpg";
// import enter from "../../assets/images/enter.png";
// import { useDispatch, useSelector } from "react-redux";
// import { imageURL } from "../../api/index";
function Navbar() {
  const moveToDiv = (id) => {
    const el = document.getElementById(id);
    el && el.scrollIntoView({ block: "start", behavior: "smooth" });
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <a class="navbar-brand" href="#" style={{ marginBottom: "5px" }}>
          <img className="logo" src="/img/logo1.png"></img>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ outline: "none" }}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
          style={{
            justifyContent: "center",
            height: "69px",
          }}
        >
          <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active activebtn "
                aria-current="page"
                to={"/"}
                onClick={() => moveToDiv("home")}
              >
                HOME
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                to={"/"}
                onClick={() => moveToDiv("work")}
              >
                HOW IT WORKS
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to={"/"}
                onClick={() => moveToDiv("about")}
              >
                ABOUT US
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to={"/"}
                onClick={() => moveToDiv("faq")}
              >
                FAQS
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to={"/"}
                onClick={() => moveToDiv("team")}
              >
                OUR TEAM
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to={"/"}
                onClick={() => moveToDiv("contact")}
              >
                CONTACT US
              </Link>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/Blogs">
                BLOGS
              </a>
            </li>
            <div className="nav_line"></div>
            <li className="nav-item">
              <a className="nav-link" href="/">
                LOGIN
              </a>
            </li>
          </ul>

          {/* <div className="nav_buttons" style={{ gap: "10px" }}>
            {auth ? (
              <button class="profile-dropdown">
                {isAuthenticated && <span>{`${firstName} ${lastName}`} </span>}
                <img
                  src={
                    user?.patient?.profilePicture
                      ? `${imageURL}/${user?.patient?.profilePicture}`
                      : Image
                  }
                  className="avatar-img"
                  alt=""
                />
                <div class="dropdown-content">
                  <Link to="/dashboard">
                    <button className="dashboard-link">Dashboard</button>
                  </Link>
                  <button className="signin-dropdown" onClick={LogOut}>
                    Logout
                  </button>
                </div>
              </button>
            ) : (
              <div>
                <Link to="/sign-in">
                  <button
                    className="login"
                    style={{
                      width: "87px",
                      height: "36px",
                      marginLeft: "13px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexWrap: "wrap",
                      }}
                    >
                      <img
                        style={{
                          width: "16px",
                          height: "14px",
                          paddingRight: "3px",
                        }}
                        src={enter}
                      ></img>
                      <text> log</text>
                      <text style={{ paddingLeft: "3px" }}>In</text>
                    </div>
                  </button>
                </Link>
              </div>
            )}
          </div> */}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
