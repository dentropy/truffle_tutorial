pragma solidity ^0.4.16;

contract set_string {
    address public setter;
    mapping (address => string) public string_data;
    function set_string(string tmpString) public {
        string_data[msg.sender] = tmpString;
    }  
}