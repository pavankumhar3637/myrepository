
pragma solidity ^0.6.1;

contract Contract004{
  uint value;

    /*
    Built-in variables
    ------------------
    
     */

    function getValue() external view returns(uint) {  
        return value;  
    }  

    function setValue(uint _value) external {  
        value = _value;  
    }      
} 