import React from "react";
import footer from "../../assets/footer/footer.avif";
import twitter from "../../assets/footer/X-logo.svg";
import { Link } from "react-router-dom";
import { FaMedium } from "react-icons/fa6";
import { SiGitbook } from "react-icons/si";
export default function Footer() {
  return (
    <div className=" ">
      <div className="relative md:h-[300px]  md:mt-[164px] ">
        <div className=" max-w-[1440px] mx-auto md:px-[2.75rem] px-[1rem]">
          <div className="w-full max-w-[80rem] relative z-[10] ">
            <div className="pt-[6.25rem]" />
            <div>
              <div className="md:hidden flex flex-col gap-[1.5rem] w-full">
                <div className="w-[160px]">
                  <h4 className="text-white font-bold uppercase text-[1.5rem]">
                    Auralex AI
                  </h4>
                </div>
                <div className="flex items-center gap-[.5rem]">
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    to="https://docs.auralexai.org"
                  >
                    <button className="bg-[#ffffff1f] backdrop-blur-[12px] text-white rounded-[6rem] h-[46px] px-[1.5rem] border border-[#ffffff1f] text-sm font-medium">
                      <SiGitbook className="text-[22px]" />
                    </button>
                  </Link>
                  <button className="bg-[#ffffff1f] backdrop-blur-[12px] text-white rounded-[6rem] h-[46px] px-[1.5rem] border border-[#ffffff1f] text-sm font-medium">
                    <img src={twitter} alt="twitter" />
                  </button>
                </div>
                <nav className="flex  justify-between items-center text-sm text-[#C2C2C2] font-medium pb-1 w-full">
                  <a href="#home">
                    {" "}
                    <h5>Home</h5>
                  </a>

                  <a href="#about">
                    {" "}
                    <h5>About</h5>
                  </a>

                  <a href="#feauture">
                    {" "}
                    <h5>Feauture</h5>
                  </a>

                  <a href="#faq">
                    {" "}
                    <h5>FAQ</h5>
                  </a>

                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    to="https://docs.auralexai.org"
                  >
                    <h5>Whitepaper</h5>
                  </Link>
                </nav>
              </div>
              <div className="md:flex hidden justify-between items-center mt-10">
                <div className="w-[160px]">
                  <h4 className="text-white font-bold uppercase text-[1.5rem]">
                    Auralex AI
                  </h4>
                </div>
                <nav className="lg:flex hidden  gap-[2rem] items-center text-sm text-[#C2C2C2] font-medium pb-1">
                  <a href="#home">
                    {" "}
                    <h5>Home</h5>
                  </a>

                  <a href="#about">
                    {" "}
                    <h5>About</h5>
                  </a>

                  <a href="#feauture">
                    {" "}
                    <h5>Feauture</h5>
                  </a>

                  <a href="#faq">
                    {" "}
                    <h5>FAQ</h5>
                  </a>
                </nav>
                <div className="flex items-center gap-[.5rem]">
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    to="https://docs.auralexai.org"
                  >
                    <button className="bg-[#ffffff1f] backdrop-blur-[12px] text-white rounded-[6rem] h-[46px] px-[1.5rem] border border-[#ffffff1f] text-sm font-medium">
                      <SiGitbook className="text-[22px]" />
                    </button>
                  </Link>
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    to="https://x.com/AuralexAIDefi"
                  >
                    <button className="bg-[#ffffff1f] backdrop-blur-[12px] text-white rounded-[6rem] h-[46px] px-[1.5rem] border border-[#ffffff1f] text-sm font-medium">
                      <img src={twitter} alt="footer" />
                    </button>
                  </Link>
                </div>
              </div>
              <div className=" w-full h-[1px] bg-[#ffffff1f] my-[2rem]" />
              <div className="flex md:flex-row flex-col-reverse justify-between md:items-center md:gap-0 gap-[1.5rem]">
                <h5 className="text-[#838383] text-[.875rem]">
                  @2025 Auralex. All rights reserved
                </h5>
              </div>
            </div> 
            <div className="pt-[2.125rem]"></div>
          </div>
        </div>
        <div className="absolute bottom-0 w-full h-full z-[2] ">
          <img
            className="w-full h-full object-cover"
            src={footer}
            alt="footer"
          />
        </div>
        <div className="absolute left-0  top-[5rem] w-full z-[1] ">
          <div className="footer-glow"></div>
        </div>
      </div>
    </div>
  );
}
