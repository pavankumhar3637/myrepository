//the solc compiler revision for the code compatability
pragma solidity ^0.6.1;

//Added smart contract using keyword "contract" <<contract name>>
contract Contract002{
/*Added a function with access identifier "public" and "pure" as it doesn't need 
  to ping Blockchain network for pulling data/information*/
  /* Fixed-Size types
     -------------------
  bool isReady;
  uint a;
  address receipt;
  bytes32 data;

  Variable-Size types
  ------------------------ 
  string name;
  bytes _data;
  uint[] amount; 
  mapping (uint => string) users;//Mappping Key -- uint/address where as value - any type

  user-defined data
  ------------------
  struct User{
    uint id;
    string name;
    uint[] friends[];
  }   
  enum Color{
    RED,
    GREEN,
    YELLOW
  } //ex: Color.RED, Color.GREEN
  */
    function printHelloWorld() public pure returns(string memory) {  
        return 'helloWorld';  
    }  
}     