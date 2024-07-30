import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { testimonials } from "@/constants/data";

const Testimonials = () => {
  return (
    <section className="py-20" id="testimonials">
      <h1 className="heading">
        Kind words from <span className="text-purple">Clients & Collegues</span>
      </h1>
      <div className="flex flex-col items-center">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </section>
  );
};

export default Testimonials;
