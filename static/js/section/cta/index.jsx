import React from 'react'
import blur1 from "../../assets/blur/Group-48098168.avif"
import blur2 from "../../assets/blur/Group-40275.avif";
import { motion } from 'framer-motion';
export default function CTA() {
  return (
    <div className="max-w-[1440px] mx-auto mt-[1rem] lg:px-[2.5rem] px-[1rem]">
      <div className="border relative border-[rgba(255,255,255,0.12)] bg-[#ffffff0d] rounded-[1.25rem] md:p-[2.5rem] p-[3.75rem] flex justify-center items-center flex-col overflow-hidden">
        <div className="flex flex-col items-center gap-[1rem] text-center">
          <h2 className="text-[3.25rem] leading-[1.2] text-white">
            Ready to Trade Smarter?
          </h2>
          <p className="max-w-[28.75rem] text-center text-[#c2c2c2]">
            Join the future of crypto trading with Auralex AI. Start your free
            trial today and experience the difference.
          </p>
     
          <a href="https://app.auralexai.org" target="_blank">
          <motion.button
            whileHover={{
              scale: 1.05,
              y: -2,
              boxShadow: "0 2px 15px 6px #ffb87666",
            }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="  h-[58px] bg-white hover:bg-[#f0f0f0] px-[2.75rem] rounded-[6rem] shadow-[0_0_50px_6px_#ffb876b3] text-[.875rem] font-medium text-black font-medium"
          >
            Get Started Now
            </motion.button>
          </a>
        </div>
        <img
          className="absolute bottom-[-14rem] left-[-15rem] w-[40rem]"
          src={blur1}
          alt='blur'
        />
        <img
          className="absolute top-[-14rem] right-[-15rem] w-[40rem]"
          src={blur2}
          alt='blur'
        />
        <div className="cta-prime-line" />
      </div>
    </div>
  );
}
