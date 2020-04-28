pragma solidity ^0.6.1;
/*State Variables
-->store data on smart contract - store large data
- Storage (permanent)
- memory (While function call)
- calldata (where function arguments are stored)
Functions
- that create transactions
- that donot create transactions , this donot chnage the state of the blockchain.
View - does not write to blockchain.
Pure - also does not write to blockchain and doesnot read any state variables
*/
contract MyContract002{
  string public text;
  function set(string memory _text) public {
    text = _text;
  }
  function get() public view returns (string memory) {
    return text;
  }
} 