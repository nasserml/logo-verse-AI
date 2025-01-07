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

export const AILogoPrompt = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {text: "Generate a comprehensive and details text prompt at least 9 lines to create Logo for Logo Title/Brand name: Pet Store, with description: Pet Store for cats, with Color combination of Pastel Colors and include Cartoon Logo logo design and logo idea: Cute cartoon cat and referring to prompt: Create a set of vibrant, playful logo designs featured in a cartoon style.  Give me result in JSON portal with prompt field only {'prompt': string}\n\n"},
      ],
    },
    {
      role: "model",
      parts: [
        {text: "```json\n"},
        {text: "{\"prompt\": \"Create a logo for a pet store specializing in cats. The brand name is \\\"Pet Store\\\". The logo should be in a cartoon style, featuring a cute cartoon cat. Use a pastel color palette. The design should be vibrant and playful. Explore different logo variations, including different cat poses, expressions, and background elements.  Consider incorporating playful text fonts that complement the cartoon style.  The overall feel should be friendly, approachable, and appealing to cat lovers.  Ensure the logo is versatile and easily adaptable to different sizes and applications, such as website banners, social media icons, and storefront signage.  Submit multiple logo options showcasing variations in style and composition within the defined parameters. The logo should be memorable, easy to recognize, and effectively communicate the brand's focus on cats and create a positive emotional response. The color scheme should maintain a consistent pastel feel throughout all logo variations.  The cartoon cat should be the central focus of each logo, emphasizing its cuteness and playfulness.\"}"},
        {text: "\n```"},
      ],
    },
  ],
});

// const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
// console.log(result.response.text());
