import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems } from "@/constants/data";

const Grid = () => {
  return (
    <section id="about" aria-label="about">
      <BentoGrid className="w-full">
        {gridItems.map((gridItem, idx) => {
          return (
            <BentoGridItem
              key={idx}
              {...gridItem}
              className={gridItem.className}
            />
          );
        })}
      </BentoGrid>
    </section>
  );
};

export default Grid;
