"use client";
import Image from "next/image";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import img from '../../public/Images/IMG_20231231_183919_883.jpg'

const About = () => {
  const words = `
    Hello there! I'm Bhavya, a forward-thinking Full Stack Developer with a Bachelor's degree from the renowned IIT, Ropar. My coding repertoire spans C++, JavaScript, and Python, and I love crafting intricate backend systems and captivating user interfaces. From securing blockchain transactions to weaving engaging browser games, I bring expertise in Next.Js, Nest.Js, and diverse databases. I infuse a creative touch into my code. Beyond the digital realm, I'm an avid learner and a problem-solver. Join me on this exciting journey where innovation and passion collide!
  `;
  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center" id="about">
      <h1 className="text-4xl md:text-6xl mb-8 text-white">
        About me
      </h1>
      <div className="mx-4 md:mx-16 text-center flex flex-col md:flex-row items-center gap-x-24">
        <Image src={img} alt="img" className="rounded-[30px] border-white border-2 p-2" width={400} height={300} />
        <TextGenerateEffect words={words} className="mb-4 md:mb-0 md:mr-8" />
      </div>
    </div>
  );
};

export default About;
