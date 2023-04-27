import Image from "next/image";
import profilePic from "../public/normal.jpg";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Head from "next/head";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

export default function Home() {
  return (
    <>
      <Head>
        <title>HomePage</title>
      </Head>
      <Navbar />
      Home
      <RoughNotationGroup show={true}>
        <RoughNotation
          type="box"
          color="red"
          animationDuration={1200}
          strokeWidth={2}
        >
          XXXXXXXXXX
        </RoughNotation>
        <RoughNotation type="highlight" color="#F59E0B">
          Student
        </RoughNotation>
        <RoughNotation type="highlight" color="#84CC16">
          Programmer
        </RoughNotation>
        <RoughNotation type="highlight" color="#10B981">
          Developer
        </RoughNotation>
      </RoughNotationGroup>
      <Image src={profilePic} alt="ProfilePicture" className="w-[100px]" />
      <Footer />
    </>
  );
}
