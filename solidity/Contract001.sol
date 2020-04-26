//the solc compiler revision for the code compatability
pragma solidity ^0.6.1;

//Added smart contract using keyword "contract" <<contract name>>
contract Contract001{
/*Added a function with access identifier "public" and "pure" as it doesn't need 
  to ping Blockchain network for pulling data/information*/
    function printHelloWorld() public pure returns(string memory) {  
        return 'helloWorld';  
    }  
} 