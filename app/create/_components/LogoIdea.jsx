"use client";
import Lookup from "@/app/_data/Lookup";
import axios from "axios";
import React, { use, useEffect, useState } from "react";
import HeadingDescription from "./HeadingDescription";
import { Loader2 } from "lucide-react";

function LogoIdea({ onHandleInputChange, formData }) {
  const [logoIdeas, setLogoIdeas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedIdea, setSelectedIdea] = useState();

  useEffect(() => {
    formData && GetLogoIdeas();
  }, [formData]);

  const GetLogoIdeas = async () => {
    const result = await axios.post("/api/ai-design-ideas", {
      logoType: formData.design.title,
      logoTitle: formData.title,
      logoDesc: formData.desc,
      logoPrompt: formData.design.prompt,
    });
    console.log(result.data);
    setLogoIdeas(result.data.logo_ideas);
    setLoading(false);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center w-full h-[150px]">
        <Loader2 className="animate-spin w-8 h-8" />
      </div>
    );
  }

  return (
    <div>
      <HeadingDescription
        title={Lookup.LogoTitleIdea}
        description={Lookup.LogoIdeaDesc}
      />

      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-5 justify-center">
        {logoIdeas &&
          logoIdeas.map((idea, index) => (
            <h2
              key={index}
              className={`flex flex-col border items-center p-5 rounded-lg  justify-center text-center cursor-pointer ${
                selectedIdea === idea && "border-2  border-primary"
              }`}
              onClick={() => {
                setSelectedIdea(idea);
                onHandleInputChange(idea);
              }}
            >
              {idea}
            </h2>
          ))}
      </div>
    </div>
  );
}

export default LogoIdea;
