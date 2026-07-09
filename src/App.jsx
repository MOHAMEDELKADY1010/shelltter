import React ,{ useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes,useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import Menu from "./components/Menu";
import Home from "./components/Home";
import Loading from "./components/Loading";
// import Pizza from "./components/Pizza";
import Pasta from "./components/pasta";
// import { useLocation } from "react-router-dom";

import { loadMedia } from "./utils/loadMedia";
import Offers from './components/Offers';


const mediaUrls = [
  // Add the URLs of all your media files here
  "./assets/img/silder/big1.webp",
  "./assets/img/silder/big2.webp",
  "./assets/img/silder/big3.webp",
  "./assets/img/silder/big4.webp",
  "./assets/img/silder/big5.webp",
  "./assets/img/silder/big6.webp",
  "./assets/img/silder/big7.webp",
  "./assets/img/silder/big8.webp",
  "./assets/img/silder/big9.webp",
  "./assets/img/silder/big10.jpg",
  "./assets/img/hero.jpg",
  "./assets/img/logo.png",
  "https://res.cloudinary.com/daqznvdzn/video/upload/v1783558830/video_rmxmxv.mp4",

  // Add more media URLs as needed
];

function App() {
    const location = useLocation();
  const isPastaPage = location.pathname === "/Pasta";
  const isMenuPage = location.pathname === "/menu";
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load all media files
    loadMedia(mediaUrls)
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to load media:", error);
        setLoading(false);
      });
  }, []);
  return (
    <>
      {loading && <Loading />}
      <div className="">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/menu" element={<Menu />} /> */}
          <Route path="/Pasta" element={<Pasta />} />
          <Route path="/Pasta" element={<Pasta />} />
          <Route path="/Offers" element={<Offers />} />
          {/* <Route path="/Pizza" element={<Pizza />} /> */}
          {/* <Route path="/Prost" element={<Prost />} /> */}
        </Routes>
        <Footer
        //  hideFirstBranch={isPastaPage} 
        //  hideSecondBranch={isMenuPage} 

        />
      </div>
    </>
  );
}

export default App;
