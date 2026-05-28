import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST() {
  const prompt = `
Generate a FUNNY but FEASIBLE public challenge for a teenager or college student.

IMPORTANT:
- Keep it safe.
- No illegal activity.
- No dangerous stunts.
- No violence.
- Must feel chaotic enough for TikTok.
- Must be something someone could actually attempt in public.
- Think awkward confidence, public embarrassment, harmless chaos.

Examples of vibe:
- singing in public
- weird introductions
- funny public dares
- harmless social challenges
- bizarre confidence tests

Return ONLY valid JSON.

Format:
{
  "title": "",
  "challenge": "",
  "influencer": "",
  "controversy": "",
  "views": "",
  "headline": ""
}

The views should be absurdly optimistic.
The headline should sound like fake internet news.
The influencer plan should sound corporate and ridiculous.
`;

  const response = await openai.chat.completions.create({
    model: "gpt-4.1-mini",
    messages: [{ role: "user", content: prompt }],
    temperature: 1.2,
    response_format: { type: "json_object" },
  });

  const text =
    response.choices[0].message.content
      ?.replace(/```json/g, "")
      .replace(/```/g, "")
      .trim() || "{}";

  try {
    return Response.json(JSON.parse(text));
  } catch {
    return Response.json({
      title: "FLIGHT FAILURE",
      challenge: text,
    });
  }
}
