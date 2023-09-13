import { Schema, model, models } from "mongoose";

const NewsSchema = new Schema({
  title: {
    type: String,
    required: [true, "News title is required."],
  },
  content: {
    type: String,
    required: [true, "News content is required."],
  },
  date: {
    type: String,
    required: [true, "Date is required"],
  },
  video: {
    type: String,
  },
});

const News = models.News || model("News", NewsSchema);

export default News;
