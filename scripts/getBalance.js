// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
const nftContractJSON = require("../artifacts/contracts/Drago.sol/Drago.json");

const nftAddress = "0x43635AAFE21c2aAb54590A6AB53Cccac320C312d"; // place your erc20 contract address here
const nftABI = nftContractJSON.abi;
const walletAddress = "0x2C63CF6208b03E4e0dc628E125Ce82aa2aBbd0FB"; // place your public address for your wallet here

async function main() {

    const nft = await hre.ethers.getContractAt(nftABI, nftAddress);

    console.log("You now have: " + await nft.balanceOf(walletAddress) + " Drago nft in Your Wallet");
  }
  
  // We recommend this pattern to be able to use async/await everywhere
  // and properly handle errors.
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });