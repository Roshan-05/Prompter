import Prompt from "@models/Post";
import { connectToDB } from "@utils/database";

export const POST = async (req) => {
  const { creator, prompt, tag } = await req.json();
  try {
    await connectToDB();

    const newPrompt = new Prompt({
      creator,
      prompt,
      tag,
    });
    await newPrompt.save()

    return new Response(JSON.stringify(newPrompt), { status: 201 });
  } catch (error) {
    return new Response("Failed to create new prompt", { status: 504 });
  }
};
