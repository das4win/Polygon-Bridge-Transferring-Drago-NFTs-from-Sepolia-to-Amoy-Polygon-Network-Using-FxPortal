// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

import "erc721a/contracts/ERC721A.sol";


contract Drago is ERC721A{

    address public owner;

    // maximum Drago NFT can mint is 5
    uint256 public maxQuantity = 5;

    // Drago NFT images url
    string baseUrl = "https://rose-academic-galliform-365.mypinata.cloud/ipfs/QmammmbMHvPZ6nDcdfvYuXPmZEMqLNcNM41RJusWAgmwfh/?pinataGatewayToken=BUvHdzqTAXLLKcHp2oqNjAYDR-lP70mMmWTleG7g7YAbQiipyxtjnf9WjMkT0afP";

    //  prompt description for Drago Image Generation
    string public prompt =
        "Mythical dragon sitting on a roof of a castle,gigantic,dark,colorful,thunder,mist,moon";

    constructor() ERC721A("Drago", "Dg") {
        owner = msg.sender;
    }

    // Owner Modifier
    modifier onlyOwner() {
        require(msg.sender == owner, "Only Owner Can Call this Function");
        _;
    }

    // Mint Drago NFT 
    function mint(uint256 quantity) external payable onlyOwner{
        require(totalSupply() + quantity <= maxQuantity ,"You cannot mint more than 5 NFT");
        _mint(msg.sender, quantity);
    }
    

    // Drago NFT URI 
    function _baseURI() internal view override returns (string memory){
        return baseUrl;
    }

    // Drago NFT Prompt
    function promptDescription() external view returns (string memory) {
        return prompt;
    }
}