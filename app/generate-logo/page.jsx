"use client";
import React, { useContext, useEffect, useState } from "react";
import { UserDetailContext } from "../_context/UserDetailContext";
import Prompt from "../_data/Prompt";
import axios from "axios";
import Image from "next/image";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

function GenerateLogo() {
  const { userDetail, setUserDetail } = useContext(UserDetailContext);
  const [formData, setFormData] = useState();
  const [loading, setLoading] = useState(true);
  const [logoImage, setLogoImage] = useState();

  useEffect(() => {
    if (typeof window !== "undefined" && userDetail?.email) {
      const storage = localStorage.getItem("formData");
      if (storage) {
        setFormData(JSON.parse(storage));
        console.log(JSON.parse(storage));
      }
    }
  }, [userDetail]);

  useEffect(() => {
    if (formData?.title) {
      GenerateAILogo();
    }
  }, [formData]);
  const GenerateAILogo = async () => {
    setLoading(true);
    const PROMPT = Prompt.LOGO_PROMPT.replace("{logoTitle}", formData?.title)
      .replace("{logoDesc}", formData?.desc)
      .replace("{logoColor}", formData?.palette)
      .replace("{logoDesign}", formData?.design?.title)
      .replace("{logoIdea}", formData?.idea)
      .replace("{logoPrompt}", formData?.design?.prompt);
    console.log(PROMPT);
    // Generate Logo prompt From AI
    const result = await axios.post("/api/ai-logo-model", {
      prompt: PROMPT,
      email: userDetail?.email,
      title: formData?.title,
      desc: formData?.desc,
    });
    console.log(result.data);
    setLogoImage(result?.data?.image);
    // Generate Logo image
    setLoading(false);
  };

  // **Handle Download Function**
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = logoImage;
    link.download =`${formData?.title || "logo"}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <div className="mt-20 mx-10 md:mx-40 lg:mx-64 ">
      {loading && (
        <div className="flex flex-col items-center justify-center  h-[75vh] space-y-10">
          <Loader2 className="animate-spin w-20 h-20 text-primary" />
          <h2 className="text-3xl font-bold animate-bounce text-blue-400">
            Please wait the AI is the Generating Logo...
          </h2>
        </div>
      )}
      {!loading && (
        <div className="flex flex-col items-center justify-center mt-10 space-y-5">
          <Image src={logoImage} alt="logo" width={600} height={600} />
          <div>
            <Button onClick={handleDownload}>Download Logo</Button>
            <Button variant={"outline"}>Dashboard</Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default GenerateLogo;
