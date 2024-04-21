import mongoose from "mongoose";
const lessonsSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  description: String,
  module: { type: String, required: true },
});

const modulesSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    description: String,
    course: { type: String, required: true },
    startDate: Date,
    endDate: Date,
    image: String,
    lessons: {
      type: [lessonsSchema],
      default: undefined,
    },
  },
  { collection: "modules" }
);
export default modulesSchema;
