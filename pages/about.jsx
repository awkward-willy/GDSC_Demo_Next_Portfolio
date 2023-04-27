import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Head from "next/head";

const about = () => {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <Navbar />
      <h1>About Me</h1>
      <h2>Hi! 我是ＯＯＯ，目前就讀於中央大學ＯＯＯＯ學系。</h2>
      <h3>學歷</h3>
      <ul>
        <li>國立中央大學ＯＯＯＯ學系</li>
        <li>國立臺灣師範大學附屬高級中學</li>
      </ul>
      <h3>經歷</h3>
      <ul>
        <li>ＸＸＸＸＸＸＸＸＸＸＸＸＸＸＸ</li>
        <li>ＸＸＸＸＸＸＸＸＸＸＸＸＸＸＸ</li>
      </ul>
      <h3>社群參與</h3>
      <ul>
        <li>GDSC NCU</li>
        <li>ＸＸＸＸＸＸＸＸＸＸＸＸＸＸＸ</li>
      </ul>
      <Footer />
    </>
  );
};

export default about;
