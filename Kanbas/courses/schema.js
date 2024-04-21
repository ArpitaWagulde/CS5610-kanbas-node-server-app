import mongoose from "mongoose";
const coursesSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    number: { type: String, required: true, unique: true },
    startDate: Date,
    endDate: Date,
    image: String,
  },
  { collection: "courses" }
);
export default coursesSchema;
