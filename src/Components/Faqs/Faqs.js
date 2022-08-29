import React, { useState } from "react";
// import What from "../FaQs pages/Whatscenlookortho";
import Pricing from "../FaQs pages/Pricing";
import General from "../FaQs pages/General";
import Insurance from "../FaQs pages/Insurance";
import Security from "../FaQs pages/Security";
import "./Faqs.css";
function Faqs() {
  const [active, setactive] = useState(1);

  const renderComponents = () => {
    switch (active) {
      case 1:
        return <NewComponent />;
      case 2:
        return <Pricing />;
      case 3:
        return <Insurance />;
      case 4:
        return <Security />;
      case 5:
        return <General />;
    }
  };

  const NewComponent = () => {
    return (
      <>
        <div className="medical_second_opinions">
          <h4 className="heading_scondortho">Medical Second Opinions?</h4>
          <p className="orthopara">
            It has been shown that approximately 30% of orthopedic surgical
            patients seek a second opinion. There concerns did not stem from any
            incompetence displayed on the part of the original surgeon, however
            a level of dissatisfaction was present due to an insufficient
            exchange of information and/or communication about their medical
            condition/treatment plan.
            <br />
            <br /> If you are at all concerned with undergoing a surgical
            procedure or want to find out more about your condition from an
            alternative perspective, a second opinion is highly recommended.
            <br />
            <br /> If you are considering orthopedic surgery, you should know
            all of your options. While all orthopedic surgeons may have similar
            education, their experience can vary greatly. Before you have
            orthopedic surgery, invest the time and money in a second opinion to
            make sure you are making the right choice.
            <br />
            <br /> It never hurts to have a second opinion. Different surgeons
            may have different approaches to obtaining the same results. It
            doesn’t necessarily mean that one method is right or wrong, but one
            treatment may be better for the specific patient. You want a surgeon
            who is considering your lifestyle and history, treating you as a
            person, employing the latest proven technology. Getting a new
            perspective with a second opinion may give you other treatment or
            surgery options or confirm you are making the right choice.
          </p>
        </div>
        <div className="orthopedic_sence">
          <h4 className="heading_scondortho">
            When does an Orthopedic second opinion make sense?
          </h4>
          <p className="orthopara">
            -when your doctor doesn’t have the required specialist knowledge for
            your condition <br></br>
            <br></br>-when various doctors have given you different
            recommendations and you need help making a decision <br></br>
            <br></br>-when you haven’t received a clear diagnosis or therapy
            recommendation <br></br>
            <br></br>-when your surgeon has recommended a major operation and
            you want to make sure that it’s the best way to help you.<br></br>
            <br></br> -when you feel that you haven’t been given enough
            information about your planned treatment<br></br>
            <br></br> -when the suggested treatment promises no significant
            improvement to your condition<br></br>
            <br></br>
            -when you want to find out if there are other treatment options you
            can pursue
          </p>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="faqs" id="faq">
        <h2
          className="faqs_title"
          style={{ fontFamily: "Montserrat", fontWeight: "700" }}
        >
          FAQ's
        </h2>
        <div className="faqs_line"></div>
        <p
          className="faqs_heading"
          style={{ fontFamily: "poppins", fontWeight: "600" }}
        >
          Looking for answers? We are always happy to help/advice to your
          specific queries
        </p>

        <div className="list_items">
          <button
            onClick={() => setactive(1)}
            className={active === 1 ? "itemButtonActive" : "itemButton"}
            style={{ fontFamily: "Montserrat", fontWeight: "700" }}
          >
            General
          </button>
          <button
            onClick={() => setactive(2)}
            className={active === 2 ? "itemButtonActive" : "itemButton"}
            style={{ fontFamily: "Montserrat", fontWeight: "700" }}
          >
            Pricing
          </button>
          <button
            on
            onClick={() => setactive(3)}
            className={active == 3 ? "itemButtonActive" : "itemButton"}
            style={{ fontFamily: "Montserrat", fontWeight: "700" }}
          >
            Insurance
          </button>
          <button
            onClick={() => setactive(4)}
            className={active === 4 ? "itemButtonActive" : "itemButton"}
            style={{ fontFamily: "Montserrat", fontWeight: "700" }}
          >
            Security & Privacy
          </button>
          <button
            onClick={() => setactive(5)}
            className={active === 5 ? "itemButtonActive" : "itemButton"}
            style={{ fontFamily: "Montserrat", fontWeight: "700" }}
          >
            What is SecondLook Ortho?
          </button>
        </div>
        <div className="scendlookortho_data">{renderComponents()}</div>
        <div className="absolute_team_tag"></div>
      </div>
    </>
  );
}

export default Faqs;
