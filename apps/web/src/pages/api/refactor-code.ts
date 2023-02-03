import { NextApiRequest, NextApiResponse } from "next";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.status(405).json({ message: "Method not allowed" });
  }

  if (!req.body?.message) {
    res.status(400).json({ message: "Bad request" });
  }

  const { message } = req.body;

  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `Please refactor the following code snippet (for readable, maintainable and effective) split the code into multi function as possible: ${message}`,
      temperature: 0.5,
      max_tokens: 2048,
    });

    res.status(200).json({ result: completion.data.choices[0].text });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
}
