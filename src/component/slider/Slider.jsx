import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./slider.css";
import { Pagination, Navigation, Autoplay } from "swiper";
import { Rating } from "@mui/material";

const BookSlider = ({ data }) => {
  const [swiperRef, setSwiperRef] = useState(null);

  const groupedData = [];
  for (let i = 0; i < data.length; i += 3) {
    groupedData.push(data.slice(i, i + 3));
  }

  return (
    <Swiper
      onSwiper={setSwiperRef}
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{ clickable: true }}
      navigation={true}
      modules={[Navigation, Autoplay]}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        600: {
          slidesPerView: 2,
        },
        900: {
          slidesPerView: 3,
        },
      }}
      className="mySwiper"
    >
      {data.map((item, index) => (
        <SwiperSlide key={item.id || index}>
          <div className="book-card">
            <div className="book-slide-item-img">
              <img src={item.image} alt={item.title} />
            </div>
            <h3 className="book-slide-item-title">{item.title}</h3>
            <Rating value={item.rating?.rate || 0} readOnly />
            <div className="book-slider-item-price">${item.price}</div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default BookSlider;
