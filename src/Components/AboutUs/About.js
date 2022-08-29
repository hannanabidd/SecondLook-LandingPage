import React, { useState } from "react";
import "./About.css";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import Rating from "@material-ui/lab/Rating";
// import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { getReviews } from "../../api/index";
// import { useMutation, useQuery, useQueryClient } from "react-query";
const settings = {
  arrows: true,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  nextArrow: <NextArrow />,
  prevArrow: <PreArrow />,
  responsive: [
    {
      breakpoint: 1366,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },

    {
      breakpoint: 390,
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

function About(props) {
  // const [reviews, setReviews] = useState([]);
  // const {
  //   isLoading,
  //   isFetching,
  //   data: allReviews,
  //   isError,
  // } = useQuery("AllReviews", getReviews, {
  //   retry: 1,
  //   retryDelay: 500,
  //   refetchOnWindowFocus: false,
  //   onSuccess: (data) => {
  //     console.log(data?.data);
  //     setReviews(data?.data);
  //   },
  // });

  const data = [
    {
      image: "/img/cap.png",
      title: "Thomas.T",
      rating: 3.9,
      text: "3.9",
      description: `I have had multiple surgeries on my shoulder in the past and still have not gotten back to full function. I was told by my local surgeon that I would need yet another
  shoulder surgery. This would be my 3rd. I spoke to one of the orthopedic surgeons at
                                    Second Look Ortho after loading all of my imaging and I felt so confident at the end
                                    of my video consultation. I had a better understanding of why I failed my previous
                                    surgernies, how this new surgery was going to help and what my imaging showed. They  eased my fears about getting the next surgery and confirmed that my local surgeon
                                    was doing the right thing.`,
    },
    {
      image: "/img/patient02.png",
      title: "Ally J.",
      rating: 4.4,
      text: "4.4",
      description: `I had an MRI done on my knee and was able to look at the written report. I had no
                                    clue what it said. I was referred to an orthopedic specialist but it was going to
                                    take 5 weeks just to get an appointment and I couldn’t wait that long. One of my
                                    friends told me to look up Second Look Ortho and I was very pleased. I easily
                                    attached the MRI report and picked the phone consultation. Within 24 hours, I
                                    received complete clarification of the MRI report, my diagnosis and even treatment
                                    options and it only took 15 minutes. Talk about great service. Thank you Second Look
                                    Ortho!`,
    },
    {
      image: "/img/women1.jpg",
      title: "Maya.",
      rating: 3.2,
      text: "3.2",
      description: `I had an MRI done on my knee and was able to look at the written report. I had no
                                    clue what it said. I was referred to an orthopedic specialist but it was going to
                                    take 5 weeks just to get an appointment and I couldn’t wait that long. One of my
                                    friends told me to look up Second Look Ortho and I was very pleased. I easily
                                    attached the MRI report and picked the phone consultation. Within 24 hours, I
                                    received complete clarification of the MRI report, my diagnosis and even treatment
                                    options and it only took 15 minutes. Talk about great service. Thank you Second Look
                                    Ortho!`,
    },
    {
      image: "/img/patient02.png",
      title: "Ally J.",
      rating: "5.0",
      text: "5.0",

      description: `I had an MRI done on my knee and was able to look at the written report. I had no
                                    clue what it said. I was referred to an orthopedic specialist but it was going to
                                    take 5 weeks just to get an appointment and I couldn’t wait that long. One of my
                                    friends told me to look up Second Look Ortho and I was very pleased. I easily
                                    attached the MRI report and picked the phone consultation. Within 24 hours, I
                                    received complete clarification of the MRI report, my diagnosis and even treatment
                                    options and it only took 15 minutes. Talk about great service. Thank you Second Look
                                    Ortho!`,
    },
    {
      image: "/img/cap.png",
      title: "Thomas.T",
      rating: 5.0,
      text: "5.0",
      description: `I have had multiple surgeries on my shoulder in the past and still have not gotten back to full function. I was told by my local surgeon that I would need yet another
  shoulder surgery. This would be my 3rd. I spoke to one of the orthopedic surgeons at
                                    Second Look Ortho after loading all of my imaging and I felt so confident at the end
                                    of my video consultation. I had a better understanding of why I failed my previous
                                    surgeries, how this new surgery was going to help and what my imaging showed. They  eased my fears about getting the next surgery and confirmed that my local surgeon
                                    was doing the right thing.`,
    },
    {
      image: "/img/patient02.png",
      title: "Ally J.",
      rating: "5.0",
      text: "5.0",

      description: `I had an MRI done on my knee and was able to look at the written report. I had no
                                    clue what it said. I was referred to an orthopedic specialist but it was going to
                                    take 5 weeks just to get an appointment and I couldn’t wait that long. One of my
                                    friends told me to look up Second Look Ortho and I was very pleased. I easily
                                    attached the MRI report and picked the phone consultation. Within 24 hours, I
                                    received complete clarification of the MRI report, my diagnosis and even treatment
                                    options and it only took 15 minutes. Talk about great service. Thank you Second Look
                                    Ortho!`,
    },
    {
      image: "/img/women1.jpg",
      title: "Maya.",
      rating: 3.2,
      text: "3.2",
      description: `I had an MRI done on my knee and was able to look at the written report. I had no
                                    clue what it said. I was referred to an orthopedic specialist but it was going to
                                    take 5 weeks just to get an appointment and I couldn’t wait that long. One of my
                                    friends told me to look up Second Look Ortho and I was very pleased. I easily
                                    attached the MRI report and picked the phone consultation. Within 24 hours, I
                                    received complete clarification of the MRI report, my diagnosis and even treatment
                                    options and it only took 15 minutes. Talk about great service. Thank you Second Look
                                    Ortho!`,
    },
    {
      image: "/img/patient02.png",
      title: "Ally J.",
      rating: "5.0",
      text: "5.0",

      description: `I had an MRI done on my knee and was able to look at the written report. I had no
                                    clue what it said. I was referred to an orthopedic specialist but it was going to
                                    take 5 weeks just to get an appointment and I couldn’t wait that long. One of my
                                    friends told me to look up Second Look Ortho and I was very pleased. I easily
                                    attached the MRI report and picked the phone consultation. Within 24 hours, I
                                    received complete clarification of the MRI report, my diagnosis and even treatment
                                    options and it only took 15 minutes. Talk about great service. Thank you Second Look
                                    Ortho!`,
    },
    {
      image: "/img/cap.png.png",
      title: "Gorge.",
      rating: "1.0",
      description: `I had an MRI done on my knee and was able to look at the written report. I had no
                                    clue what it said. I was referred to an orthopedic specialist but it was going to
                                    take 5 weeks just to get an appointment and I couldn’t wait that long. One of my
                                    friends told me to look up Second Look Ortho and I was very pleased. I easily
                                    attached the MRI report and picked the phone consultation. Within 24 hours, I
                                    received complete clarification of the MRI report, my diagnosis and even treatment
                                    options and it only took 15 minutes. Talk about great service. Thank you Second Look
                                    Ortho!`,
    },
  ];
  // responseive config
  // const responsive = {
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 4,
  //     slidesToSlide: 1, // optional, default to 1.
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 600 },
  //     items: 2,
  //     slidesToSlide: 1, // optional, default to 1.
  //   },
  //   mobile: {
  //     breakpoint: { max: 600, min: 0 },
  //     items: 1,
  //     slidesToSlide: 1, // optional, default to 1.
  //   },
  // };

  return (
    <>
      <div className="about" id="about">
        <h2
          className="about_heading"
          style={{
            fontFamily: "Montserrat",
            fontWeight: "600",
            paddingTop: "50px",
          }}
        >
          What Our Patients Say About Us
        </h2>
        <div
          className="about_line"
          style={{ width: "67px", marginBottom: "50px", marginTop: "6px" }}
        ></div>
        <div className="wrap">
          <Slider {...settings}>
            {data.map((el) => {
              console.log(el);
              return (
                <div>
                  <div
                    style={{
                      paddingTop: "20px",
                      paddingLeft: "10px",
                      paddingRight: "10px",
                    }}
                  >
                    <div className="patient_box">
                      <img
                        class="wrap_img"
                        // src={el?.user?.profilePicture}
                        src={el.image}
                      ></img>

                      <div className="content_box">
                        {/* <div class="titleblack">{`${el?.user?.firstName} ${el?.user?.lastName}`}</div> */}
                        <div class="titleblack">{el.title}</div>

                        <div className="rating">
                          <div className="text_rating">{el.rating}</div>
                          <div>
                            <Rating
                              precision={0.5}
                              name="read-only"
                              value={el.rating}
                              readOnly
                            />
                          </div>
                        </div>
                        <div
                          className="about_paraghap"
                          style={{ overflowY: "scroll" }}
                        >
                          <div className="pharaghap">{el.description}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default About;

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
            -left-[35px]
            -right-[-20px]
            cursor-pointer 
            hover:bg-opacity-60"
      style={{ ...style, display: "block" }}
      onClick={onClick}
      onMouseEnter={(e) => setColor("white")}
      onMouseLeave={() => setColor("#707070")}
    >
      <div className="innerarrow flex items-center justify-center w-full h-full">
        <MdOutlineArrowBackIos color={color} className=" text-[#707070]" />
      </div>
    </div>
  );
}

function NextArrow(props) {
  const [color, setColor] = useState("#707070");
  const { style, onClick } = props;
  return (
    <div
      className="slick-arrow nextarror   border-2 
      border-[#707070]
       rounded-full z-10  
      -right[-10px]
       bg-opacity-30 
       h-[40px]
       w-[40px]
       absolute
      top-[45%] 
      right-0 
       cursor-pointer
       hover:bg-opacity-60"
      style={{ ...style, display: "block" }}
      onClick={onClick}
      onMouseEnter={(e) => setColor("white")}
      onMouseLeave={() => setColor("#707070")}
    >
      <div className="flex items-center justify-center w-full h-full">
        <MdOutlineArrowForwardIos color={color} />
      </div>
    </div>
  );
}
