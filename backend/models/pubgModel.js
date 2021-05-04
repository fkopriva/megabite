import mongoose from "mongoose";

const pubgSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Pubg = mongoose.model("Pubg", pubgSchema);

export default Pubg;
