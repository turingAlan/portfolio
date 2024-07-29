"use client";

import { projects } from "@/constants/data";
import React from "react";
import { PinContainer } from "./3d-pin";
import { FaLocationArrow } from "react-icons/fa";

const RecentProjects = () => {
  return (
    <section className="py-20">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-x-24 gap-y-8 p-4">
        {projects.map(({ id, title, des, img, iconLists, link }) => {
          return (
            <div
              key={id}
              className="flex h-[32rem] w-[80vw] items-center justify-center sm:h-[41rem] sm:w-[570px] lg:min-h-[32.5rem]"
            >
              <PinContainer key={id} title={link} href={link}>
                <div className="relative mb-10 flex h-[30vh] w-[80vw] items-center justify-center overflow-hidden sm:h-[40vh] sm:w-[570px]">
                  <div className="relative h-full w-full overflow-hidden bg-[#13162d] lg:rounded-3xl">
                    <img src="/bg.png" alt="bg-img" />
                  </div>
                  <img
                    src={img}
                    alt={title}
                    className="absolute bottom-0 z-10"
                  />
                </div>
                <h1 className="line-clamp-1 text-base font-bold md:text-xl lg:text-2xl">
                  {title}
                </h1>
                <p className="line-clamp-2 text-sm font-light lg:text-xl lg:font-normal">
                  {des}
                </p>
                <div className="mb-3 mt-7 flex items-center justify-between">
                  <div className="flex items-center">
                    {iconLists.map((icon, index) => {
                      return (
                        <div
                          key={index}
                          className="flex h-8 w-8 items-center justify-center rounded-full border border-white-100/[0.2] bg-black lg:h-10 lg:w-10"
                          style={{
                            transform: `translateX(-${5 * index * 2}px`,
                          }}
                        >
                          <img src={icon} alt={icon} className="p-2" />
                        </div>
                      );
                    })}
                  </div>
                  <div className="flex items-center justify-center">
                    <p className="flex text-sm text-purple md:text-xs lg:text-xl">
                      Check Live Site
                    </p>
                    <FaLocationArrow className="ms-2" color="#CBACF9" />
                  </div>
                </div>
              </PinContainer>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default RecentProjects;
