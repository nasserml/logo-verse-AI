import React from "react";
import HeadingDescription from "./HeadingDescription";
import { Input } from "@/components/ui/input";
import Lookup from "@/app/_data/Lookup";

function LogoDesc({ onHandleInputChange }) {
  return (
    <div className="my-10">
      <HeadingDescription
        title={Lookup.LogoTitleDesc}
        description={Lookup.LogoDescDesc}
      />

      <Input
        type="text"
        placeholder={Lookup.InputDescPlaceholder}
        className="mt-5 p-4"
        onChange={(e) => onHandleInputChange(e.target.value)}
      />
    </div>
  );
}

export default LogoDesc;
