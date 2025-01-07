import mongoose from "mongoose";

const MilkSchema = new mongoose.Schema(
  {
    liters: Number,
    morning: Number,
    afternoon: Number,
    evening: Number,
    total: Number,
    farmerId: { type: String, required: true },
    date: { type: Date, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("milk-records", MilkSchema);
