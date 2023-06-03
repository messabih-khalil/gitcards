import React from 'react';
import LeftSide from './components/left';
import RightSide from './components/right';
import Head from 'next/head';

const CreatePage = () => {
  return (
    <>
     <Head>
        <title>Create Your Cards</title>
      </Head>
      <section className="md:flex flex-col lg:flex-row w-full h-auto lg:h-[100vh]">
        <LeftSide />
        <RightSide />
      </section>
    </>
  );
};

export default CreatePage;
