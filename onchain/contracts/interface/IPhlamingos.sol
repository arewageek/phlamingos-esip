// SPDX-License-Identifier: MIT

pragma solidity ^0.8.24;

interface IPhlamingos {
    
    // project team

    enum Role {ADMIN, BOT}
    
    struct Team {
        address wallet;
        Role role;
        bool isActive;
    }

    // ethscription token information
    struct Ethscription {
        uint tokenIndex;
        bool minted;
        bytes32 tokenData;
    }


// events

    event Ethscription_MintToken(address to, uint tokenIdentifiees);
    event Ethscription_TransferToken(address to, uint tokenIdentifier);
    event Ethscription_MintAborted(uint identifier);



    function mintEthscription (address to, uint amount) external;
    function mintedTokensCount () external view returns (uint);
    function unmintedTokensCount () external view returns (uint);
    function verifyIdentifier(bytes32 data, bool minted) external view returns (bool);
    function transferToken (address to, uint identifier) external view;

    // function generateTokenIdentifier (uint amount) external returns (bytes32);
    // function revertMint(bytes32 tokenIdentifier) external;


    // if there's still need I may have to return to the raffle contract interface
}