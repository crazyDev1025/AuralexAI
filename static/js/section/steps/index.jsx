import React, { useState } from "react";
import realtime from "../../assets/steps/1 Real-Time Advantage1.png"
import advanced from "../../assets/steps/2 Advanced Insights.png"
import aipowered from "../../assets/steps/3 AI-Powered Precision.png"
import allinone from "../../assets/steps/4 All-in-One Platform.png"
import intuitive from "../../assets/steps/5 Intuitive Design.png"
import predictive from "../../assets/steps/6 Predictive Power.png"
import personalized from "../../assets/steps/7 Personalized Experience.png"
import { motion } from "framer-motion";
const stepsData = [
  {
    id: 1,
    title: "Real-Time Advantage",
    description: "Instant market data for lightning-fast decisions",
    img: realtime,
  },
  {
    id: 2,
    title: "Advanced Insights",
    description: "Professional-grade analytics that go beyond the basics.",
    img: advanced,
  },
  {
    id: 3,
    title: "AI-Powered Precision",
    description: "Let AI guide you to profitable opportunities.",
    img: aipowered,
  },
  {
    id: 4,
    title: "All-in-One Platform",
    description: "Everything you need, from discovery to deep analysis.",
    img: allinone,
  },
  {
    id: 5,
    title: " Intuitive Design",
    description: "Easy to use, powerful results.",
    img: intuitive,
  },
  {
    id: 6,
    title: " Predictive Power",
    description: "AI-driven price predictions for strategic planning.",
    img: predictive,
  },
  {
    id: 7,
    title: "Personalized Experience",
    description: "Custom watchlists and alerts to stay informed.",
    img: personalized,
  },
];
  
export default function Steps() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  return (
    <div className="relative min-h-screen isolate max-w-[1440px] mx-auto mb-[164px] mt-[6.25rem] lg:px-[2.5rem] px-[1rem]">
      <div className="relative min-h-screen isolate flex md:flex-row flex-col">
        {/* Left Section */}
        <div className="md:w-1/2 w-full h-full text-white md:sticky md:top-[6.25rem] mb-[4rem] md:mb-0 flex md:justify-start justify-center flex-col md:items-start items-center">
          <div className="relative">
            <h2 className="lg:text-[3.25rem] md:text-[2.8rem] text-[2.375rem] leading-[1.2] md:text-left  text-center">
              Why Auralex AI is Your Ultimate Trading Partner
            </h2>
            <div className="absolute top-0 bg-[#ff6512] blur-[100px] w-[200px] md:w-[500px]  h-[70px] rounded-full"></div>
          </div>
          <a href="https://app.auralexai.com/" rel="noreferrer" target="_blank">
            <motion.button
              whileHover={{
                scale: 1.05,
                y: -2,
                boxShadow: "0 2px 15px 6px #ffb87666",
              }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className=" mt-[4rem] h-[58px] bg-white hover:bg-[#f0f0f0] px-[2.75rem] rounded-[6rem] shadow-[0_0_50px_6px_#ffb876b3] text-[.875rem] font-medium text-black font-medium"
            >
              Get Started Now
            </motion.button>
          </a>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 w-full h-full flex flex-col gap-[1.5rem]">
          {stepsData.map((step, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative p-[1px] overflow-hidden rounded-[1.5rem]"
            >
              <div className="bg-black w-full lg:h-[440px] md:h-[400px] h-[440px] z-[3] rounded-[1.5rem] relative  ">
                <img
                  src={step.img}
                  alt={step.title}
                  className="absolute top-0 left-0 w-full h-full object-cover rounded-[1.5rem]"
                />
                <div className="absolute inset-0 flex items-start w-full text-white p-[2rem]">
                  <div className="flex md:flex-row flex-col-reverse w-full justify-between items-start md:gap-0 gap-[1.5rem]">
                    <div className="flex flex-col gap-[.75rem]">
                      <h4 className="md:text-[2rem] text-[1.75rem] leading-[1.25]">
                        {step.title}
                      </h4>
                      <p className="text-[#c2c2c2] text-[1rem] max-w-[20rem]">
                        {step.description}
                      </p>
                    </div>
                    <div className="md:w-[3.75rem] w-[2.75rem] h-[2.75rem] md:h-[3.75rem] bg-[#191919] border border-[#ffffff0d] flex justify-center items-center rounded-full">
                      <h5 className="text-white">{`0${step.id}`}</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="stroke-rectangle absolute inset-0"></div>
              {hoveredIndex === index && (
                <div className="stroke-rectangle is-gradient"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
