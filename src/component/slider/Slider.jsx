import { useState, useContext } from "react";

import "./slider.css";
import Rating from "./Rating";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
const BookSlider = ({ data }) => {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
    >
      {data.map((item, index) => (
        <SwiperSlide key={index} className="book-slider-item">
          <div className="content">
            <div className="book-slide-item-img">
              <img src={item.image} alt={item.title} />
            </div>
            <h3 className="book-slide-item-title">{item.title}</h3>
            <Rating rating={item.rating.rate} />
            <div className="book-slider-item-price">${item.price}</div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default BookSlider;
