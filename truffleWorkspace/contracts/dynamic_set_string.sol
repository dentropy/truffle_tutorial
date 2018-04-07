pragma solidity ^0.4.16;

contract dynamic_set_string {
    address public setter;
    mapping (address => string) public string_data;
    function dynamic_set_string(string tmpString) public {
        string_data[msg.sender] = tmpString;
    }  
}