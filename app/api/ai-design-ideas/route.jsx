import Prompt from "@/app/_data/Prompt";
import { LOGO_IDEAS_GENERATOR_AI_MODEL } from "@/configs/AiModel";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { logoType, logoTitle, logoDesc, logoPrompt } = await req.json();

  const IDEAS_PROMPT = Prompt.DESIGN_IDEA_PROMPT.replace("{logoType}", logoType)
    .replace("{logoTitle}", logoTitle)
    .replace("{logoDesc}", logoDesc)
    .replace("{logoPrompt}", logoPrompt);

  console.log(IDEAS_PROMPT);

  try {
    const result = await LOGO_IDEAS_GENERATOR_AI_MODEL.sendMessage(
      IDEAS_PROMPT
    );
    console.log(result.response.text());
    return NextResponse.json(JSON.parse(result.response.text()));
  } catch (error) {
    console.log(error);
    return NextResponse.error();
  }
}
