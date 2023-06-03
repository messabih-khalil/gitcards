import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import HomeButton from './HomeButton';
const LeftBox = () => {
  return (
    <>
      <motion.div
        className="flex flex-col items-center lg:items-start lg:w-6/12 mt-[100px] md:mt-0 "
        initial={{
          scale: 1.5,
          opacity: 0,
        }}
        animate={{
          scale: 1,
          opacity: 1,
          transition: {
            duration: 0.4,
          },
        }}
      >
        {/* Logo */}
        <div className="logo items-center flex flex-col justify-center lg:flex-row lg:absolute top-10">
          <Image
            src="/assets/logo.png"
            alt="logo"
            width={90}
            height={90}
            className="shadow-md rounded-lg lg:w-14"
          />
          <p className="font-mono font-bold text-3xl lg:text-[22px] mt-5 lg:mt-0 lg:ml-3 ">
            GitCards
          </p>
        </div>
        {/* Header Description */}
        <h1 className="font-mono font-bold text-[45px] sm:text-[60px]  leading-tight mt-7 text-center lg:text-start">
          Effortless Project Card
          {/* <br /> */}
          Creation for GitHub Profile
        </h1>
        <p className="font-mono text-gray-600 text-center lg:text-start  text-[16px] sm:text-[22px] mt-7">
          Git Cards: Empower Your GitHub Projects with
          <br className="hidden lg:block" />
          Customizable Cards for Visual
          <br className="hidden lg:block" /> Representation
        </p>
        <HomeButton />
      </motion.div>
    </>
  );
};

export default LeftBox;
