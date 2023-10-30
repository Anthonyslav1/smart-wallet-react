import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import {
  ThirdwebProvider,
  localWallet,
  smartWallet,
} from "@thirdweb-dev/react";
import "./styles/globals.css";
import { Sepolia } from "@thirdweb-dev/chains";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
export const activeChain = Sepolia;

export const smartWalletConfig = smartWallet(localWallet(), {
  factoryAddress: "0x067a346255F41c6ba8e40A3eA235768b0eAB3936",
  gasless: true,
});

export const editionDropAddress = "0x18960285AEFB2a9b57A790B08411204Ae42D48B5";
export const editionDropTokenId = "0";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <ThirdwebProvider
      clientId={import.meta.env.VITE_TEMPLATE_CLIENT_ID}
      activeChain={activeChain}
      supportedWallets={[smartWalletConfig]}
    >
      <App />
    </ThirdwebProvider>
  </React.StrictMode>
);
