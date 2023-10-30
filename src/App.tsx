import { ConnectWallet, smartWallet } from "@thirdweb-dev/react";
import "./styles/Home.css";
import { NFTComponent } from "./components/nft";
import { ConnectUI } from "./components/connect";
import { AddSigner } from "./components/add-signer";
import { AddMetamask } from "./components/add-metamask";

export default function Home() {
  return (
    <main className="main">
      <div className="container">
        <div className="header">
          <h1 className="title">
            <span className="gradient-text-0">
              <a
                href="https://github.com/anthonyslav1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Smart Wallets
              </a>{" "}
            </span>
            demo
          </h1>
          <p>
            Signless + gasless UX using{" "}
            <a href="https://github.com/anthonyslav1">
              LocalWallet
            </a>{" "}
            and{" "}
            <a href="https://github.com/anthonyslav1">
              SmartWallet
            </a>
          </p>
          <hr className="divider" />
          <p className="description">
            With <code className="code">{"<ConnectWallet />"}</code> UI
            component{" "}
          </p>
          <div className="connect">
            <ConnectWallet btnTitle="Connect" />
          </div>
        </div>
        <div className="connect">
          <hr className="divider" />
          <p className="description">
            With <code className="code">{"useConnect()"}</code> hook and custom
            UI
          </p>
        </div>
        <ConnectUI />
        <hr className="divider" />
        <p className="description">
          
          <br />
          No gas cost or signature required!
        </p>
        <NFTComponent />
        <hr className="divider" />
        
        
        
      </div>
    </main>
  );
}
