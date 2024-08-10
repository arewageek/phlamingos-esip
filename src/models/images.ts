import mongoose, { Document, Schema } from "mongoose";

export interface ImageInterface extends Document {
  hex: string;
  id: number;
  count: number;
  type: string;
  gender: "male" | "female";
  skinTon: string;
  accessories: string;
}

const ImageSchema = new Schema(
  {
    id: { type: Number, required: true },
    hex: { type: String, required: true },
    type: { type: String, required: true },
    gender: { type: String, required: true },
    skinTon: { type: String, required: true },
    accessories: { type: String, required: true },
    count: { type: Number, required: true },
  },
  { timestamps: true }
);

const Image =
  mongoose.models.Image || mongoose.model<ImageInterface>("Image", ImageSchema);

export default Image;
