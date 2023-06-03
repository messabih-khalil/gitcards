import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import RightBox from './components/RightBox';
import LeftBox from './components/LeftBox';
import Head from 'next/head';
const Home = () => {
  return (
    <>
      <Head>
        <title>GitCards</title>
      </Head>
      <section className="w-full pb-5 lg:pb-0 flex justify-center mt-10 lg:mt-72 lg:pl-14 gap-20 ">
        {/* Left Div */}
        <LeftBox />
        {/* Right Div */}
        <RightBox />

        {/* Github Star */}
        <Link
          href="https://github.com/messabih-khalil/gitcards"
          className="absolute  right-10 top-[50px]"
        >
          <motion.div
            className="flex items-center border-b-[2px] border-yellow-400 pb-1 hover:scale-105"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              transition: {
                duration: 0.2,
              },
            }}
          >
            <Image src="/assets/star.png" width={35} height={30} alt=""></Image>
            <p className="ml-1 text-lg font-medium"> Give It A Star</p>
          </motion.div>
        </Link>
      </section>
    </>
  );
};

export default Home;
