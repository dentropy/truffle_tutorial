pragma solidity ^0.4.16;

contract permission_set_string {
    address public owner;
    string public public_string;
    function permission_set_string() public {
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