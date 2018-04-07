pragma solidity ^0.4.16;

contract set_string {
    address public owner;
    string public public_string;
    function set_string() public {
        if (owner == address(0)){
            owner = msg.sender;
        }
    }
    function set_string_data(string tmpString) public {
        if(msg.sender == owner){
            public_string = tmpString;
        }
    }  
}