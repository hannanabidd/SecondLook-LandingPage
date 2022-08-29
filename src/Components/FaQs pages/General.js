import React from "react";
import "./General.css";
function General() {
  return (
    <div className="general">
      <div className="general_div1">
        <div className="general_heading">
          When should you ask for a second opinion?
        </div>
        <div className="general_para">
          - If you are unsure about the diagnosis<br></br> - If you don’t know
          how well a treatment/surgery is going to work <br></br>- If you are
          concerned about the potential outcomes <br></br>- If the
          treatment/surgery is risky or experimental <br></br>- If you would
          like to explore
        </div>
        <div className="general_heading">
          Am I putting my relationship with my current doctor at risk?
        </div>
        <div className="general_para">
          Getting a second opinion is a simple routine part of medicine. In
          fact, your physician may also be seeking one or more additional
          opinions. Doctors ask their colleagues fur consults and
          advice/opinions all the time. Sometimes a fresh pair of eyes and a new
          perspective help if you’ve had a long-standing relationship with a
          patient. Many patients think that seeking a second opinion somehow
          indicates a lack of trust, rather than a desire to confirm what their
          doctor has told them and explore opinions their doctor either might
          not have access to or be aware of.
        </div>
        <div className="general_heading">
          Which joints are included? What about Spine injuries or problems?
        </div>
        <div className="general_para">
          The joints covered include: shoulders, elbows, wrists, hands, fingers,
          hips, knees and ankles Unfortunately, spine injuries are not covered
          for consultations
        </div>
      </div>
      <div className="general_div2">
        <div className="general_heading">
          How long will it take for me to receive my opinion/consultation?
        </div>
        <div className="general_para">
          Once we receive all the information, we will respond within 2 days
        </div>
        <div className="general_heading">Who will review my information?</div>
        <div className="general_para">
          All of your information will be reviewed by a fellowship-trained
          orthopedic surgeon
        </div>
        <div className="general_heading">
          What information will I need to give?
        </div>
        <div className="general_para">
          You will need to provide your name, email, problem area/joint, and a
          brief description of what is going on. Images are very helpful to
          upload for a more thorough assessment. We will accept x-rays, CT and
          MRI. IF you do not have the imaging then a copy of the radiology
          report will work as well.
          <div className="general_heading">
            Do you do orthopedic consultations for children?
          </div>
          <div className="general_para">
            Yes, we do consultations for children. Any children under the age of
            17 years old will need their parents to register for them. Parents
            will need to be present during the audio and video consultations.
          </div>
        </div>
      </div>
    </div>
  );
}

export default General;
