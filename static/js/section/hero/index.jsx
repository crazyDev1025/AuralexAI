import React from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/global/navbar";
import coin2 from "../../assets/hero/token1.png";
import coin1 from "../../assets/hero/token2.png";
import dashboard from "../../assets/hero/dashboard.png";
import cardbody from "../../assets/blur/CardBodyBlurEffects.png";
import cardright from "../../assets/blur/CardBody1BlurEffects.png";
import gradient from "../../assets/blur/Gradient.avif";

export default function Hero() {
  return (
    <div id="home" className="relative  overflow-hidden ">
      <Navbar />

      <motion.img
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute md:w-[32rem] w-[90vw] top-[-10rem] rotate-[12deg] right-[-11rem] md:right-[-6rem]"
        src={coin2}
      />
      <div className="md:pt-[87px] pt-[40px] flex flex-col items-center relative z-[1] lg:px-0 px-[1rem] ">
        <div className="flex flex-col items-center gap-[2.5rem]">
          <div className="flex flex-col gap-[1rem] items-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:text-[5rem] md:text-[4rem] text-[3rem] font-medium leading-[1] text-white text-center"
            >
              Unleash the Future of <br className="" /> Crypto Trading with AI
            </motion.h1>
          </div>
          <div className="flex md:flex-row items-center flex-col gap-4 justify-center">
            <a href="https://app.auralexai.com" target="_blank">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  y: -2,
                  boxShadow: "0 2px 15px 6px #ffb87666",
                }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="h-[58px] bg-white hover:bg-[#f0f0f0] px-[2.75rem] rounded-[6rem] shadow-[0_0_50px_6px_#ffb876b3] text-[.875rem] font-medium text-black"
              >
                Ignite your Trading: Enter Dapp
              </motion.button>
            </a>
            <a href="">
          
            </a>
          </div>
          <div className="md:mt-[4.25rem] mt-[4rem] " />{" "}
        </div>
        <div className="relative rounded-[1.125rem]   ">
          <div className="absolute md:auto w-[40rem] inset-0 rounded-[1.125rem] z-[3] backdrop-blur-[64px] md:pl-0 pl-[3rem]"></div>
          <motion.img
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1, delay: 0.4 }}
            className="md:w-[1120px] w-[40rem] md:pl-0 pl-[3rem] relative z-[3] rounded-[1.125rem]"
            src={dashboard}
            alt="dashboard"
          />
          <motion.img
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="absolute md:w-[35.5rem] w-[70vw] rotate-[12rem] top-[10vw] md:top-[-5rem] md:left-[-20rem] left-[-26vw]"
            src={coin1}
            alt="coin1"
          />
          <motion.img
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="absolute md:w-[16.25rem] w-[9.25rem] md:top-[40%] top-[30%] md:left-[-5rem] left-0 z-[4] backdrop-blur-[64px]"
            src={cardbody}
            alt="coin1"
          />
          <motion.img
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="md:flex hidden absolute w-[11.25rem] top-[15%] right-[-3rem] z-[4] backdrop-blur-[64px] "
            src={cardright}
            alt="coin1"
          />
      
          <motion.img
            initial={{ opacity: 0, filter: "blur(20px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: false }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="absolute w-[39rem] -bottom-[20%] right-[-18%] "
            src={gradient}
            alt="coin1"
          />
        </div>
      </div>
    </div>
  );
}
