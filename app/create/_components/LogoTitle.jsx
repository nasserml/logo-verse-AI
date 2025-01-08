"use client";
import React, { useState } from "react";
import HeadingDescription from "./HeadingDescription";
import Lookup from "@/app/_data/Lookup";
import { Input } from "@/components/ui/input";
// import { useSearchParams } from "next/navigation";

function LogoTitle({ onHandleInputChange, formData }) {
  // const searchParam = useSearchParams();
  const [title, setTitle] = useState( "");
  return (
    <div className="my-10">
      <HeadingDescription
        title={Lookup.LogoTitle}
        description={Lookup.LogoTitleDesc}
      />

      <Input
        type="text"
        placeholder={Lookup.InputTitlePlaceholder}
        className="mt-5 p-4"
        // defaultValue={ formData?.title ||title }
        value={ formData?.title || title}
        onChange={(e) => onHandleInputChange(e.target.value)}
      />
    </div>
  );
}

export default LogoTitle;
