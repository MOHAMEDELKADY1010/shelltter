


import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";

import {
  EffectCards,
  Keyboard,
  Scrollbar,
  Navigation,
  Pagination,
} from "swiper/modules";

// Lightbox
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

const images = [
  "/img/menu3/1.jpg",
  
 
];

const Offers = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 🔥 Zoom tracking function
  const handleMove = (e) => {
    const img = e.currentTarget;
    const rect = img.getBoundingClientRect();

    const touch = e.touches [0]

    const x = ((touch.clientX - rect.left) / rect.width) * 100;
    const y = ((touch.clientY - rect.top) / rect.height) * 100;

    img.style.transformOrigin = `${x}% ${y}%`;
    img.style.transform = "scale(2)";
  };

  const resetZoom = (e) => {
    const img = e.currentTarget;
    img.style.transform = "scale(1)";
    img.style.transformOrigin = "center";
  };

  return (
    <div className="container mx-auto">
      <Swiper
        effect={isSmallScreen ? "cards" : "slide"}
        grabCursor={true}
        slidesPerView={isSmallScreen ? 1 : 2}
        spaceBetween={20}
        keyboard={{ enabled: true }}
        pagination={{ clickable: true }}
        modules={[EffectCards, Keyboard, Scrollbar, Navigation, Pagination]}
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <div className="zoom-container">
              <img
                src={img}
                loading="lazy"
                alt={`menu-${i}`}
                className="zoom-img"
                onClick={() => {
                  setIndex(i);
                  setOpen(true);
                }}
                
                
                onTouchMove={handleMove}
                onTouchEnd={resetZoom}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Fullscreen Lightbox */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={images.map((img) => ({ src: img }))}
        index={index}
        plugins={[Zoom]}
      />
    </div>
  );
};

export default Offers;