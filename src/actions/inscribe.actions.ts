"use server";
import fs from "fs";
import { request } from "http";

export async function encodeImages(data: FormData) {
  // : Promise<{ status: "success" | "failed" | "unknownError" }>
  console.log({ data });

  const files = data.get("file");
  console.log({ files });

  // if (files) {
  //   files.forEach((image: File) => {
  //     encodeEachImage({ image });
  //   });
  // }
}

async function encodeEachImage({ image }: { image: File }) {
  const byte = await image.arrayBuffer();
  const buffer = Buffer.from(byte);

  console.log({ buffer });

  return buffer;
}

export async function encodeImageUrl(
  url: string
): Promise<{ hex: string; base64: string }> {
  // console.log(url);

  try {
    const response = fetch(url);
    const arrayBuffer = (await response).arrayBuffer();

    const buffer = Buffer.from(await arrayBuffer);
    const base64Encoded = buffer.toString("base64");

    const back2Buffer = Buffer.from(base64Encoded, "base64");

    const hex = back2Buffer.toString("hex");
    console.log(hex);

    console.log({ hex, base64: base64Encoded });

    return { hex, base64: base64Encoded };
  } catch (err) {
    console.log(err);
    return { hex: "", base64: "" };
  }
}
