import React from "react";
import "./Chooseus.css";
function Chooseus() {
  const data = [
    {
      image: "/img/doctor.png",
      title: "About Us",
      description:
        "We are a group of certified orthopedic surgeons, currently in practice, who are available to you for a second opinion. Get the added benefit of another orthopedic surgeon weighing in on your situation with his/her knowledge and expertise.",
    },
    {
      image: "/img/choose-us-img2.png",
      title: "Quick and Simple",
      description:
        "Skip the waiting room and join us. The steps are easy. All you have to do is provide information regarding your orthopedic problem, upload any medical imaging pertinent to your current problem, and receive a thorough diagnosis and treatment or a second opinion if you already have seen an orthopedic surgeon.",
    },
    {
      image: "/img/choose-us-img4.png",
      title: "Amazing Value",
      description:
        "No insurance. No problem. Here at SecondLook Ortho our virtual consultations are designed to replace more expensive visits to a doctor’s office or emergency room. Our payment process is secure and user friendly.",
    },
    {
      image: "/img/choose-us-img2.png",
      title: "Our Health Mission",
      description:
        "SecondLook Ortho was designed to give orthopedic patients the clarity, knowledge and confidence they need to understand their diagnosis and treatment options. Orthopedic surgeon’s opinions may differ based on their background or training. Getting a second opinion can help you feel more confident about your diagnosis and treatment plan. Your medical information is always safe with us. We provide the highest level of security that is HIPAA compliant and encrypted to ensure that your medical information is always safe and protected.",
    },
  ];
  return (
    <>
      <div className="backdiv">
        <h2
          className="heading3"
          style={{ fontFamily: "Montserrat", fontWeight: "600" }}
        >
          Why choose us
        </h2>
        <div className="about_line" style={{ width: "100px" }}></div>
        <div className="chooseus-section">
          {data.map((el) => {
            return (
              <div className="chooseus-wrap">
                <div className="chooseus-img">
                  <img src={el.image}></img>
                </div>

                <div
                  className="content "
                  style={{ textAlign: "left", margin: "0 0" }}
                >
                  <div className="choose_tittle">{el.title}</div>
                  <div className="choose_para_wrapper">
                    <div className="chosse_para">{el.description}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Chooseus;
