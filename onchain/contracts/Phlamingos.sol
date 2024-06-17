// SPDX-License-Identifier: MIT

pragma solidity ^0.8.24;

import {ReentrancyGuard} from "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import { IPhlamingos } from "./interface/IPhlamingos.sol";

contract Phlamingos is IPhlamingos, ReentrancyGuard{
    uint public constant MAX_MINT = 10000;
    uint public constant AUCTION_RESERVATION = 2500;
    uint public totalSupply;

    mapping(address => Team[]) public team;
    Ethscription[] public ethscription;

    mapping(uint => bytes32) private notMinted;
    mapping(uint => bytes32) public minted;

    // modifiers

    modifier TeamOnly() {
        require(team[msg.sender].isActive, "Only active team wallet is authorized");
        _;
    }

    modifier BotWalletOnly() {
        require(team[msg.sender].role == Role.BOT, "Address is not authorized");
        _;
    }

    modifier deployerOnly() {
        require(team[msg.sender].role ==Role.ADMIN, "Caller is not deployer");
        _;
    }

    constructor(){}

    function mintEthscription (address to, uint amount) external nonReentrant() returns (bytes32[]){
        bytes32[] memory tokens;

        for(uint i = totalSupply; i < amount; i++){
            tokens.push(notMinted[i]);
            minted.push(notMinted[i]);
        }

        return bytes32[];
    }

    function mintedTokensCount () external view returns (uint){
        return totalSupply;
    }

    function unmintedTokensCount () external view returns (uint){
        return MAX_MINT - totalSupply;
    }
}