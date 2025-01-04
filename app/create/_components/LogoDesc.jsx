import React from "react";
import HeadingDescription from "./HeadingDescription";
import { Input } from "@/components/ui/input";
import Lookup from "@/app/_data/Lookup";

function LogoDesc({ onHandleInputChange , formData}) {
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
        value={ formData?.desc }
        onChange={(e) => onHandleInputChange(e.target.value)}
      />
    </div>
  );
}

export default LogoDesc;
