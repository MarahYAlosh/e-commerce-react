import { useState, useContext } from "react";

import "./slider.css";
import Rating from "./Rating";
import { useSelector } from "react-redux";

const BookSlider = ({ data }) => {
  const categories = useSelector((state) => state.product.categories);

  const [slideIndex, setSlideIndex] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [bookData, setBookData] = useState(null);

  // Handle Click
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex - 1);
    } else {
      setSlideIndex(slideIndex + 1);
    }
  };

  // Handle Modal
  const handleOpenModal = (item) => {
    setOpenModal(true);
    setBookData(item);
  };

  return (
    <div className="book-slider-container">
      {slideIndex >= 0 && (
        <i
          onClick={() => handleClick("left")}
          className="bi bi-chevron-left book-slider-arrow-left"
        ></i>
      )}
      <div
        style={{ transform: `translateX(${slideIndex * -350}px)` }}
        className="book-slider-wrapper"
      >
        {data.map((item) => (
          <div key={item.id} className="book-slide-item">
            <img
              src={item.image}
              alt={item.title}
              className="book-slide-item-img"
            />
            <div style={{ textAlign: "center" }}>
              <h3 className="book-slide-item-title">{item.title}</h3>

              <Rating rating={item.rating.rate} />
              <div className="book-slider-item-price">${item.price}</div>
            </div>
          </div>
        ))}
      </div>
      {slideIndex <= data.length - 1 && (
        <i
          onClick={() => handleClick("right")}
          className="bi bi-chevron-right book-slider-arrow-right"
        ></i>
      )}
    </div>
  );
};

export default BookSlider;
