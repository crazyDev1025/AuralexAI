import React, { useState } from "react";
import { motion } from "framer-motion";
import realtime from "../../assets/features/1 Real-Time Trending Tokens.png";
import uncover from "../../assets/features/2 Uncover.png";
import deep from "../../assets/features/3 Deep Dive Token Analytics.png";
import smarter from "../../assets/features/4 Smarter Trades, Guaranteed.png";
import aiprice from "../../assets/features/5 AI Price Predictions.png";
import watchprice from "../../assets/features/6 Custom Watchlists & Real-Time Alerts.png";
import realtimevideo from "../../assets/video/1 Real Time Trending Token.mp4";
import aidrivenvideo from "../../assets/video/Ai-Driven Deep Dive Token Analytics.mp4";
import smartervideo from "../../assets/video/Smarter Trades, Guaranteed.mp4";
import aipricevideo from "../../assets/video/AI Price Predictions.mp4";
import watchpricevideo from "../../assets/video/Custom Watchlists & Real Time Alerts.mp4";
import uncovervideo from "../../assets/video/Uncover The Crypto Universe.mp4";

export default function Features() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: false },
    transition: { duration: 0.5, ease: "easeOut" },
  };

  const blurAnimation = {
    initial: { scale: 0.8, opacity: 0.5 },
    animate: {
      scale: [0.8, 1.2, 0.8],
      opacity: [0.5, 0.8, 0.5],
    },
    transition: {
      duration: 3,
      ease: "easeInOut",
      repeat: Infinity,
    },
  };

  const fadeInLeft = {
    initial: { opacity: 0, x: -50 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: false },
    transition: { duration: 0.5, ease: "easeOut" },
  };

  const fadeInRight = {
    initial: { opacity: 0, x: 50 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: false },
    transition: { duration: 0.5, ease: "easeOut" },
  };

  const cards = [
    {
      image: realtime,
      video: realtimevideo,
      title: "Real-Time Trending Tokens",
      description:
        "Don't get left behind. Our dynamic carousel spotlights the hottest tokens, tracking 24-hour price surges, volume spikes, and social buzz. Catch the next moonshot before it takes off. CA:0xcomingsoon",
    },
    {
      image: uncover,
      video: uncovervideo,
      title: "Uncover the Crypto Universe: Explore 10,000+ Tokens",
      description:
        "Dive deep into the crypto ocean. Filter by market cap, chains, price, and more. Sort by rank, price changes, and volume. Your data, your way. Includes data columns: Rank, Token Name & Symbol, Current Price, 24h/7d Change, Market Cap, 24h Volume, Circulating Supply.",
    },

    {
      image: deep,
      video: aidrivenvideo,
      title: "AI-Driven Deep Dive Token Analytics",
      description:
        "Go beyond the surface. Our dashboard integrates TradingView charts, key metrics, and on-chain data. Get the full picture, from technicals to social sentiment. The dashboard provides detailed insights, including token information such as contract details, descriptions, links, distribution, launch data, and supply metrics. It also offers technical analytics like RSI, MACD, moving averages, and volume profiles, combined with sentiment analytics.",
    },
    {
      image: smarter,
      video: smartervideo,
      title: "Smarter Trades, Guaranteed",
      listItems: [
        {
          subheading: "Pattern Recognition",
          description:
            "Detect and analyze Bull/Bear Flags, Double Tops/Bottoms, Head & Shoulders, and Support/Resistance levels to anticipate market moves.",
        },
        {
          subheading: "Candlestick Analysis",
          description:
            "Evaluate trend strength, volume dynamics, and reversal points to make informed decisions.",
        },
        {
          subheading: "Market Intelligence",
          description:
            "Leverage sentiment analysis and news impact to stay ahead of market trends.",
        },
      ],
      description:
        "Let our AI be your guide. Using advanced tools like real-time market intelligence and cutting-edge analytics, Auralex AI identifies opportunities and risks, so you can trade with confidence.",
    },
    {
      image: aiprice,
      title: "AI Price Predictions",
      video: aipricevideo,
      description:
        "Harness the power of predictive analytics. Our AI algorithms analyze historical data and market trends to provide you with potential price movements, giving you a strategic advantage.",
    },
    {
      image: watchprice,
      title: "Custom Watchlists & Real-Time Alerts",
      video: watchpricevideo,
      description:
        "Never miss a beat. Create personalized watchlists and set up custom alerts for price movements, volume changes, and other key metrics. Stay on top of your portfolio, effortlessly.",
    },
  ];

  return (
    <div id="feauture" className="mt-[164px] ">
      <motion.div
        {...fadeInUp}
        className="flex justify-center items-center relative"
      >
        <h2 className="md:text-[3.25rem] text-[2.375rem] text-white leading-[1.2] md:max-w-[100%] max-w-[23rem] text-center relative z-[50]">
          Your Arsenal of Intelligent
          <br className="md:flex hidden" /> Trading Tools
        </h2>
        <motion.div
          {...blurAnimation}
          className="absolute top-0 bg-[#ff6512] blur-[100px] w-[200px] md:w-[500px] h-[70px] rounded-full z-[10000]"
        ></motion.div>
      </motion.div>
      <div className="max-w-[1440px] mx-auto mt-[6.5rem] overflow-hidden">
        <div className="lg:px-[2.5rem] flex flex-col lg:gap-[150px] gap-16 px-[1rem]">
          {cards.map((card, index) => (
            <div
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              className={`relative flex md:flex-row flex-col lg:items-start lg:gap-[5rem] md:gap-[2rem] gap-[3rem] ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Text Section */}
              <motion.div
                {...(index % 2 === 0 ? fadeInLeft : fadeInRight)}
                className="md:w-1/2 flex gap-2 items-start flex-col z-[3] relative text-white md:order-1"
              >
                <h3 className="lg:text-[3.25rem] text-[2.375rem] leading-[1.1] lg:w-[500px] w-full">
                  {card.title}
                </h3>
                <p className="lg:w-[500px] w-full my-[1rem]">
                  {card.description}
                </p>
                {card.listItems && (
                  <div className="flex flex-col gap-4 mb-[1rem]">
                    {card.listItems.map((item, i) => (
                      <div key={i}>
                        <h4 className="font-bold">{item.subheading}</h4>
                        <p>{item.description}</p>
                      </div>
                    ))}
                  </div>
                )}
                <a href="https://app.auralexai.com" target="_blank">
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                      y: -2,
                      boxShadow: "0 2px 15px 6px #ffb87666",
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="h-[58px] bg-white hover:bg-[#f0f0f0] px-[2.75rem] rounded-[6rem] shadow-[0_0_50px_6px_#ffb876b3] text-[.875rem]  text-black font-medium"
                  >
                    Get Started Now
                  </motion.button>
                </a>
              </motion.div>

              {/* Image Section */}
              <motion.div
                {...(index % 2 === 0 ? fadeInRight : fadeInLeft)}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                className="md:w-1/2 relative rounded-[1.5rem] p-[1px] overflow-hidden cursor-pointer lg:h-[480px] md:h-[300px]"
              >
                <div className="w-full z-[3] rounded-[1.5rem] relative">
                  {card.video ? (
                    <video
                      className="rounded-[1.5rem] w-full h-full"
                      src={card.video}
                      autoPlay
                      muted
                      loop
                    />
                  ) : (
                    <img
                      className="rounded-[1.5rem] w-full h-full"
                      src={card.image}
                      alt={card.title}
                    />
                  )}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
