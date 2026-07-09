// import React, { useEffect, useRef, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/effect-cards";

// import "swiper/css/scrollbar";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// import {
//   EffectCards,
//   Keyboard,
//   Scrollbar,
//   Navigation,
//   Pagination,
// } from "swiper/modules";

// // Import images
// // import img20 from "../assets/img/menu1/Brisket.jpg";
// // import img71 from "../assets/img/menu1/71.jpg";
// // import img33 from "../assets/img/menu3/33.jpg";
// import img1 from "../assets/img/menu3/1.jpg";
// import img2 from "../assets/img/menu3/2.jpg";
// import img3 from "../assets/img/menu3/3.jpg";
// import img4 from "../assets/img/menu3/4.jpg";
// import img5 from "../assets/img/menu3/5.jpg";
// import img6 from "../assets/img/menu3/6.jpg";
// import img7 from "../assets/img/menu3/7.jpg";
// import img8 from "../assets/img/menu3/8.jpg";
// import img9 from "../assets/img/menu3/9.jpg";
// import img0 from "../assets/img/menu3/10.jpg";
// import img11 from "../assets/img/menu3/11.jpg";
// import img12 from "../assets/img/menu3/12.jpg";
// import img13 from "../assets/img/menu3/13.jpg";
// import img14 from "../assets/img/menu3/14.jpg";
// import img15 from "../assets/img/menu3/15.jpg";
// import img16 from "../assets/img/menu3/16.jpg";
// import img17 from "../assets/img/menu3/17.jpg";
// import img18 from "../assets/img/menu3/18.jpg";
// import img19 from "../assets/img/menu3/19.jpg";
// import img21 from "../assets/img/menu3/21.jpg";
// import img20 from "../assets/img/menu3/20.jpg";

// const Pasta = () => {
//   const [isSmallScreen, setIsSmallScreen] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsSmallScreen(window.innerWidth < 768);
//     };

//     window.addEventListener("resize", handleResize);
//     handleResize(); // Check initial screen size

//     return () => window.removeEventListener("resize", handleResize);
//   }, []);
//   return (
//     <>
//       <div className="container mx-auto">
//         {isSmallScreen ? (
//           <Swiper
//             effect={"cards"}
//             grabCursor={true}
//             modules={[EffectCards]}
//             className="mySwiper "
//             style={{
//               overflow: "hidden",
//             }}
//           >
//             <SwiperSlide>
//               <img
//                 src={img1}
//                 loading="lazy"
//                 alt="Slide 1"
//                 className="swiper-img"
//               />
//             </SwiperSlide>
//             <SwiperSlide>
//               <img
//                 src={img2}
//                 loading="lazy"
//                 alt="Slide 2"
//                 className="swiper-img"
//               />
//             </SwiperSlide>
//             <SwiperSlide>
//               <img
//                 src={img3}
//                 loading="lazy"
//                 alt="Slide 3"
//                 className="swiper-img"
//               />
//             </SwiperSlide>
//             <SwiperSlide>
//               <img
//                 src={img4}
//                 loading="lazy"
//                 alt="Slide 4"
//                 className="swiper-img"
//               />
//             </SwiperSlide>
//             <SwiperSlide>
//               <img
//                 src={img5}
//                 loading="lazy"
//                 alt="Slide 5"
//                 className="swiper-img"
//               />
//             </SwiperSlide>
//             <SwiperSlide>
//               <img
//                 src={img6}
//                 loading="lazy"
//                 alt="Slide 6"
//                 className="swiper-img"
//               />
//             </SwiperSlide>
//             <SwiperSlide>
//               <img
//                 src={img7}
//                 loading="lazy"
//                 alt="Slide 7"
//                 className="swiper-img"
//               />
//             </SwiperSlide>
//             <SwiperSlide>
//               <img
//                 src={img8}
//                 loading="lazy"
//                 alt="Slide 8"
//                 className="swiper-img"
//               />
//             </SwiperSlide>
//             <SwiperSlide>
//               <img
//                 src={img9}
//                 loading="lazy"
//                 alt="Slide 9"
//                 className="swiper-img"
//               />
//             </SwiperSlide>
//             <SwiperSlide>
//               <img
//                 src={img0}
//                 loading="lazy"
//                 alt="Slide 0"
//                 className="swiper-img"
//               />
//             </SwiperSlide>
//             <SwiperSlide>
//               <img
//                 src={img11}
//                 loading="lazy"
//                 alt="Slide 0"
//                 className="swiper-img"
//               />
//             </SwiperSlide>
//             <SwiperSlide>
//               <img
//                 src={img12}
//                 loading="lazy"
//                 alt="Slide 0"
//                 className="swiper-img"
//               />
//             </SwiperSlide>
//             <SwiperSlide>
//               <img
//                 src={img13}
//                 loading="lazy"
//                 alt="Slide 0"
//                 className="swiper-img"
//               />
//             </SwiperSlide>
//             <SwiperSlide>
//               <img
//                 src={img14}
//                 loading="lazy"
//                 alt="Slide 0"
//                 className="swiper-img"
//               />
//             </SwiperSlide>
//             <SwiperSlide>
//               <img
//                 src={img15}
//                 loading="lazy"
//                 alt="Slide 0"
//                 className="swiper-img"
//               />
//             </SwiperSlide>
//             <SwiperSlide>
//               <img
//                 src={img16}
//                 loading="lazy"
//                 alt="Slide 0"
//                 className="swiper-img"
//               />
//             </SwiperSlide>
//             <SwiperSlide>
//               <img
//                 src={img17}
//                 loading="lazy"
//                 alt="Slide 0"
//                 className="swiper-img"
//               />
//             </SwiperSlide>
//             <SwiperSlide>
//               <img
//                 src={img18}
//                 loading="lazy"
//                 alt="Slide 0"
//                 className="swiper-img"
//               />
//             </SwiperSlide>
//             <SwiperSlide>
//               <img
//                 src={img19}
//                 loading="lazy"
//                 alt="Slide 0"
//                 className="swiper-img"
//               />
//             </SwiperSlide>
//             <SwiperSlide>
//               <img
//                 src={img21}
//                 loading="lazy"
//                 alt="Slide 0"
//                 className="swiper-img"
//               />
//             </SwiperSlide>
//             <SwiperSlide>
//               <img
//                 src={img20}
//                 loading="lazy"
//                 alt="Slide 0"
//                 className="swiper-img"
//               />
//             </SwiperSlide>
//           </Swiper>
//         ) : (
//           <Swiper
//             slidesPerView={1}
//             centeredSlides={false}
//             slidesPerGroupSkip={1}
//             grabCursor={true}
//             keyboard={{
//               enabled: true,
//             }}
//             breakpoints={{
//               769: {
//                 slidesPerView: 2,
//                 slidesPerGroup: 2,
//               },
//             }}
//             scrollbar={true}
//             // navigation={true}
//             pagination={{
//               clickable: true,
//             }}
//             modules={[Keyboard, Scrollbar, Navigation, Pagination]}
//             className="mySwiper"
//             style={{
//               overflow: "hidden",
//               width: "100%",
//               height: "100%",
//             }}
//           >
//             <SwiperSlide>
//               <img
//                 src={img1}
//                 loading="lazy"
//                 alt="Slide 1"
//                 className="swiper-img"
//               />
//             </SwiperSlide>
//             <SwiperSlide>
//               <img
//                 src={img2}
//                 loading="lazy"
//                 alt="Slide 2"
//                 className="swiper-img"
//               />
//             </SwiperSlide>
//             <SwiperSlide>
//               <img
//                 src={img3}
//                 loading="lazy"
//                 alt="Slide 3"
//                 className="swiper-img"
//               />
//             </SwiperSlide>
//             <SwiperSlide>
//               <img
//                 src={img4}
//                 loading="lazy"
//                 alt="Slide 4"
//                 className="swiper-img"
//               />
//             </SwiperSlide>
//             <SwiperSlide>
//               <img
//                 src={img5}
//                 loading="lazy"
//                 alt="Slide 5"
//                 className="swiper-img"
//               />
//             </SwiperSlide>
//             <SwiperSlide>
//               <img
//                 src={img6}
//                 loading="lazy"
//                 alt="Slide 6"
//                 className="swiper-img"
//               />
//             </SwiperSlide>
//             <SwiperSlide>
//               <img
//                 src={img7}
//                 loading="lazy"
//                 alt="Slide 7"
//                 className="swiper-img"
//               />
//             </SwiperSlide>
//             <SwiperSlide>
//               <img
//                 src={img8}
//                 loading="lazy"
//                 alt="Slide 8"
//                 className="swiper-img"
//               />
//             </SwiperSlide>
//             <SwiperSlide>
//               <img
//                 src={img9}
//                 loading="lazy"
//                 alt="Slide 9"
//                 className="swiper-img"
//               />
//             </SwiperSlide>
//             <SwiperSlide>
//               <img
//                 src={img0}
//                 loading="lazy"
//                 alt="Slide 0"
//                 className="swiper-img"
//               />
//             </SwiperSlide>
//             <SwiperSlide>
//               <img
//                 src={img11}
//                 loading="lazy"
//                 alt="Slide 0"
//                 className="swiper-img"
//               />
//             </SwiperSlide>
//             <SwiperSlide>
//               <img
//                 src={img12}
//                 loading="lazy"
//                 alt="Slide 0"
//                 className="swiper-img"
//               />
//             </SwiperSlide>
//             <SwiperSlide>
//               <img
//                 src={img13}
//                 loading="lazy"
//                 alt="Slide 0"
//                 className="swiper-img"
//               />
//             </SwiperSlide>
//             <SwiperSlide>
//               <img
//                 src={img14}
//                 loading="lazy"
//                 alt="Slide 0"
//                 className="swiper-img"
//               />
//             </SwiperSlide>
//             <SwiperSlide>
//               <img
//                 src={img15}
//                 loading="lazy"
//                 alt="Slide 0"
//                 className="swiper-img"
//               />
//             </SwiperSlide>

//             <SwiperSlide>
//               <img
//                 src={img16}
//                 loading="lazy"
//                 alt="Slide 0"
//                 className="swiper-img"
//               />
//             </SwiperSlide>
//             <SwiperSlide>
//               <img
//                 src={img17}
//                 loading="lazy"
//                 alt="Slide 0"
//                 className="swiper-img"
//               />
//             </SwiperSlide>
//             <SwiperSlide>
//               <img
//                 src={img18}
//                 loading="lazy"
//                 alt="Slide 0"
//                 className="swiper-img"
//               />
//             </SwiperSlide>
//             <SwiperSlide>
//               <img
//                 src={img19}
//                 loading="lazy"
//                 alt="Slide 0"
//                 className="swiper-img"
//               />
//             </SwiperSlide>
//             <SwiperSlide>
//               <img
//                 src={img21}
//                 loading="lazy"
//                 alt="Slide 0"
//                 className="swiper-img"
//               />
//             </SwiperSlide>
//             <SwiperSlide>
//               <img
//                 src={img20}
//                 loading="lazy"
//                 alt="Slide 0"
//                 className="swiper-img"
//               />
//             </SwiperSlide>
//           </Swiper>
//         )}
//       </div>
//     </>
//   );
// };

// export default Pasta;












// import React, { useEffect, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";

// import "swiper/css";
// import "swiper/css/effect-cards";

// import {
//   EffectCards,
//   Keyboard,
//   Scrollbar,
//   Navigation,
//   Pagination,
// } from "swiper/modules";

// // Lightbox
// import Lightbox from "yet-another-react-lightbox";
// import Zoom from "yet-another-react-lightbox/plugins/zoom";
// import "yet-another-react-lightbox/styles.css";

// const images = [
//   "/img/menu3/1.jpg",
//   "/img/menu3/2.jpg",
//   "/img/menu3/3.jpg",
//   "/img/menu3/4.jpg",
//   "/img/menu3/6.jpg",
//   "/img/menu3/7.jpg",
//   "/img/menu3/8.jpg",
//   "/img/menu3/9.jpg",
//   "/img/menu3/10.jpg",
//   "/img/menu3/11.jpg",
//   "/img/menu3/12.jpg",
//   "/img/menu3/13.jpg",
//   "/img/menu3/14.jpg",
//   "/img/menu3/15.jpg",
//   "/img/menu3/16.jpg",
//   "/img/menu3/17.jpg",
//   "/img/menu3/18.jpg",
//   "/img/menu3/19.jpg",
//   "/img/menu3/20.jpg",
//   // "/img/menu3/21.jpg",
//   "/img/menu3/23.jpg",
//   "/img/menu3/24.jpg",
//   "/img/menu3/25.jpg",
// ];

// const Pasta = () => {
//   const [isSmallScreen, setIsSmallScreen] = useState(false);
//   const [open, setOpen] = useState(false);
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsSmallScreen(window.innerWidth < 768);
//     };

//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   // 🔥 Zoom tracking function
//   const handleMove = (e) => {
//     const img = e.currentTarget;
//     const rect = img.getBoundingClientRect();

//     const touch = e.touches [0]

//     const x = ((touch.clientX - rect.left) / rect.width) * 100;
//     const y = ((touch.clientY - rect.top) / rect.height) * 100;

//     img.style.transformOrigin = `${x}% ${y}%`;
//     img.style.transform = "scale(2)";
//   };

//   const resetZoom = (e) => {
//     const img = e.currentTarget;
//     img.style.transform = "scale(1)";
//     img.style.transformOrigin = "center";
//   };

//   return (
//     <div className="container mx-auto">
//       <Swiper
//         effect={isSmallScreen ? "cards" : "slide"}
//         grabCursor={true}
//         slidesPerView={isSmallScreen ? 1 : 2}
//         spaceBetween={20}
//         keyboard={{ enabled: true }}
//         pagination={{ clickable: true }}
//         modules={[EffectCards, Keyboard, Scrollbar, Navigation, Pagination]}
//       >
//         {images.map((img, i) => (
//           <SwiperSlide key={i}>
//             <div className="zoom-container">
//               <img
//                 src={img}
//                 loading="lazy"
//                 alt={`menu-${i}`}
//                 className="zoom-img"
//                 onClick={() => {
//                   setIndex(i);
//                   setOpen(true);
//                 }}
                
                
//                 onTouchMove={handleMove}
//                 onTouchEnd={resetZoom}
//               />
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* Fullscreen Lightbox */}
//       <Lightbox
//         open={open}
//         close={() => setOpen(false)}
//         slides={images.map((img) => ({ src: img }))}
//         index={index}
//         plugins={[Zoom]}
//       />
//     </div>
//   );
// };

// export default Pasta;
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaSearchPlus } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
  "https://res.cloudinary.com/daqznvdzn/image/upload/v1783556774/1_uru0ku.png",
  "https://res.cloudinary.com/daqznvdzn/image/upload/v1783556972/2_iatbci.jpg",
  "https://res.cloudinary.com/daqznvdzn/image/upload/v1783557096/3_iossjr.jpg",
  "https://res.cloudinary.com/daqznvdzn/image/upload/v1783557093/4_aqm9z5.png",
  "https://res.cloudinary.com/daqznvdzn/image/upload/v1783557712/7_dmhema.jpg",
  "https://res.cloudinary.com/daqznvdzn/image/upload/v1783557712/7_dmhema.jpg",
  "https://res.cloudinary.com/daqznvdzn/image/upload/v1783557381/8_njeaqm.jpg",
  "https://res.cloudinary.com/daqznvdzn/image/upload/v1783557748/9_hguvoh.jpg",
  "https://res.cloudinary.com/daqznvdzn/image/upload/v1783557194/10_cgcdth.jpg",
  "https://res.cloudinary.com/daqznvdzn/image/upload/v1783557250/11_u0w9j1.jpg",
  "https://res.cloudinary.com/daqznvdzn/image/upload/v1783557212/12_lhbpwh.jpg",
];

const Pasta = () => {
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

  const handleMove = (e) => {
    const img = e.currentTarget;
    const rect = img.getBoundingClientRect();

    const touch = e.touches[0];

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
    <motion.div
      className="container mx-auto py-10"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <Swiper
        effect={isSmallScreen ? "cards" : "slide"}
        grabCursor={true}
        slidesPerView={isSmallScreen ? 1 : 2}
        spaceBetween={20}
        keyboard={{ enabled: true }}
        pagination={{ clickable: true }}
        navigation={true}
        loop={true}
        
        modules={[
          EffectCards,
          Keyboard,
          Scrollbar,
          Navigation,
          Pagination,
          
        ]}
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <motion.div
              className="relative group overflow-hidden rounded-xl cursor-pointer"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="zoom-container">
                <img
                  src={img}
                  loading="lazy"
                  alt={`menu-${i}`}
                  className="zoom-img w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{
                    filter:
                      "sepia(15%) saturate(0.9) brightness(0.95)",
                  }}
                  onClick={() => {
                    setIndex(i);
                    setOpen(true);
                  }}
                  onTouchMove={handleMove}
                  onTouchEnd={resetZoom}
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{
                      background:
                        "rgba(201,169,110,0.9)",
                    }}
                  >
                    <FaSearchPlus
                      className="text-[#1A120B]"
                      size={18}
                    />
                  </div>
                </div>
              </div>

              {/* Luxury Corners */}
              <div className="absolute top-3 left-3 w-5 h-5 border-t border-l border-[#C9A96E]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute top-3 right-3 w-5 h-5 border-t border-r border-[#C9A96E]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-3 left-3 w-5 h-5 border-b border-l border-[#C9A96E]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-3 right-3 w-5 h-5 border-b border-r border-[#C9A96E]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Frame Shadow */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  boxShadow:
                    "inset 0 0 80px rgba(0,0,0,0.25)",
                }}
              />
            </motion.div>
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
    </motion.div>
  );
};

export default Pasta;