"use client";
import React, { useState } from "react";
import HeadingDescription from "./HeadingDescription";
import Lookup from "@/app/_data/Lookup";
import LogoDesign from "@/app/_data/LogoDesign";
import Image from "next/image";

function LogoDesigns({ onHandleInputChange, formData }) {
  const [selectedOption, setSelectedOption] = useState(formData?.design);

  return (
    <div className="my-10">
      <HeadingDescription
        title={Lookup.LogoDesignTitle}
        description={Lookup.LogoDesignDesc}
      />

      <div className="grid grid-cols-2 md:grid-cols-3 gap-10 mt-10">
        {LogoDesign.map((design, index) => (
          <div
            key={index}
            className={`cursor-pointer p-1 border-primary hover:border-2 rounded-lg ${selectedOption == design.title && 'border-primary border-2'}`}
            onClick={() => {
              setSelectedOption(design.title);
              onHandleInputChange(design);
            }}
          >
            <Image
              src={design.image}
              alt={design.title}
              width={300}
              height={200}
              className="cursor-pointer w-full rounded-xl h-[200px] object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default LogoDesigns;
