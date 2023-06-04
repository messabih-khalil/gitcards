import React from 'react';
import RightBox from './components/RightBox';
import LeftBox from './components/LeftBox';
import Head from 'next/head';
import GithubStart from '@/shared/GithubStart';
const Home = () => {

  return (
    <>
      <Head>
        <title>GitCards</title>
      </Head>
      <section className="w-full pb-5  flex justify-center mt-[15%] lg:pl-14 gap-20">
        {/* Left Div */}
        <LeftBox />
        {/* Right Div */}
        <RightBox />

        {/* Github Star */}
        <GithubStart/>
      </section>
    </>
  );
};

export default Home;
