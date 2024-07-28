"use server";

import NFT, { NFTType } from "@/models/nfts";

export async function selectRandomNFT(
  count: number
): Promise<NFTType[] | undefined> {
  try {
    const nfts = await NFT.aggregate([{ $sample: { size: count } }]).exec();
    console.log(nfts);

    return nfts;
  } catch (error) {
    console.log(error);
    return undefined;
  }
}

export async function mintNFT(count: number) {
  try {
    const mintedNFT = await selectRandomNFT(count);
  } catch (error) {
    console.log(error);
    return error;
  }
}
