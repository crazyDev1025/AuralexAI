import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Accordion Component
const Accordion = ({ title, answer, index, hoveredIndex, setHoveredIndex }) => {
  const isOpen = hoveredIndex === index;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: false }}
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
      className="relative p-[1px] overflow-hidden rounded-[1.25rem]"
    >
      <div className="stroke-rectangle absolute inset-0"></div>
      {isOpen && <div className="stroke-rectangle is-gradient"></div>}
      <div className="bg-[#141414] pb-[1.5rem] relative z-[10] rounded-[1.25rem] px-[1.5rem]">
        <motion.button
          className="flex justify-between items-center w-full pt-[1.5rem] text-left"
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.2 }}
        >
          <span className="lg:text-[1.5rem] text-[1.25rem] leading-[1.55]">
            {title}
          </span>
          <motion.svg
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="fill-[white] shrink-0"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Horizontal line */}
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              className="transform origin-center transition duration-200 ease-out"
            />
            {/* Vertical line (only visible when closed) */}
            {!isOpen && (
              <rect
                x="7"
                width="2"
                height="16"
                rx="1"
                className="transform origin-center transition duration-200 ease-out"
              />
            )}
          </motion.svg>
        </motion.button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden text-[white]"
            >
              <div className="pt-[1.5rem] pb-[1.5rem] text-[1rem] text-[#c2c2c2]">
                {answer}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

// Accordion Container
const AccordionContainer = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const data = [
    {
      title: "What is Auralex AI?",
      answer:
        "Auralex AI is a cutting-edge crypto trading platform that leverages artificial intelligence to provide real-time market insights, advanced analytics, and AI-powered trading assistance. It's designed to help both novice and experienced traders make smarter, more profitable decisions in the volatile cryptocurrency market.",
    },
    {
      title: "Who is Auralex AI for?",
      answer:
        "Auralex AI is for anyone interested in cryptocurrency trading, from beginners looking to learn the ropes to seasoned traders seeking an edge. Whether you're a casual investor or a day trader, Auralex AI provides the tools and insights you need to succeed.",
    },
    {
      title: "How does Auralex AI use AI?",
      answer:
        "Auralex AI utilizes AI in several ways, including:\n- Pattern Recognition: Identifying key chart patterns like bull/bear flags, double tops/bottoms, and head and shoulders.\n- Candlestick Analysis: Interpreting Japanese candlestick patterns to analyze trend strength and potential reversal points.\n- Market Intelligence: Analyzing news sentiment and its potential impact on token prices.\n- Predictive Analysis: Using AI to predict bullish, bearish, or neutral outcomes based on various indicators.",
    },
    {
      title: "What data sources does Auralex AI use?",
      answer:
        "Auralex AI integrates with reputable data providers such as CoinGecko and CoinMarketCap for token data and market metrics. We also use ForexFactory or similar APIs for financial news and sentiment analysis.",
    },
    {
      title: "What is the Trending Tokens Carousel?",
      answer:
        "The Trending Tokens Carousel is a dynamic, auto-scrolling display that highlights the top 10-15 trending tokens in real-time. It tracks tokens based on 24-hour price changes, trading volume surges, market cap growth, and positive social sentiment.",
    },
    {
      title: "How does the Token Explorer work?",
      answer:
        "The Token Explorer allows you to explore the top 10,000 tokens with powerful filtering and sorting options. You can filter by market cap, supported chains, price, and volume, and sort by rank, market cap, price changes, and more.",
    },
    {
      title: "What kind of data is available in the Token Analytics Dashboard?",
      answer:
        "The Token Analytics Dashboard provides a comprehensive view of individual tokens, including:\n- Token Info: Contract address, description, official links, token distribution, launch date, and total supply.\n- Technical Indicators: RSI, MACD, moving averages, and volume profile.\n- TradingView Chart Integration: Professional charts for in-depth technical analysis.",
    },
    {
      title: "Can the AI Trading Assistant make trades for me?",
      answer:
        "No, the AI Trading Assistant does not execute trades directly. It provides insights and recommendations based on AI analysis, helping you make more informed trading decisions. You retain full control over your trades.",
    },
    {
      title:
        "What kind of chart patterns does the AI Trading Assistant recognize?",
      answer:
        "The AI Trading Assistant can automatically detect key chart patterns such as bull/bear flags, double tops/bottoms, head and shoulders, and support/resistance levels.",
    },
  ];

  return (
    <div id="faq" className="text-white lg:px-[2.5rem] px-[1rem]">
      <div className="relative min-h-screen isolate max-w-[1440px] mx-auto mb-[164px] mt-[6.25rem]">
        <div className="relative min-h-screen isolate flex md:flex-row flex-col lg:gap-0 gap-[2.5rem] ">
          {/* Left Section */}
          <div className="md:w-1/2 w-full h-full text-white md:sticky md:top-[6.25rem]">
            <h2 className="lg:text-[3.25rem] md:text-[2.78rem] text-[2.375rem] leading-[1.2] md:text-left text-center ">
              Answers to the most <br /> frequent questions
            </h2>
          </div>

          {/* Right Section */}
          <div className="md:w-1/2 w-full h-full flex flex-col gap-[0.5rem]">
            {data.map((item, index) => (
              <Accordion
                key={index}
                index={index}
                title={item.title}
                answer={item.answer}
                hoveredIndex={hoveredIndex}
                setHoveredIndex={setHoveredIndex}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordionContainer;
