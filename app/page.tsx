import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/constants/data";
import React from "react";

const Home = () => {
  return (
    <main className="relative mx-auto flex flex-col items-center justify-center overflow-hidden bg-black-100 px-5 sm:px-10">
      <div className="w-full max-w-7xl">
        <FloatingNav navItems={navItems} />
        <Hero />
      </div>
    </main>
  );
};

export default Home;
