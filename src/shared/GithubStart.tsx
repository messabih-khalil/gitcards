import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const GithubStart = () => {
  const jumpingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: .5,
      repeat: Infinity,
      repeatDelay: 10,
    },
  };
  return (
    <>
      <Link
        href="https://github.com/messabih-khalil/gitcards"
        className="absolute  right-10 top-[30px]"
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
          <motion.div
            animate={jumpingAnimation}
            style={{ display: 'inline-block' }}
          >
            <Image src="/assets/star.png" width={25} height={25} alt=""></Image>
          </motion.div>
          <p className="ml-1 text-lg font-medium"> Give It A Star</p>
        </motion.div>
      </Link>
    </>
  );
};

export default GithubStart;
