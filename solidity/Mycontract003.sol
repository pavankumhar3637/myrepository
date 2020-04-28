pragma solidity ^0.6.1;

contract EtherUnits {
    uint public oneWei = 1 wei;
    // 1 wei is equal to 1
//    bool public isOneWei = 1 wei == 1;

    uint public oneEther = 1 ether;
    // 1 ether is equal to 10^18
//    bool public isOneEther = 1 ether == 1e18;
    
    function testonewei () public pure returns (bool){
        return 1 wei == 1;
    } 
    
    function testoneEther () public pure returns (bool){
        return 1 ether == 1e18 wei;
    }    
}