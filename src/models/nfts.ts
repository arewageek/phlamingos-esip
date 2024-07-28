import mongoose, { Schema } from "mongoose";

export type NFTType = {
  tokenId: string;
  image: string;
  description: string;
  traits: string;
  createdAt?: number;
  updatedAt?: number;
};

const NFTSchema = new Schema(
  {
    tokenId: { type: Number, required: true },
    image: { type: String, required: true },
    description: { type: String, required: false },
    traits: { type: String, required: true },
  },
  { timestamps: true }
);

const NFT = mongoose.models.NFT || mongoose.model("NFT", NFTSchema);

export default NFT;
