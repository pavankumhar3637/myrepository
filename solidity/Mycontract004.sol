pragma solidity ^0.6.1;

/*
GAS LIMIT - max gas you are willing to use.
GAS PRICE - How much ether you are willing to pay for 1 gas.
 - (Gas Limit * Gas Price) - paid in Ethers
*/
contract Mycontract004 {
    
  string public greet = "Hello world";
  function testgasprice() public returns (uint){
      return tx.gasprice;//tx.gasprice returns gas price utilized
      }
}