import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";

import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

import {
  EffectCards,
  Keyboard,
  Scrollbar,
  Navigation,
  Pagination,
} from "swiper/modules";

// Import images
import img1 from "../assets/img/menu2/1.jpg";
import img2 from "../assets/img/menu2/2.jpg";
import img3 from "../assets/img/menu2/3.jpg";
import img4 from "../assets/img/menu2/4.jpg";
// import img5 from "../assets/img/menu2/5.jpg";
import img6 from "../assets/img/menu2/6.jpg";
import img7 from "../assets/img/menu2/7.jpg";
import img8 from "../assets/img/menu2/8.jpg";
import img9 from "../assets/img/menu2/9.jpg";
import img0 from "../assets/img/menu2/10.jpg";
import img11 from "../assets/img/menu2/11.jpg";
import img12 from "../assets/img/menu2/12.jpg";
import img13 from "../assets/img/menu2/13.jpg";
import img14 from "../assets/img/menu2/14.jpg";
import img15 from "../assets/img/menu2/15.jpg";
import img16 from "../assets/img/menu2/16.jpg";
// import img33 from "../assets/img/menu2/33.jpg";
import img17 from "../assets/img/menu2/17.jpg";
import img18 from "../assets/img/menu2/18.jpg";
import img19 from "../assets/img/menu2/19.jpg";
import img20 from "../assets/img/menu2/20.jpg";
// import img21 from "../assets/img/menu2/21.jpg";
// import img23 from "../assets/img/menu2/23.jpg";
import img22 from "../assets/img/menu2/22.jpg";
import img23 from "../assets/img/menu2/23.jpg";
import img25 from "../assets/img/menu2/25.jpg";
import img24 from "../assets/img/menu2/24.jpg";

const Menu = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Check initial screen size

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <div className="container mx-auto">
        {isSmallScreen ? (
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper "
            style={{
              overflow: "hidden",
            }}
          >
            <SwiperSlide>
              <img
                src={img1}
                loading="lazy"
                alt="Slide 1"
                className="swiper-img"
              />
            </SwiperSlide>
             <SwiperSlide>
              <img
                src={img2}
                loading="lazy"
                alt="Slide 2"
                className="swiper-img"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={img3}
                loading="lazy"
                alt="Slide 3"
                className="swiper-img"
              />
            </SwiperSlide>
             <SwiperSlide>
              <img
                src={img4}
                loading="lazy"
                alt="Slide 4"
                className="swiper-img"
              />
            </SwiperSlide>
            {/* <SwiperSlide> 
              <img
                src={img5}
                loading="lazy"
                alt="Slide 5"
                className="swiper-img"
              />
            </SwiperSlide>  */}
            <SwiperSlide>
              <img
                src={img6}
                loading="lazy"
                alt="Slide 6"
                className="swiper-img"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={img7}
                loading="lazy"
                alt="Slide 7"
                className="swiper-img"
              />
            </SwiperSlide> 
             <SwiperSlide>
              <img
                src={img8}
                loading="lazy"
                alt="Slide 8"
                className="swiper-img"
              />
            </SwiperSlide> 
            <SwiperSlide>
              <img
                src={img9}
                loading="lazy"
                alt="Slide 9"
                className="swiper-img"
              />
            </SwiperSlide> 
            <SwiperSlide>
              <img
                src={img0}
                loading="lazy"
                alt="Slide 0"
                className="swiper-img"
              />
            </SwiperSlide>
             <SwiperSlide>
              <img
                src={img11}
                loading="lazy"
                alt="Slide 0"
                className="swiper-img"
              />
            </SwiperSlide> 
           <SwiperSlide>
              <img
                src={img12}
                loading="lazy"
                alt="Slide 0"
                className="swiper-img"
              />
            </SwiperSlide> 
            <SwiperSlide>
              <img
                src={img13}
                loading="lazy"
                alt="Slide 0"
                className="swiper-img"
              />
            </SwiperSlide> 
            <SwiperSlide>
              <img
                src={img14}
                loading="lazy"
                alt="Slide 0"
                className="swiper-img"
              />
            </SwiperSlide> 
             <SwiperSlide>
              <img
                src={img15}
                loading="lazy"
                alt="Slide 0"
                className="swiper-img"
              />
            </SwiperSlide> 
            <SwiperSlide>
              <img
                src={img16}
                loading="lazy"
                alt="Slide 0"
                className="swiper-img"
              />
            </SwiperSlide> 
            {/* <SwiperSlide>
              <img
                src={img33}
                loading="lazy"
                alt="Slide 0"
                className="swiper-img"
              />
            </SwiperSlide>   */}
            <SwiperSlide>
              <img
                src={img17}
                loading="lazy"
                alt="Slide 0"
                className="swiper-img"
              />
            </SwiperSlide> 
            <SwiperSlide>
              <img
                src={img18}
                loading="lazy"
                alt="Slide 0"
                className="swiper-img"
              />
            </SwiperSlide> 
             <SwiperSlide>
              <img
                src={img19}
                loading="lazy"
                alt="Slide 0"
                className="swiper-img"
              />
            </SwiperSlide> 
            <SwiperSlide>
               <img
                src={img20}
                loading="lazy"
                alt="Slide 0"
                className="swiper-img"
              />
            </SwiperSlide> 
            {/* <SwiperSlide>
              <img
                src={img21}
                loading="lazy"
                alt="Slide 0"
                className="swiper-img"
              />
            </SwiperSlide>  */}
            <SwiperSlide>
              <img
                src={img22}
                loading="lazy"
                alt="Slide 0"
                className="swiper-img"
              />
            </SwiperSlide>  
            <SwiperSlide>
              <img
                src={img23}
                loading="lazy"
                alt="Slide 0"
                className="swiper-img"
              />
            </SwiperSlide> 
            <SwiperSlide>
              <img
                src={img25}
                loading="lazy"
                alt="Slide 0"
                className="swiper-img"
              />
            </SwiperSlide> 
            <SwiperSlide>
              <img
                src={img24}
                loading="lazy"
                alt="Slide 0"
                className="swiper-img"
              />
            </SwiperSlide> 
          </Swiper>
        ) : (
          <Swiper
            slidesPerView={1}
            centeredSlides={false}
            slidesPerGroupSkip={1}
            grabCursor={true}
            keyboard={{
              enabled: true,
            }}
            breakpoints={{
              769: {
                slidesPerView: 2,
                slidesPerGroup: 2,
              },
            }}
            scrollbar={true}
            // navigation={true}
            pagination={{
              clickable: true,
            }}
            modules={[Keyboard, Scrollbar, Navigation, Pagination]}
            className="mySwiper"
            style={{
              overflow: "hidden",
              width: "100%",
              height: "100%",
            }}
          >
            <SwiperSlide>
              <img
                src={img1}
                loading="lazy"
                alt="Slide 1"
                className="swiper-img"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={img2}
                loading="lazy"
                alt="Slide 2"
                className="swiper-img"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={img3}
                loading="lazy"
                alt="Slide 3"
                className="swiper-img"
              />
            </SwiperSlide>
             <SwiperSlide>
              <img
                src={img4}
                loading="lazy"
                alt="Slide 4"
                className="swiper-img"
              />
            </SwiperSlide>
            {/* <SwiperSlide>
              <img
                src={img5}
                loading="lazy"
                alt="Slide 5"
                className="swiper-img"
              />
            </SwiperSlide>  */}
            <SwiperSlide>
              <img
                src={img6}
                loading="lazy"
                alt="Slide 6"
                className="swiper-img"
              />
            </SwiperSlide>
             <SwiperSlide>
              <img
                src={img7}
                loading="lazy"
                alt="Slide 7"
                className="swiper-img"
              />
            </SwiperSlide>
             <SwiperSlide>
              <img
                src={img8}
                loading="lazy"
                alt="Slide 8"
                className="swiper-img"
              />
            </SwiperSlide> 
           <SwiperSlide>
              <img
                src={img9}
                loading="lazy"
                alt="Slide 9"
                className="swiper-img"
              />
            </SwiperSlide> 
            <SwiperSlide>
              <img
                src={img0}
                loading="lazy"
                alt="Slide 0"
                className="swiper-img"
              />
            </SwiperSlide>
             <SwiperSlide>
              <img
                src={img11}
                loading="lazy"
                alt="Slide 0"
                className="swiper-img"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={img12}
                loading="lazy"
                alt="Slide 0"
                className="swiper-img"
              />
            </SwiperSlide> 
            <SwiperSlide>
              <img
                src={img13}
                loading="lazy"
                alt="Slide 0"
                className="swiper-img"
              />
            </SwiperSlide> 
            <SwiperSlide>
              <img
                src={img14}
                loading="lazy"
                alt="Slide 0"
                className="swiper-img"
              />
            </SwiperSlide> 
            <SwiperSlide>
              <img
                src={img15}
                loading="lazy"
                alt="Slide 0"
                className="swiper-img"
              />
            </SwiperSlide> 
            <SwiperSlide>
              <img
                src={img16}
                loading="lazy"
                alt="Slide 0"
                className="swiper-img"
              />
            </SwiperSlide> 
            {/* <SwiperSlide>
              <img
                src={img33}
                loading="lazy"
                alt="Slide 0"
                className="swiper-img"
              />
            </SwiperSlide>   */}
            <SwiperSlide>
              <img
                src={img17}
                loading="lazy"
                alt="Slide 0"
                className="swiper-img"
              />
            </SwiperSlide> 
            <SwiperSlide>
              <img
                src={img18}
                loading="lazy"
                alt="Slide 0"
                className="swiper-img"
              />
            </SwiperSlide> 
             <SwiperSlide>
              <img
                src={img19}
                loading="lazy"
                alt="Slide 0"
                className="swiper-img"
              />
            </SwiperSlide> 
             <SwiperSlide>
              <img
                src={img20}
                loading="lazy"
                alt="Slide 0"
                className="swiper-img"
              />
            </SwiperSlide> 
            {/* <SwiperSlide>
              <img
                src={img21}
                loading="lazy"
                alt="Slide 0"
                className="swiper-img"
              />
            </SwiperSlide>  */}
            <SwiperSlide>
              <img
                src={img22}
                loading="lazy"
                alt="Slide 0"
                className="swiper-img"
              />
            </SwiperSlide>  
            <SwiperSlide>
              <img
                src={img23}
                loading="lazy"
                alt="Slide 0"
                className="swiper-img"
              />
            </SwiperSlide> 
            <SwiperSlide>
              <img
                src={img25}
                loading="lazy"
                alt="Slide 0"
                className="swiper-img"
              />
            </SwiperSlide> 
            <SwiperSlide>
              <img
                src={img24}
                loading="lazy"
                alt="Slide 0"
                className="swiper-img"
              />
            </SwiperSlide> 
          </Swiper>
        )}
      </div>
    </>
  );
};

export default Menu;
