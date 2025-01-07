const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

export const LOGO_IDEAS_GENERATOR_AI_MODEL = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: 'Based on Logo of type Minimalist Logo Generate a text prompt to create Logo for Logo Title/Brand name: Chess Verse, with description: Chess Verse AI and referring to prompt: Create a \nminimalist logo design with clean lines and minimalistic elements. , give me 5/4 suggestions of logo idea (each idea with maximum 4-5 words)  Result in JSON Format {\n"logo_ideas": [...]\n}\n\n',
        },
      ],
    },
    {
      role: "model",
      parts: [
        { text: "```json\n" },
        {
          text: '{\n"logo_ideas": [\n    "Chess piece geometric",\n    "Abstract chess board",\n    "AI brain chess",\n    "Minimalist knight symbol",\n   "Interlocking C and V"\n  ]\n}',
        },
        { text: "\n```" },
      ],
    },
  ],
});

// const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
// console.log(result.response.text());
