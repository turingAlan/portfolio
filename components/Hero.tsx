import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import BorderButton from "./ui/BorderButton";
import { FaLocationArrow } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="pb-20 pt-36">
      <div>
        <Spotlight
          fill="white"
          className="-left-10 -top-40 h-screen md:-top-20 md:left-32"
        />
        <Spotlight
          fill="purple"
          className="left-full top-10 h-[80vh] w-[50vw]"
        />
        <Spotlight fill="blue" className="left-80 top-28 h-[80h] w-[50vw]" />
      </div>
      <div className="dark:bg-grid-white/[0.03] bg-grid-black/[0.3] absolute left-0 top-0 flex h-screen w-full items-center justify-center bg-white dark:bg-black-100">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      </div>
      <div className="relative z-10 my-20 flex justify-center">
        <div className="z-40 flex max-w-[89vw] flex-col items-center justify-center md:max-w-2xl lg:max-w-[60vw]">
          <h2 className="max-w-80 text-xs uppercase tracking-widest text-blue-100">
            Creating Magic with Code
          </h2>
          <TextGenerateEffect
            words="Transforming Concepts into Elegant Code"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />
          <p className="md-tracking-wider mb-4 text-center text-sm md:text-lg lg:text-2xl">
            Hi, I&apos;m Sarthak, a Software Developer based in India.
          </p>
          <a href="#about">
            <BorderButton
              title="Show my work"
              icon={<FaLocationArrow />}
              postion="right"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
