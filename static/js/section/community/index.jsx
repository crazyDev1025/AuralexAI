import React from "react";
import { motion } from "framer-motion";
import blur from "../../assets/blur/Image-9.avif";
import avi from "../../assets/community/1a-Frame-1000002947.png";
import twitter from "../../assets/community/X-logo.svg";
import xenu from "../../assets/community/xenu.png";
import pavol from "../../assets/community/pavol.png";
import michael from "../../assets/community/michael.png";
import untraceable1 from "../../assets/community/untraceable1.png";
import williams from "../../assets/community/williams.png";
import xenu1 from "../../assets/community/xenu1.jpg";
import untraceable2 from "../../assets/community/untraceable2.png";
export default function Community() {
  return (
    <div className="w-full md:h-[780px] h-[542px] relative bg-[#090909] overflow-hidden">
      <img
        className="absolute md:w-[32rem] w-[24rem] md:-bottom-[12rem] bottom-[12rem] md:-left-[9rem] -left-[15rem]"
        src={blur}
        alt="blur"
      />
      <div className="grid md:grid-cols-2 grid-cols-1 gap-[2.5rem]">
        <div className="2xl:max-w-[1440px] 2xl:mx-auto px-[2.5rem] flex md:justify-start justify-center items-center md:items-start flex-col">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:max-w-[100%] max-w-[23.75rem]"
          >
            <h2 className="md:text-[3.52rem] text-[2.375rem] leading-[1.2] text-white mt-[5rem] md:text-left text-center">
              Hear What Our <br className="md:flex hidden " /> Users Are Saying
            </h2>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:hidden flex gap-[1rem] px-[1rem] overflow-x-auto w-full"
        >
          <motion.div
         
          >
            <div className="w-[324px]  bg-[#141414] rounded-[1.25rem] p-[2rem] border border-[#ffffff1f]  ">
              <p className="text-[.875rem] text-[#c2c2c2]">
                As someone who understands the tech behind it, I'm impressed by
                the sophistication of Auralex's AI algorithms. The risk
                management features are particularly impressive.
              </p>
              <div className=" mt-[1rem] flex justify-between items-center">
                <div className=" flex items-center gap-[.875rem] ">
                  <img
                    className="w-[52px] rounded-full"
                    src={pavol}
                    alt="alt"
                  />
                  <div className="flex flex-col text-[#c2c2c2]">
                    <h5 className="text-[.875rem]">John D.</h5>
                    <h5 className="text-[.875rem]">Crypto Trader</h5>
                  </div>
                </div>
                <div className="w-[2.5rem] h-[2.5rem] bg-[#1d1d1d] border border-[#ffffff0d] rounded-full flex justify-center items-center">
                  <img src={twitter} alt="twitter" />
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
           
          >
            <div className="w-[324px] h-[238px]  bg-[#141414] rounded-[1.25rem] p-[2rem] border border-[#ffffff1f]  ">
              <p className="text-[.875rem] text-[#c2c2c2]">
                Auralex AI is a game-changer! The AI insights are spot-on, and
                the real-time data is invaluable. I've never felt more confident
                in my trades.
              </p>
              <div className=" mt-[1rem] flex justify-between items-center">
                <div className=" flex items-center gap-[.875rem] ">
                  <img
                    className="w-[52px] rounded-full"
                    src={xenu}
                    alt="alt"
                  />
                  <div className="flex flex-col text-[#c2c2c2]">
                    <h5 className="text-[.875rem]">James Walker</h5>
                    <h5 className="text-[.875rem]">Someone</h5>
                  </div>
                </div>
                <div className="w-[2.5rem] h-[2.5rem] bg-[#1d1d1d] border border-[#ffffff0d] rounded-full flex justify-center items-center">
                  <img src={twitter} alt="twitter" />
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
          
          >
            <div className="w-[324px] h-[238px]  bg-[#141414] rounded-[1.25rem] p-[2rem] border border-[#ffffff1f]  ">
              <p className="text-[.875rem] text-[#c2c2c2]">
                The Token Explorer is amazing! I can easily find new
                opportunities, and the analytics dashboard is top-notch. Auralex
                AI is now my go-to tool.
              </p>
              <div className=" mt-[1rem] flex justify-between items-center">
                <div className=" flex items-center gap-[.875rem] ">
                  <img
                    className="w-[52px] rounded-full"
                    src={untraceable1}
                    alt="alt"
                  />
                  <div className="flex flex-col text-[#c2c2c2]">
                    <h5 className="text-[.875rem]">Sarah L.</h5>
                    <h5 className="text-[.875rem]">Defi Enthusiast</h5>
                  </div>
                </div>
                <div className="w-[2.5rem] h-[2.5rem] bg-[#1d1d1d] border border-[#ffffff0d] rounded-full flex justify-center items-center">
                  <img src={twitter} alt="twitter" />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, staggerChildren: 0.1 }}
          className="md:grid hidden grid-cols-[324px_324px_324px] gap-[1rem] relative h-[750px]"
        >
          <div className="absolute z-[4] -top-10 w-full h-[6.25rem] top"></div>

          <div className="absolute -bottom-10 w-full h-[6.25rem] bg-gradient-to-b from-[#10101000] to-[#000000]"></div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-[1rem] -mt-[3.75rem]"
          >
            <motion.div
              whileHover={{
                scale: 1.02,
                y: -5,
                transition: { duration: 0.2 },
              }}
            >
              <div className="  bg-[#0d0d0d]/60 rounded-[1.25rem] p-[2rem] border border-[#0d0d0d] blur-[4px]  ">
                <p className="text-[.875rem] text-[#c2c2c2]">
                  This platform is everything a crypto user needs. The interface
                  is clean, the process is smooth, and the privacy features are
                  outstanding. The fact that I can trade without worrying about
                  hidden fees is a game-changer. I&apos;ll definitely continue
                  using it!
                </p>
                <div className=" mt-[1rem] flex justify-between items-center">
                  <div className=" flex items-center gap-[.875rem] ">
                    <img
                      className="w-[52px] rounded-full"
                      src={michael}
                      alt="alt"
                    />
                    <div className="flex flex-col text-[#c2c2c2]">
                      <h5 className="text-[.875rem]">Michael Carter</h5>
                      <h5 className="text-[.875rem]">Crypto entusiast</h5>
                    </div>
                  </div>
                  <div className="w-[2.5rem] h-[2.5rem] bg-[#1d1d1d] border border-[#ffffff0d] rounded-full flex justify-center items-center">
                    <img src={twitter} alt="twitter" />
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              whileHover={{
                scale: 1.02,
                y: -5,
                transition: { duration: 0.2 },
              }}
            >
              <div className="  bg-[#141414] rounded-[1.25rem] p-[2rem] border border-[#ffffff1f]  ">
                <p className="text-[.875rem] text-[#c2c2c2]">
                  As someone who understands the tech behind it, I&apos;m
                  impressed by the sophistication of Auralex&apos;s AI
                  algorithms. The risk management features are particularly
                  impressive.
                </p>
                <div className=" mt-[1rem] flex justify-between items-center">
                  <div className=" flex items-center gap-[.875rem] ">
                    <img
                      className="w-[52px] rounded-full"
                      src={pavol}
                      alt="alt"
                    />
                    <div className="flex flex-col text-[#c2c2c2]">
                      <h5 className="text-[.875rem]">John D.</h5>
                      <h5 className="text-[.875rem]">Crypto Trader</h5>
                    </div>
                  </div>
                  <div className="w-[2.5rem] h-[2.5rem] bg-[#1d1d1d] border border-[#ffffff0d] rounded-full flex justify-center items-center">
                    <img src={twitter} alt="twitter" />
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              whileHover={{
                scale: 1.02,
                y: -5,
                transition: { duration: 0.2 },
              }}
            >
              <div className="  bg-[#0d0d0d]/60 rounded-[1.25rem] p-[2rem] border border-[#0d0d0d] blur-[4px] ">
                <p className="text-[.875rem] text-[#c2c2c2]">
                  This platform is everything a crypto user needs. The interface
                  is clean, the fffprocess is smooth, and the privacy features
                  are outstanding. The fact that I can trade without worrying
                  about hidden fees is a game-changer. I'll definitely continue
                  using it!
                </p>
                <div className=" mt-[1rem] flex justify-between items-center">
                  <div className=" flex items-center gap-[.875rem] ">
                    <img className="w-[52px]" src={avi} alt="alt" />
                    <div className="flex flex-col text-[#c2c2c2]">
                      <h5 className="text-[.875rem]">James Walker</h5>
                      <h5 className="text-[.875rem]">Somone</h5>
                    </div>
                  </div>
                  <div className="w-[2.5rem] h-[2.5rem] bg-[#1d1d1d] border border-[#ffffff0d] rounded-full flex justify-center items-center">
                    <img src={twitter} alt="twitter" />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-[1rem] -mt-[3.75rem]"
          >
            <motion.div
              whileHover={{
                scale: 1.02,
                y: -5,
                transition: { duration: 0.2 },
              }}
            >
              <div className="  bg-[#141414] rounded-[1.25rem] p-[2rem] border border-[#ffffff1f] blur-[4px] ">
                <p className="text-[.875rem] text-[#c2c2c2]">
                  This platform is everything a crypto user needs. The interface
                  is clean, the process is smooth, and the privacy
                </p>
                <div className="mt-[1rem] flex justify-between items-center">
                  <div className=" flex items-center gap-[.875rem] ">
                    <img
                      className="w-[52px] rounded-full"
                      src={williams}
                      alt="alt"
                    />
                    <div className="flex flex-col text-[#c2c2c2]">
                      <h5 className="text-[.875rem]">James Walker</h5>
                      <h5 className="text-[.875rem]">Somone</h5>
                    </div>
                  </div>
                  <div className="w-[2.5rem] h-[2.5rem] bg-[#1d1d1d] border border-[#ffffff0d] rounded-full flex justify-center items-center">
                    <img src={twitter} alt="twitter" />
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              whileHover={{
                scale: 1.02,
                y: -5,
                transition: { duration: 0.2 },
              }}
            >
              <div className=" bg-[#141414] rounded-[1.25rem] p-[2rem] border border-[#ffffff1f] ">
                <p className="text-[.875rem] text-[#c2c2c2]">
                  Auralex AI is a game-changer! The AI insights are spot-on, and
                  the real-time data is invaluable. I've never felt more
                  confident in my trades.
                </p>

                <div className="mt-[1rem] flex justify-between items-center">
                  <div className=" flex items-center gap-[.875rem] ">
                    <img
                      className="w-[52px] rounded-full"
                      src={xenu}
                      alt="alt"
                    />
                    <div className="flex flex-col text-[#c2c2c2]">
                      <h5 className="text-[.875rem]">James Walker</h5>
                      <h5 className="text-[.875rem]">Somone</h5>
                    </div>
                  </div>
                  <div className="w-[2.5rem] h-[2.5rem] bg-[#1d1d1d] border border-[#ffffff0d] rounded-full flex justify-center items-center">
                    <img src={twitter} alt="twitter" />
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              whileHover={{
                scale: 1.02,
                y: -5,
                transition: { duration: 0.2 },
              }}
            >
              <div className="  bg-[#141414] rounded-[1.25rem] p-[2rem] border border-[#ffffff1f] ">
                <p className="text-[.875rem] text-[#c2c2c2]">
                  The Token Explorer is amazing! I can easily find new
                  opportunities, and the analytics dashboard is top-notch.
                  Auralex AI is now my go-to tool.
                </p>

                <div className="mt-[1rem] flex justify-between items-center">
                  <div className=" flex items-center gap-[.875rem] ">
                    <img
                      className="w-[52px] rounded-full"
                      src={untraceable1}
                      alt="alt"
                    />
                    <div className="flex flex-col text-[#c2c2c2]">
                      <h5 className="text-[.875rem]">Sarah L.</h5>
                      <h5 className="text-[.875rem]">Defi Enthusiast</h5>
                    </div>
                  </div>
                  <div className="w-[2.5rem] h-[2.5rem] bg-[#1d1d1d] border border-[#ffffff0d] rounded-full flex justify-center items-center">
                    <img src={twitter} alt="twitter" />
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              whileHover={{
                scale: 1.02,
                y: -5,
                transition: { duration: 0.2 },
              }}
            >
              <div className=" bg-[#0d0d0d]/60 rounded-[1.25rem] p-[2rem] border border-[#0d0d0d] blur-[4px] ">
                <p className="text-[.875rem] text-[#c2c2c2]">
                  The platform is user-friendly and efficient. I appreciate the
                  anonymity and transparency it offers. It's a game-changer for
                  crypto enthusiasts!
                </p>
                <div className="mt-[1rem] flex items-center gap-[.875rem] ">
                  <img className="w-[52px]" src={avi} alt="alt" />
                  <div className="flex flex-col text-[#c2c2c2]">
                    <h5 className="text-[.875rem]">James Walker</h5>
                    <h5 className="text-[.875rem]">Somone</h5>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col gap-[1rem]"
          >
            <motion.div
              whileHover={{
                scale: 1.02,
                y: -5,
                transition: { duration: 0.2 },
              }}
            >
              <div className="  bg-[#0d0d0d]/60 rounded-[1.25rem] p-[2rem] border border-[#0d0d0d] blur-[4px] ">
                <p className="text-[.875rem] text-[#c2c2c2]">
                  This platform is everything a crypto user needs. The interface
                  is clean, the process is smooth, and the privacy
                </p>
                <div className="mt-[1rem] flex justify-between items-center">
                  <div className=" flex items-center gap-[.875rem] ">
                    <img className="w-[52px]" src={xenu1} alt="alt" />
                    <div className="flex flex-col text-[#c2c2c2]">
                      <h5 className="text-[.875rem]">James Walker</h5>
                      <h5 className="text-[.875rem]">Somone</h5>
                    </div>
                  </div>
                  <div className="w-[2.5rem] h-[2.5rem] bg-[#1d1d1d] border border-[#ffffff0d] rounded-full flex justify-center items-center">
                    <img src={twitter} alt="twitter" />
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              whileHover={{
                scale: 1.02,
                y: -5,
                transition: { duration: 0.2 },
              }}
            >
              <div className=" bg-[#0d0d0d]/60 rounded-[1.25rem] p-[2rem] border border-[#0d0d0d] blur-[4px] ">
                <p className="text-[.875rem] text-[#c2c2c2]">
                  RetoSwap sets the standard for cryptocurrency trading, what
                  should have been the norm from the start: non-custodial,
                  peer-to-peer, privacy-focused, and permission-less. Accessible
                  to anyone with nothing more than an internet connection.
                </p>
                <div className="mt-[1rem] flex justify-between items-center">
                  <div className=" flex items-center gap-[.875rem] ">
                    <img className="w-[52px]" src={untraceable2} alt="alt" />
                    <div className="flex flex-col text-[#c2c2c2]">
                      <h5 className="text-[.875rem]">James Walker</h5>
                      <h5 className="text-[.875rem]">Somone</h5>
                    </div>
                  </div>
                  <div className="w-[2.5rem] h-[2.5rem] bg-[#1d1d1d] border border-[#ffffff0d] rounded-full flex justify-center items-center">
                    <img src={twitter} alt="twitter" />
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              whileHover={{
                scale: 1.02,
                y: -5,
                transition: { duration: 0.2 },
              }}
            >
              <div className="  bg-[#0d0d0d]/60 rounded-[1.25rem] p-[2rem] border border-[#0d0d0d] blur-[4px] ">
                <p className="text-[.875rem] text-[#c2c2c2]">
                  The platform is user-friendly and efficient. I appreciate the
                  anonymity and transparency it offers. It's a game-changer for
                  crypto enthusiasts!
                </p>
                <div className="mt-[1rem] flex justify-between items-center">
                  <div className=" flex items-center gap-[.875rem] ">
                    <img className="w-[52px]" src={untraceable2} alt="alt" />
                    <div className="flex flex-col text-[#c2c2c2]">
                      <h5 className="text-[.875rem]">James Walker</h5>
                      <h5 className="text-[.875rem]">Somone</h5>
                    </div>
                  </div>
                  <div className="w-[2.5rem] h-[2.5rem] bg-[#1d1d1d] border border-[#ffffff0d] rounded-full flex justify-center items-center">
                    <img src={twitter} alt="twitter" />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
