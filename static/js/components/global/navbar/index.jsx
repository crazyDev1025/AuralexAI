import React, { useState } from "react";
import auralex from "../../../assets/auralex.png";
import { Link } from "react-router-dom";
import { FaTelegramPlane, FaTwitter, FaBars, FaTimes } from "react-icons/fa";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { toast } from "sonner";
import { FaXTwitter } from "react-icons/fa6";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
 

  return (
    <div className="max-w-[1440px] mx-auto relative z-[200] md:px-[2.5rem] px-[1rem]">
      <div className="flex justify-between items-center h-[86px]">
        <div className="">
          <img className="w-[70px]" src={auralex} alt="auralex" />
        </div>
        <nav className="lg:flex hidden gap-[2rem] items-center text-sm text-[#C2C2C2] font-medium pb-1">
          <a
            href="#home"
            className="hover:text-white transition-colors duration-300"
          >
            {" "}
            <h5>Home</h5>
          </a>

          <a
            href="#about"
            className="hover:text-white transition-colors duration-300"
          >
            {" "}
            <h5>About</h5>
          </a>

          <a
            href="#feauture"
            className="hover:text-white transition-colors duration-300"
          >
            {" "}
            <h5>Feature</h5>
          </a>

          <a
            href="#faq"
            className="hover:text-white transition-colors duration-300"
          >
            {" "}
            <h5>FAQ</h5>
          </a>

          <Link
            target="_blank"
            rel="noopener noreferrer"
            to="https://docs.auralexai.org"
            className="hover:text-white transition-colors duration-300"
          >
            <h5>Whitepaper</h5>
          </Link>
          <a
            className="cursor-pointer hover:text-white transition-colors duration-300"
            href="https://www.dextools.io/app/en/ether/pair-explorer/0xcomingsoon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h5>Chart</h5>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <IoMdClose size={26} />
          ) : (
            <HiOutlineMenuAlt4 size={26} />
          )}
        </button>

        <div className="md:flex hidden gap-4 items-center md:pb-0 pb-5 text-white">
          <a
            href="https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0xcomingsoon"
            target="_blank"
          >
            <button className="bg-[#ffffff1f] hover:bg-[#ffffff3d] hover:scale-105 hover:shadow-lg backdrop-blur-[12px] text-white rounded-[6rem] h-[46px] px-[1.5rem] border border-[#ffffff1f] text-sm font-medium transition-all ease-linear duration-[250ms]">
              Buy Now
            </button>
          </a>

          <a
            href="https://x.com/AURAI_Defi"
            className="hover:text-[#ff6512] transition-colors duration-300 transform hover:scale-110"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter size={24} />
          </a>
          <a
            href="https://t.me/AURAI_Defi"
            className="hover:text-[#ff6512] transition-colors duration-300 transform hover:scale-110"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTelegramPlane size={24} />
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-[86px] w-[200px] rounded-[24px] right-4 bg-[#1a1a1a] border-t border-[#ffffff1f] transform transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-4 p-4">
          <a
            href="#home"
            className="text-[#C2C2C2] hover:text-white transition-colors"
          >
            <h5>Home</h5>
          </a>
          <a
            href="#about"
            className="text-[#C2C2C2] hover:text-white transition-colors"
          >
            <h5>About</h5>
          </a>
          <a
            href="#feauture"
            className="text-[#C2C2C2] hover:text-white transition-colors"
          >
            <h5>Feature</h5>
          </a>
          <a
            href="#faq"
            className="text-[#C2C2C2] hover:text-white transition-colors"
          >
            <h5>FAQ</h5>
          </a>

          <Link
            target="_blank"
            rel="noopener noreferrer"
            to="https://docs.auralexai.org"
            className="text-[#C2C2C2] hover:text-white transition-colors"
          >
            <h5>Whitepaper</h5>
          </Link>
          <a
            className="text-[#C2C2C2] hover:text-white transition-colors"
            href="https://www.dextools.io/app/en/ether/pair-explorer/0xcomingsoon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h5>Chart</h5>
          </a>

          <div className="flex gap-4 items-center md:pb-0 pb-5 text-white">
            <a
              href="https://x.com/AURAI_Defi"
              className="hover:text-[#ff6512] transition-colors duration-300 transform hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter size={24} />
            </a>
            <a
              href="https://t.me/AURAI_Defi"
              className="hover:text-[#ff6512] transition-colors duration-300 transform hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTelegramPlane size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
