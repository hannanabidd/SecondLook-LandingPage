import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import React from "react";
import "./Contact.css";
import Swal from "sweetalert2";
// import { useMutation } from "react-query";
// import { postContactUs } from "../../../api/index";
import { Link } from "react-router-dom";

function Contact() {
  const LoginValidationSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "too short")
      .max(50, "to large")
      .required("Name is required"),
    email: Yup.string()
      .email()
      .min(2, "Too Short! ")
      .max(50, "Too Long!")
      .required("Email is required"),
    phoneNumber: Yup.number()
      .min(10, "to short")
      .max(200000000000000000, "to large")
      .required("phone number is required"),
    message: Yup.string().required("Messgae is required"),
  });

  const TextArea = ({ field, form, ...props }) => {
    return <textarea {...field} {...props} />;
  };

  //   const { mutate } = useMutation(postContactUs, {
  //     onSuccess: (data) => {
  //       Swal.fire({
  //         position: "top-end",
  //         icon: "success",
  //         title: "Contact Us Form Submitted Successfully!!!",
  //         showConfirmButton: true,
  //         timer: 2000,
  //       });
  //       window.location.reload();
  //     },
  //     onError: (error) => {
  //       Swal.fire({
  //         position: "top-end",
  //         icon: "error",
  //         title: "Contact Us Form Failed!!!",
  //         text: error?.response?.data?.message,
  //         showConfirmButton: true,
  //         timer: 2000,
  //       });
  //     },
  //   });

  return (
    <div className="contactus" id="contact">
      <h2
        className="contactus_heading"
        style={{ fontFamily: "Montserrat", fontWeight: "700" }}
      >
        Ask us a Question
      </h2>
      <div className="faqs_line" style={{ marginTop: "12px" }}></div>
      <p style={{ fontFamily: "poppins", fontWeight: "400" }}>
        Just send us your questions & concerns. We'll give you the help you
        need.
      </p>
      <Formik
      // initialValues={{
      //   name: "",
      //   email: "",
      //   phoneNumber: "",
      //   message: "",
      // }}
      // validationSchema={LoginValidationSchema}
      // onSubmit={(values, { setSubmitting }) => {
      //   try {
      //     mutate(values);
      //     setSubmitting(false);
      //   } catch (e) {
      //     console.log(e);
      //   }
      // }}
      >
        {/* {({
          errors,
          touched,
          values,
          handleSubmit,
          isSubmitting,
          handleChange,
        }) => ( */}
        {/* <Form onSubmit={handleSubmit} className="Contact-form"> */}
        <Form className="Contact-form">
          <img className="salogun" src="/img/salogun.png" />
          <div className="text_area">
            <div className="input_div1">
              <Field
                name="name"
                className="form_data"
                placeholder="Your Name"
                // onChange={handleChange}
                // value={values.name}
              />

              {/* {errors.name && touched.name && (
                <div style={{ color: "red", margin: 0 }}>{errors.name}</div>
              )} */}
              <Field
                style={{
                  fontFamily: "poppins",
                  fontWeight: "400",
                  marginTop: "25px",
                }}
                name="email"
                type="text"
                className="form_data"
                placeholder="Your Email"
                // onChange={handleChange}
                // value={values.email}
              />
              {/* {errors.name && touched.email && (
                <div style={{ color: "red", margin: 0 }}>{errors.email}</div>
              )} */}
              <Field
                style={{
                  fontFamily: "poppins",
                  fontWeight: "400",
                  marginTop: "25px",
                }}
                name="phoneNumber"
                className="form_data"
                text="Phone Number"
                placeholder="Phone Number"
                // onChange={handleChange}
                type="number"
                // value={values.phoneNumber}
              />
              {/* {errors.phoneNumber && touched.phoneNumber && (
                <div style={{ color: "red", margin: 0 }}>
                  {errors.phoneNumber}
                </div>
              )} */}
            </div>

            <div className="Massage">
              <Field
                style={{ fontFamily: "poppins", fontWeight: "400" }}
                component={TextArea}
                name="message"
                className="Massage_area"
                placeholder="Your Message"
                // onChange={handleChange}
                // value={values.message}
              />
              {/* 
              {errors.message && (
                <div style={{ color: "red", margin: 0 }}>{errors.message}</div>
              )} */}
              <div className="dds">
                <div className="dd">
                  <a>
                    <button className="themebutton">GET STARTED</button>
                  </a>
                  <Link to="/sign-in">
                    <div className="img_wrap">
                      <img
                        src="/img/chevron-right.svg"
                        className="get-started-icon"
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Form>
        {/* )} */}
      </Formik>
    </div>
  );
}

export default Contact;
