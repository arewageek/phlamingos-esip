// SPDX-License-Identifier: MIT

pragma solidity ^0.8.24;

import { Phlamingos } from "./interface/IPhlamingos.sol";

contract Phlamingos is IPhlamingos{
    uint public constant MAX_MINT;
    uint public constant AUCTION_RESERVATION = 2500;

    mapping(address => Team[]) public team;
    Ethscription[] public ethscription;
}