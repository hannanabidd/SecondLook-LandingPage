import React from "react";
import "./Working.css";
function Working() {
  const data = [
    {
      title: "Step 1",
      description:
        "Fill the form and Attach the files related to your medical record",
      image: "/img/how-it-works-1.jpg",
    },
    {
      title: "Step 2",
      description:
        "Select the E-visit type from WRITTEN, Phone Call, or Video Consultation",
      image: "/img/how-it-works-2.jpg",
      image2: "/img/greenarrow.png",
    },
    {
      title: "Step 3",
      description: "Easily Make payments within minutes securely",
      image: "/img/how-it-works-3.jpg",
      image2: "/img/greenarrow.png",
    },
  ];
  return (
    <div id="work">
      <h2
        className="workheading"
        style={{ fontFamily: "Montserrat", fontWeight: "600" }}
      >
        How it work
      </h2>
      <div className="about_line"></div>
      <div className="working">
        {data.map((el) => {
          return (
            <div className="cards">
              <div className="greenarrow">
                <img src={el.image2}></img>
              </div>
              <div className="outr-cricle">
                <img src={el.image}></img>
              </div>

              <div className="content">
                <div
                  class="titleblack"
                  style={{ fontFamily: "poppins", fontWeight: "600" }}
                >
                  {el.title}
                </div>
                <div
                  className="para_black"
                  style={{
                    fontFamily: "Montserrat",
                  }}
                >
                  {el.description}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Working;
