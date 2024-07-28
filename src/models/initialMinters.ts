import mongoose, { Schema } from "mongoose";

const initialMintersSchema = new Schema(
  {
    tokenId: { type: String, required: true },
    minterAddres: { type: String, required: true },
  },
  { timestamps: true }
);

const initialMinters =
  mongoose.models.initialMinters ||
  mongoose.model("initialMinters", initialMintersSchema);

export default initialMinters;
