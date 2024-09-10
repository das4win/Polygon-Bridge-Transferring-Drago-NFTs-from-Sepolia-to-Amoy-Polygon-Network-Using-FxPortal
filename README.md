
# Polygon Bridge: Transferring Drago NFTs from Sepolia to Amoy Polygon Network Using FxPortal

## Overview
This project demonstrates the process of transferring Drago NFTs from the Sepolia testnet to the Amoy Polygon Network using the FxPortal bridge. It involves the following key steps:
1. ERC721A  drago NFT Contract: Creating a contract capable of minting NFTs in batches.
2. Approval & Transfer: Approving and transferring NFTs via FxPortal from Sepolia to the Amoy Polygon Network.
3. Balance Check: Verifying the balance of NFTs on the Amoy Polygon Network after transfer.

The transfer process typically takes 15-25 minutes through the FxPortal bridge.

## Getting Started

### Prerequisites
1. IDE Setup: Use an IDE like [VSCode](https://code.visualstudio.com/) or [Gitpod](https://www.gitpod.io/).
2. NFT Images: Create images for your NFTs using AI tools like [Adobe FireFly](https://www.adobe.com/products/firefly.html).
3. IPFS: Upload your images to IPFS using a service like [Pinata](https://www.pinata.cloud/) to obtain the IPFS URLs for your NFTs.
4. Test SepoliaETH: Acquire test SepoliaETH from the [ChainLink Faucet](https://faucets.chain.link/).

### Installation

1. Node.js: Install [Node.js](https://nodejs.org/en/download/current) for running scripts and managing dependencies.
2. HardHat: Install [HardHat](https://hardhat.org/) for deploying and interacting with smart contracts.
3. Configuration: Place your private key in env.example and rename it to .env.

### Setup and Execution

1. Install Dependencies:
     npm install
   
2. Deploy NFT Contract:
     npx hardhat run scripts/deploy.js --network sepolia
   
3. Update Contract Address: Paste the newly deployed contract address into mint.js and approveDeposit.js.

4. Mint NFTs:
     npx hardhat run scripts/mint.js --network sepolia
   
5. Approve and Deposit NFTs:
     npx hardhat run scripts/approveDeposit.js --network sepolia
   
6. Wait for Transfer: The transfer to the Amoy Polygon Network may take 15-20 minutes.

7. Verify Transfer: Check the transactions on [Amoy Polyscan](https://amoy.polygonscan.com/).

8. Check NFT Balance: Use the contract address on the Amoy Polygon Network to verify your  drago NFT balance.
     npx hardhat run scripts/getBalance.js --network amoy
   
## Prombles Encounter

- Insufficient SepoliaETH: Obtain more from [ChainLink Faucet](https://faucets.chain.link/).
- Dependency Issues: Ensure all required dependencies, including Node.js and HardHat, are installed.

For additional Guidance, contact:ararundas02@gmail.com

## Contributors

For inquiries or contributions, please reach out to [@Arun](mailto:ararundas02@gmail.com).

## License

This project is licensed under the [ArunDas] License. Refer to the LICENSE.md file for details.