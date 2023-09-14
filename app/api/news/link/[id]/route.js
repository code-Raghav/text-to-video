import News from "@models/news";
import { connectToDB } from "@utils/database";

export const GET = async (req, { params }) => {
  try {
    await connectToDB();

    // Search for items in the database that match the user's input
    const matchingItems = await News.find({ article: params.id });
    //additional check if mutiple news article recieved by any chance
    const matchingObject = matchingItems.find(
      (obj) => obj.article === params.id
    );

    const matchingId = matchingObject._id.toHexString();

    return new Response(JSON.stringify(matchingId), {
      status: 200,
    });
  } catch (error) {
    return new Response("Failed to find the given news", { status: 500 });
  }
};
