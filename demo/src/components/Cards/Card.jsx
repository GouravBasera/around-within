import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Card = () => {
  const Data = [
    {
      imageFile: "../assets/Rectangle649.png",
      heading: "Test",
      description: "Test",
    },
    {
      imageFile: "assets/Rectangle649.png",
      heading: "Test 2",
      description: "Test 2",
    },
    {
      imageFile: "assets/Rectangle649.png",
      heading: "Test 3",
      description: "Test 3",
    },
    {
      imageFile: "assets/Rectangle649.png",
      heading: "Test 4",
      description: "Test 4",
    },
    {
      imageFile: "assets/Rectangle649.png",
      heading: "Test 5",
      description: "Test 5",
    },
    {
      imageFile: "assets/Rectangle649.png",
      heading: "Test 6",
      description: "Test 6",
    },
    {
      imageFile: "assets/Rectangle649.png",
      heading: "Test 7",
      description: "Test 7",
    },
  ];

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };

  return (
    <div className="w-3/4 -auto">
      <div className="mt-20">
      <Slider {...settings}>
      {Data.map((item) => (
        <div>
          <div className="h-56 rounded-t-xl flex flex-col p-relative justify-center items-center gap-4 p-4">
            <img src={item.imageFile} alt="" />
          </div>
          <div className="flex flex-col justify-center items-center ">
            <p className="text-xl font-bold">{item.heading}</p>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
      </Slider>
      </div>
    </div>
  );
};