import React, { useState } from "react";
import "./OurTeam.css";
// import icon from "../../assets/images/icon.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

const settings = {
  arrows: true,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  nextArrow: <NextArrow />,
  prevArrow: <PreArrow />,
  responsive: [
    {
      breakpoint: 1366,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },

    {
      breakpoint: 1065,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 320,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        className: "center",
        centerMode: true,
        centerPadding: "125px",
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
const data = [
  {
    image: "/img/orat.jpg",
    title: "Tracye Lawyer, MD, PhD",

    text: "Orthopedic Surgeon, Partner",
  },
  {
    image: "/img/mard.jpg",
    title: "Jesse Chlebeck, MD",
    text: "Orthopedic Surgeon, Partner",
  },
  {
    image: "/img/orat.jpg",
    title: "Tracye Lawyer, MD, PhD",
    text: "Orthopedic Surgeon, Partner",
  },
  {
    image: "/img/orat.jpg",
    title: "Tracye Lawyer, MD, PhD",

    text: "Orthopedic Surgeon, Partner",
  },
  {
    image: "/img/orat.jpg",
    title: "Tracye Lawyer, MD, PhD",

    text: "Orthopedic Surgeon, Partner",
  },
  {
    image: "/img/orat.jpg",
    title: "Tracye Lawyer, MD, PhD",
    text: "Orthopedic Surgeon, Partner",
  },
];
function OurTeam() {
  return (
    <div className="our_team" id="team" style={{}}>
      <div className="our_team_heading">
        <h2
          className="our_heading"
          style={{ fontFamily: "Montserrat", fontWeight: "700" }}
        >
          OUR TEAM
        </h2>
        <div className="faqs_line" style={{ marginTop: "7px" }}></div>
        <p style={{ fontFamily: "poppins", fontWeight: "400" }}>
          Our leader set our global direction,goals and strategies,and support
          nearly 500 team members working in more then 20 countries around the
          world.
        </p>
      </div>
      <div className="slider-wraperr">
        <Slider {...settings} className="min_card">
          {data?.map((el) => {
            console.log(el);
            return (
              <div className="div-center">
                <div className="members">
                  <div className="our_team_member">
                    <div className="orange_tag"></div>
                    <div className="team_member">
                      <div className="orat">
                        <img src={el.image}></img>
                      </div>
                      <div className="social">
                        <div className="item">
                          <img src="/img/Tweeter.png" />
                        </div>
                        <div className="item">
                          <img src="/img/link.png" />
                        </div>
                        <div className="item">
                          <img src="/img/facebook.png" />
                        </div>
                      </div>
                    </div>

                    <h3 className="ortho_heading1_lady">{el.title}</h3>
                    <p className="ortho_heading3">{el.text}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default OurTeam;
function PreArrow(props) {
  const [color, setColor] = useState("#707070");
  const { style, onClick } = props;
  return (
    <div
      className="slick-arrow 
      nextarror
      border-2 
      border-[#707070]
       rounded-full
        z-10
         bg-opacity-30
          h-[40px]
           w-[40px]
            absolute 
            top-[45%] 
            -left-[-2px]
            -right[-2px]
            cursor-pointer 
            hover:bg-opacity-60"
      style={{ ...style, display: "block" }}
      onClick={onClick}
      onMouseEnter={() => setColor("white")}
      onMouseLeave={() => setColor("#707070")}
    >
      <div className=" flex items-center justify-center w-full h-full">
        <MdOutlineArrowBackIos color={color} className="text-[#707070]" />
      </div>
    </div>
  );
}

function NextArrow(props) {
  const { style, onClick } = props;
  const [color, setColor] = useState("#707070");
  return (
    <div
      className="slick-arrow nextarror border-2 
      border-[#707070]
       rounded-full z-10 
        
      -right[-6px] bg-opacity-30 h-[40px] w-[40px] absolute top-[45%] right-0 cursor-pointer hover:bg-opacity-60"
      style={{ ...style, display: "block" }}
      onClick={onClick}
      onMouseEnter={() => setColor("white")}
      onMouseLeave={() => setColor("#707070")}
    >
      <div className="flex items-center justify-center w-full h-full">
        <MdOutlineArrowForwardIos color={color} className="text-[#707070]" />
      </div>
    </div>
  );
}
