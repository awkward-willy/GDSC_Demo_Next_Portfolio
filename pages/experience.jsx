import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { timeLineData } from "../constants";
import Head from "next/head";

const experience = () => {
  return (
    <>
      <Head>
        <title>Experience</title>
      </Head>
      <Navbar />
      <div className=" my-[3%] pl-[7%]">
        <h1 className="text-4xl">Experience</h1>
      </div>
      <VerticalTimeline lineColor="#6D6D6B">
        {timeLineData.map((data, index) => {
          return (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#8E9AA8", color: "#000" }}
              contentArrowStyle={{
                borderRight: "7px solid  #8E9AA8",
              }}
              date={data.date}
              iconStyle={{ background: "#8E9AA8", color: "#000" }}
            >
              <h3 className="vertical-timeline-element-title">{data.title}</h3>
              <h4 className="vertical-timeline-element-subtitle">
                {data.subtitle}
              </h4>
              <p>{data.content}</p>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
      <Footer />
    </>
  );
};

export default experience;
