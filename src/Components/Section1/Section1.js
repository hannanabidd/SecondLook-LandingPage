import React from "react";
import "./Section1.css";
import { GetStartedButton } from "../GetStartedButton";
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
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  nextArrow: <NextArrow />,
  // prevArrow: <PreArrow />,
  responsive: [
    {
      breakpoint: 1366,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },

    {
      breakpoint: 1065,
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

export default function Section1(props) {
  const data = [
    {
      text: "Skip the waiting room",
      title:
        " Get an exclusive online consultation from a certified Orthopedic SURGEON now!.",
    },
    {
      text: "Skip the waiting room",
      title:
        " Get an exclusive online consultation from a certified Orthopedic SURGEON now!.",
    },
    {
      text: "Skip the waiting room",
      title:
        " Get an exclusive online consultation from a certified Orthopedic SURGEON now!.",
    },
  ];

  return (
    <div id="home">
      <Slider {...settings}>
        {data &&
          data.map((item, index) => {
            return (
              <div key={index} className="home">
                <div className="all-Content">
                  <div className="banner-content text">
                    {/* {item.title} */}
                    <text className="tittle_headi">Skip the Waiting Room</text>
                    <h5
                      className="banner-heading tittle"
                      style={{ paddingTop: "10px", stroke: "white" }}
                    >
                      {item.title}
                    </h5>

                    <GetStartedButton />
                  </div>
                </div>
              </div>
            );
          })}
      </Slider>
    </div>
  );
}

function NextArrow(props) {
  const { style, onClick } = props;
  return (
    <div
      className=" 
        z-10 -right[-6px] bg-opacity-30 h-[150px] w-[150px] absolute top-[45%] right-0 cursor-pointer hover:bg-opacity-60"
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <div className="flex items-center justify-center w-full h-full">
        <MdOutlineArrowForwardIos
          style={{ width: "48px", height: "36px" }}
          className="arrow text-[#FFFFFF]"
        />
      </div>
    </div>
  );
}
