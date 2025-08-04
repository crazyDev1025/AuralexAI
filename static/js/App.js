import "./App.css";

import Hero from "./section/hero";
import Features from "./section/features";
import Coin from "./section/coin";
import Community from "./section/community";
import Steps from "./section/steps";
import CTA from "./section/cta";
import Footer from "./section/footer";
import AccordionContainer from "./section/FAQ";
import { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Toaster } from "sonner";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleAssetsLoaded = async () => {
      await Promise.all([loadImages(), loadVideos(), loadFonts()]);
      setIsLoading(false);
    };

    handleAssetsLoaded();
  }, []);

  const loadImages = () => {
    const images = Array.from(document.images);
    const promises = images.map((image) => {
      return new Promise((resolve) => {
        if (image.complete) {
          resolve(true);
        } else {
          image.onload = () => resolve(true);
          image.onerror = () => resolve(true);
        }
      });
    });
    return Promise.all(promises);
  };

  const loadVideos = () => {
    const videos = Array.from(document.getElementsByTagName("video"));
    const promises = videos.map((video) => {
      return new Promise((resolve) => {
        video.onloadeddata = () => resolve(true);
        video.onerror = () => resolve(true);
      });
    });
    return Promise.all(promises);
  };

  const loadFonts = () => {
    return document.fonts.ready;
  };
  return (
    <Router>
      <Toaster position="top-right" />
      {isLoading ? (
        <div className="w-full h-dvh bg-black"></div>
      ) : (
        <div>
          <Hero />
          <Features />
          <Coin />
          <Steps />
          <Community />
          <CTA />
          <AccordionContainer />
          <Footer />
        </div>
      )}
    </Router>
  );
}

export default App;
