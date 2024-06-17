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
        bytes32 tokenIdentifier;
    }


// events

    event Ethscription_MintToken(address to, uint tokenIdentifier[]);
    event Ethscription_TransferToken(address to, uint tokenIdentifier[]);
    event Ethscription_MintAborted(uint identifier);



    function mintEthscription (address to, uint amount) external;
    function mintedTokensCount () external view returns (uint);
    function unmintedTokensCount () external view returns (uint);

    function verifyIdentifier(bytes32 identifier) external returns (bool);
    function transferToken (address to, bytes32 identifier) external;
    function generateTokenIdentifier (uint amount) external returns (bytes32);
    function revertMint(bytes32 tokenIdentifier) external;

}