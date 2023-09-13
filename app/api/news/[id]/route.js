import News from "@models/news";
import { connectToDB } from "@utils/database";

export const GET = async (request, { params }) => {
  try {
    await connectToDB();

    const news = await News.findById(params.id).populate("title");
    if (!news) return new Response("Article not found", { status: 404 });

    return new Response(JSON.stringify(news), { status: 200 });
  } catch (error) {
    return new Response("Internal Server Error", { status: 500 });
  }
};

// export const PATCH = async (request, { params }) => {
//   const { prompt, tag } = await request.json();

//   try {
//     await connectToDB();

//     // Find the existing prompt by ID
//     const existingPrompt = await Prompt.findById(params.id);

//     if (!existingPrompt) {
//       return new Response("Recipie not found", { status: 404 });
//     }

//     // Update the prompt with new data
//     existingPrompt.prompt = prompt;
//     existingPrompt.tag = tag;

//     await existingPrompt.save();

//     return new Response("Successfully updated the Recipies", { status: 200 });
//   } catch (error) {
//     return new Response("Error Updating Recipie", { status: 500 });
//   }
// };

// export const DELETE = async (request, { params }) => {
//   try {
//     await connectToDB();

//     // Find the prompt by ID and remove it
//     await Prompt.findByIdAndRemove(params.id);

//     return new Response("Recipie deleted successfully", { status: 200 });
//   } catch (error) {
//     return new Response("Error deleting Recipie", { status: 500 });
//   }
// };
