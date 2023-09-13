import News from "@models/news";
import { connectToDB } from "@utils/database";

export const GET = async (req) => {
  try {
    await connectToDB();
    const news = await News.find({}).populate("title");
    return new Response(JSON.stringify(news), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all news articles", { status: 500 });
  }
};
