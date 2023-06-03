import React from 'react';
import { motion } from 'framer-motion';
const RightBox = () => {
  return (
    <>
      <div className="hidden lg:w-6/12 lg:block relative h-auto overflow-x-clip">
        <div className=" gap-10">
          <div className="flex gap-10 items-end relative">
            <motion.img
              src="/assets/hero/image3.png"
              alt=""
              className="shadow-lg"
              initial={{
                y: '-100vh',
                opacity: 0,
              }}
              animate={{
                y: '0',
                opacity: 1,
                transition: {
                  duration: 0.2,
                },
              }}
            />

            <div className="absolut">
              <motion.img
                src="/assets/hero/image2.png"
                alt=""
                className="shadow-lg absolute top-[-55px]"
                initial={{
                  y: '-100vh',
                  opacity: 0,
                }}
                animate={{
                  y: '0',
                  opacity: 1,
                  transition: {
                    duration: 0.3,
                  },
                }}
              />
              <motion.img
                src="/assets/hero/image6.png"
                alt=""
                className="shadow-lg absolute bottom-0"
                initial={{
                  y: '-100vh',
                  opacity: 0,
                }}
                animate={{
                  y: '0',
                  opacity: 1,
                  transition: {
                    duration: 0.2,
                  },
                }}
              />
            </div>
          </div>

          <div className="flex gap-10 mt-10">
            <motion.img
              src="/assets/hero/image4.png"
              alt=""
              className="shadow-lg"
              initial={{
                y: '100vh',
                opacity: 0,
              }}
              animate={{
                y: '0',
                opacity: 1,
                transition: {
                  duration: 0.2,
                },
              }}
            />

            <motion.img
              src="/assets/hero/image5.png"
              alt=""
              className="shadow-lg"
              initial={{
                x: '100vw',
                opacity: 0,
              }}
              animate={{
                x: '0',
                opacity: 1,
                transition: {
                  duration: 0.2,
                },
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default RightBox;
