import React from "react";
import "./Services.css";
import lock from "../../Assets/images/lock.png";
import girl from "../../Assets/images/girl.png";
import clipbord from "../../Assets/images/clipbord.png";
function Services() {
  const data = [
    {
      title: "HIPAA COMPLIANT",
      description: "ENSURE PRIVACY AND SECUIRTY",
      image: lock,
    },
    {
      title: "EXPERT CONSULTANT",
      description: "ENSURE PRIVACY AND SECUIRTY",
      image: girl,
    },
    {
      title: "NO INSURANCE NO PROBLEM",
      description: "ENSURE PRIVACY AND SECUIRTY",
      image: clipbord,
    },
  ];

  return (
    <div className="backgroundclr">
      {data.map((el) => (
        <div className="inner-conntent">
          <div class="criclediv">
            <img src={el.image}></img>
          </div>
          <div className="content service-content">
            <h3 class="headingg">{el.title}</h3>
            <p className="service_paraghaph">{el.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Services;
