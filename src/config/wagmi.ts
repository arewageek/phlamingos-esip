import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { mainnet, sepolia } from "viem/chains";

export const config = getDefaultConfig({
  appName: "Phlamingos NFT",
  projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_CLOUD_API as string,
  chains: [mainnet, sepolia],
  ssr: true, // If your dApp uses server side rendering (SSR)
});
