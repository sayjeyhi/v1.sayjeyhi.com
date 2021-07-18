import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/swiper.min.css"
import "swiper/components/navigation/navigation.min.css"

// import Swiper core and required modules
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper/core"

// install Swiper modules
SwiperCore.use([Autoplay, Navigation, Pagination])

const BooksSlider = () => (
  <Swiper
    className="mySwiper"
    autoplay={{
      delay: 1500,
      disableOnInteraction: true,
      disableOnHover: true,
    }}
    loop
    navigation
  >
    <SwiperSlide>
      <img src="/files/books/react.jpeg" alt="react" />
    </SwiperSlide>
    <SwiperSlide>
      <img src="/files/books/javascript.jpg" alt="javascript" />
    </SwiperSlide>
  </Swiper>
)

export default BooksSlider
