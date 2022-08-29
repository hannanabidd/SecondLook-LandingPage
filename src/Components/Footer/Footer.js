// import { Checkbox, Link } from "@material-ui/core";
import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="main_container">
        <div className="first_div_footer">
          <div className="footer_img">
            <img src="/img/logo1.png" />
          </div>
          <div className="footer_para">
            SecondLook Ortho is HIPAA Compliant and utilizes end-to-end
            encryption to ensure that only you and the person you're
            communicating with can access your photos, video, and documents. We
            don't share or sell personal information.
          </div>
          <div className="social_media">
            <div className="media_item">
              <a href="http://www.facebook.com/">
                <img src="/img/fb.png" />
              </a>
            </div>
            <div className="media_item">
              <a href="http://www.pinterest.com/">
                <img src="/img/pinterest.png" />
              </a>
            </div>

            <div className="media_item_t" />
            <a href="http://www.twitter.com">
              <img src="/img/twitter.png" />
            </a>
          </div>
        </div>
        <div className="sec_div_footer">
          <div className="list_icons">
            <div className="icon_img"></div>
            <div
              className="list"
              style={{
                fontFamily: "Montserrat",
                fontSize: "22px",
                fontWeight: "600",
              }}
            >
              QUICK LINKS
            </div>
          </div>
          <div className="list_icons">
            <div className="icon_img">
              <img src="/img/back.svg" />
            </div>
            <a href="">
              <div className="list">Home</div>
            </a>
          </div>
          <div className="list_icons">
            <div className="icon_img">
              <img src="/img/back.svg" />
            </div>
            <a href="">
              <div className="list">About Us</div>
            </a>
          </div>

          <div className="list_icons">
            <div className="icon_img">
              <img src="/img/back.svg" />
            </div>
            <a href="">
              <div className="list">Contact Us</div>
            </a>
          </div>
          <div className="list_icons">
            <div className="icon_img">
              <img src="/img/back.svg" />
            </div>
            <a href="">
              <div className="list">FaQ'S</div>
            </a>
          </div>
          <div className="list_icons">
            <div className="icon_img">
              <img src="/img/back.svg" />
            </div>
            <a href="">
              <div className="list">Our Team</div>
            </a>
          </div>
          <div className="list_icons">
            <div className="icon_img">
              <img src="/img/back.svg" />
            </div>
            <a href="">
              <div className="list">How it Works</div>
            </a>
          </div>
        </div>
        <div className="third_div">
          <div className="third_heading">Subscribe to our newsletter</div>
          <div className="third_p">
            We do not share your details with 3rd parties
          </div>
          <div className="addres_div">
            <div className="email_label">Email Address</div>
            <input
              className="footer_input"
              text=""
              placeholder="info@company.com"
              style={{ color: "!importantwhite" }}
            />
            <button
              className="arrow_button"
              style={{ width: "35px", marginTop: "7px" }}
            >
              <img src="/img/back.svg" />
            </button>
          </div>
          <div className="check_box">
            <label className="container">
              I agree to the terms and conditions
              <input type="checkbox" defaultChecked="checked" />
              <span className="checkmark" />
            </label>
          </div>
        </div>
      </div>
      {/* <div className="last_div_line"></div> */}
      <p className="div_line_p">Copyright © 2020 SecondlookOrtho.com</p>
    </div>
  );
}

export default Footer;
