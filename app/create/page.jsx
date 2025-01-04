"use client";
import React, { useState } from "react";
import LogoTitle from "./_components/LogoTitle";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import LogoDesc from "./_components/LogoDesc";
import LogoPalette from "./_components/LogoPalette";
import LogoDesigns from "./_components/LogoDesigns";
import LogoIdea from "./_components/LogoIdea";

function CreateLogo() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState();
  const onHandleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    console.log(formData);
  };
  return (
    <div className="mt-40 p-10 border border-xl 2xl:mx-72">
      {step == 1 ? (
        <LogoTitle
          onHandleInputChange={(v) => onHandleInputChange("title", v)}
        />
      ) : step == 2 ? (
        <LogoDesc onHandleInputChange={(v) => onHandleInputChange("desc", v)} />
      ) : step == 3 ? (
        <LogoPalette
          onHandleInputChange={(v) => onHandleInputChange("palette", v)}
        />
      ) : step == 4 ? (
        <LogoDesigns
          onHandleInputChange={(v) => onHandleInputChange("design", v)}
        />
      ) : step == 5 ? (
        <LogoIdea onHandleInputChange={(v) => onHandleInputChange("idea", v)} />
      ) : null}

      <div className="flex justify-between items-center mt-10">
        {step != 1 ? (
          <Button variant="outline" onClick={() => setStep(step - 1)}>
            <ArrowLeft /> Previous
          </Button>
        ) : (
          <div></div>
        )}
        <Button onClick={() => setStep(step + 1)}>
          <ArrowRight /> Continue
        </Button>
      </div>
    </div>
  );
}

export default CreateLogo;
