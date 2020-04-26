
pragma solidity ^0.6.1;

contract Contract003{
  uint value;

    /*
    function modifiers
    ------------------
    function getvalue() in blue is read only
    function setvalue() in orange is what modifies data on blockchain
    how does remix able identify which function has which capability - is by using function modifiers
    view - its states that the function is read only, it does not modify data on blockchain.
            it just returns from blockchain.(older version remix has constant keyword)
    pure - its a same as view but it does some computatuion need in smart contract instead of returning from blockcahin.(call API eth_Call)
    no function modifiers are specified - then the remix is updated that the smart contract does 
    some computation on block chain (this calls API eth_sendTransaction).
    
    function visibility keywords
    ----------------------------
    1) public - can ne called outside the smart contract and inside the smart contracts.
    2) private - most restrictive - function can be called from inside the smart contract (as a practise we use '_' ex:_getValue() before function name).
    3) internal - it is also limited to smart contract and has feasibility that a smart contract, (which inherits the smart contract containing this internal 
                function) had the access to the function.
    4) external - it can only be called outside the smart contract.

    variable visibility in smart contracts
    --------------------------------------
    private - nothing private in public block chain
    internal -  inside SC-A and SC inherits that SC-A
    public - inside and outside SC
     if a variable is declared as public , creates a function with the <name of variable> declared public.
     */

    function getValue() external view returns(uint) {  
        return value;  
    }  

    function setValue(uint _value) external {  
        value = _value;  
    }      
} 