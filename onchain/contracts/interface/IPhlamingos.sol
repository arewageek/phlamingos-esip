// SPDX-License-Identifier: MIT

pragma solidity ^0.8.24;

interface IPhlamingos {
    
    // project team

    enum Role {ADMIN, BOT}
    
    struct Team {
        address wallet;
        Role role;
        bool isActive;
    };

    // ethscription token information
    struct Ethscription {
        uint tokenIndex;
        bytes64 tokenIdentifier;
        bool minted;
    };


// events

    event MintEthscription(address to, uint tokenIdentifier);
    event TransferEthscription(address to, uint tokenIdentifier);



    function mintEthscription (address to, uint amount) external returns (bytes64);
    function verifyIdentifier(bytes64 identifier) external returns (boolean);
}


// modifiers

modifier TeamOnly() {
    require(team[msg.sender].isActive, "Only active team wallet is authorized");
    _;
}

modifier BotWalletOnly() {
    require(team[msg.sender].role == Role.BOT, "Address is not authorized");
    _;
}