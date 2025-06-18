import OpenAI from "openai";
const client = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export async function GET() {
  const response = await client.responses.create({
    model: "gpt-4.1",
    input:
      "act as school administrator doing class management system. There are 5 levels, 1 section each. class starts from 8am to 3pm. Create A class schedule for each level",
  });
  return Response.json({ full: response, response: response.output_text });
}
