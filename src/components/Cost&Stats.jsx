import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const stats = [
  {
    id: 1,
    question: "How much do movers cost?",
    answer: "$492",
    description:
      "Hiring a moving company costs $492 on average. Get your personalized moving quote.",
    link: "#",
  },
  {
    id: 2,
    question: "How long does moving take?",
    answer: "3 hours",
    description: "Movers take 3 hours per job, on average.",
    link: "#",
  },
  {
    id: 3,
    question: "How many movers do I need?",
    answer: "2 movers",
    description:
      "Most people moving hire 2 movers to come out on moving day. Read more about hiring the right number of movers.",
    link: "#",
  },
];

const CustomPrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={`${className} custom-arrow`} onClick={onClick}>
      <FaChevronLeft size={24} className="text-blue-700" />
    </div>
  );
};

const CustomNextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={`${className} custom-arrow`} onClick={onClick}>
      <FaChevronRight size={24} className="text-blue-700" />
    </div>
  );
};

const CostAndStats = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    autoplay: true, // Enables autoplay
    autoplaySpeed: 3000, // Slide transition every 3 seconds
    pauseOnHover: true, // Pause autoplay on hover
    responsive: [
      {
        breakpoint: 1024, // For tablets and small desktops
        settings: {
          slidesToShow: 2, // Show 2 slides at a time
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768, // For mobile devices
        settings: {
          slidesToShow: 1, // Show 1 slide at a time
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Mover Costs And Stats
        </h2>
        <div className="relative">
          <Slider {...settings}>
            {stats.map((stat) => (
              <div key={stat.id} className="p-2 ">
                <div className="bg-white h-[250px] shadow-lg rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {stat.question}
                  </h3>
                  <p className="text-4xl font-bold text-blue-600 mb-4">
                    {stat.answer}
                  </p>
                  <p className="text-gray-600 mb-4">{stat.description}</p>
                  <a href={stat.link} className="text-blue-600 hover:underline">
                    {stat.description.includes("Read more")
                      ? "Read more"
                      : "Get your personalized moving quote"}
                  </a>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default CostAndStats;
