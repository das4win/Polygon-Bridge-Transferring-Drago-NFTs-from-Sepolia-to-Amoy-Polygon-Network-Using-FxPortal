// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
const fxRootContractABI = require("../fxRootContractABI.json");
const nftContractJSON = require("../artifacts/contracts/Drago.sol/Drago.json");

const nftAddress = "0x3196159279bba5381bDF040dDb1Fa1142915f725"; // place your erc271a contract address here
const nftABI = nftContractJSON.abi;
const fxERC271ARootAddress = "0x9E688939Cb5d484e401933D850207D6750852053";
const walletAddress = "0x2C63CF6208b03E4e0dc628E125Ce82aa2aBbd0FB"; // place your public address for your wallet here

async function main() {

    const nftContract = await hre.ethers.getContractAt(nftABI, nftAddress);
    const fxContract = await hre.ethers.getContractAt(fxRootContractABI, fxERC271ARootAddress);
    
    const approveTx = await nftContract.setApprovalForAll(fxERC271ARootAddress, true);
    await approveTx.wait();

    console.log('Approval Of Drago NFT Has Been Successfull');
for( i=0;i<5;i++){
    const depositTx = await fxContract.deposit(nftAddress,walletAddress,i,"0x6556");
    await depositTx.wait();
}

    console.log("Drago Has Sended To Amoy Network");
  
  }
  
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });