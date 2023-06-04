import Input from '@/shared/Input';
import Image from 'next/image';
import React from 'react';
import ImagePicker from './leftSide/ImagePicker';
import { useSelector, useDispatch } from 'react-redux';
import CardAlignment from './leftSide/CardAlignment';
import { setTitle, setStack, setUrlLink, setImage } from '@/store';
import { motion } from 'framer-motion';
import GithubStart from '@/shared/GithubStart';

const LeftSide = () => {
  const { urlLink, title, stack, image } = useSelector(
    (state: any) => state.card
  );

  const formVariant = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.2,
        when: 'beforeChildren',
      },
    },
  };

  const inputVariant = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.15,
      },
    },
  };

  const staggerChildren = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.10,
      },
    },
  };

  return (
    <>
      <div className="w-full lg:w-5/12 py-5 px-5 overflow-auto relative">
        {/* Github Star */}
        <GithubStart/>
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/assets/logo.png"
            alt="logo"
            width={50}
            height={50}
            className="shadow-md rounded-lg w-[50px]"
          />
        </motion.div>

        <motion.div variants={formVariant} initial="initial" animate="animate">
          {/* Image Upload */}
          <motion.div variants={staggerChildren}>
            <motion.div variants={inputVariant}>
              <p className="font-mono text-lg mt-8">Project Image</p>
              <div
                className="w-full flex items-center justify-center h-[130px] rounded-xl mt-5 border-dotted border-[3px] border-grColor bg-gray-50 cursor-pointer overflow-hidden"
                id="uploadInput"
              >
                <ImagePicker handleOnChange={setImage} />
              </div>
            </motion.div>

            {/* Other Inputs */}
            <motion.div variants={inputVariant}>
              <Input
                type="text"
                placeHolder="Your Project Title"
                label="Project Title"
                value={title}
                handleOnChange={setTitle}
              />
            </motion.div>

            <motion.div variants={inputVariant}>
              <Input
                type="text"
                placeHolder="html , css , js , ..."
                label="Project Stack : * Separate the stack with a comma. *"
                value={stack}
                handleOnChange={setStack}
              />
            </motion.div>

            <motion.div variants={inputVariant}>
              <Input
                type="text"
                placeHolder="https://github.com/user/example"
                label="Github Repo Or Website"
                value={urlLink}
                handleOnChange={setUrlLink}
              />
            </motion.div>

            {/* Card Choice */}
            <motion.div variants={inputVariant}>
              <CardAlignment />
            </motion.div>
          </motion.div>
        </motion.div>

        
      </div>
    </>
  );
};

export default LeftSide;
