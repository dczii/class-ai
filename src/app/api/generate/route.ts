// import OpenAI from "openai";
import { NextResponse } from "next/server";

// const client = new OpenAI({
//   apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
//   dangerouslyAllowBrowser: true,
// });

export async function POST(req: Request) {
  const body = await req.json();
  const { levels, sections } = body;

  if (!levels && !sections) {
    return NextResponse.json({ error: "Missing level or section" }, { status: 400 });
  }

  // const prompt = `Act as a school administrator creating a class schedule for a school management system. The class starts at 8am and ends at 3pm. Generate a detailed weekly plan schedule from Monday to Friday with ${levels} levels, and each level have ${sections} Section. each section should have different class schedule and table should be for each section.`;

  // const response = await client.responses.create({
  //   model: "gpt-4.1-nano",
  //   input: prompt,
  // });

  const test =
    "Certainly! Below is a detailed weekly class schedule for a school management system. The schedule covers 1 level with 2 sections (Section A and Section B). Each section has its unique timetable from Monday to Friday, starting at 8:00 AM and ending at 3:00 PM.\n\n---\n\n### **Level 1 - Section A**\n\n| Time            | Monday        | Tuesday        | Wednesday      | Thursday       | Friday         |\n|-----------------|---------------|----------------|----------------|----------------|----------------|\n| 8:00 - 8:45 AM | Mathematics   | English        | Science        | Social Studies | Mathematics     |\n| 8:45 - 9:30 AM | Mathematics   | English        | Science        | Social Studies | Mathematics     |\n| 9:30 - 9:45 AM | Break         | Break          | Break          | Break          | Break           |\n| 9:45 - 10:30 AM| Science       | Mathematics    | English        | Art            | Science         |\n| 10:30 - 11:15 AM| Science      | Mathematics    | English        | Art            | Science         |\n| 11:15 - 11:30 AM| Break        | Break          | Break          | Break          | Break           |\n| 11:30 - 12:15 PM| Social Studies | Music        | P.E.          | Computer Science | Social Studies |\n| 12:15 - 12:45 PM| Lunch        | Lunch          | Lunch          | Lunch          | Lunch           |\n| 12:45 - 1:30 PM | Arts & Crafts| Language       | P.E.          | Language       | Arts & Crafts  |\n| 1:30 - 2:15 PM  | Computer Science| History     | Math Drill    | History        | Computer Science|\n| 2:15 - 3:00 PM  | Free Study    | Free Study     | Free Study     | Free Study     | Free Study     |\n\n---\n\n### **Level 1 - Section B**\n\n| Time            | Monday        | Tuesday        | Wednesday      | Thursday       | Friday         |\n|-----------------|---------------|----------------|----------------|----------------|----------------|\n| 8:00 - 8:45 AM | English       | Science        | Mathematics    | Language       | English        |\n| 8:45 - 9:30 AM | English       | Science        | Mathematics    | Language       | English        |\n| 9:30 - 9:45 AM | Break         | Break          | Break          | Break          | Break          |\n| 9:45 - 10:30 AM| Social Studies| Art            | Science        | Music          | Social Studies |\n| 10:30 - 11:15 AM| Social Studies| Art           | Science        | Music          | Social Studies |\n| 11:15 - 11:30 AM| Break        | Break          | Break          | Break          | Break          |\n| 11:30 - 12:15 PM| Math Drill   | Computer Science| P.E.        | History        | Math Drill     |\n| 12:15 - 12:45 PM| Lunch        | Lunch          | Lunch          | Lunch          | Lunch          |\n| 12:45 - 1:30 PM | Language     | P.E.           | Art            | Science        | Language       |\n| 1:30 - 2:15 PM  | History       | Computer Science| Music         | Math Drill     | History        |\n| 2:15 - 3:00 PM  | Free Study    | Free Study     | Free Study     | Free Study     | Free Study     |\n\n---\n\n**Notes:**\n- The schedule includes core subjects like Mathematics, English, Science, Social Studies, and additional subjects such as Art, Music, P.E., Computer Science, and Language.\n- Breaks are included to ensure students have time to rest.\n- The last hour (2:15 PM - 3:00 PM) is reserved for free study or revision, encouraging students to catch up or review lessons.\n\nLet me know if you'd like any modifications or additional classes!";

  // return NextResponse.json({ response: response.output_text });
  return NextResponse.json({ response: test });
}
