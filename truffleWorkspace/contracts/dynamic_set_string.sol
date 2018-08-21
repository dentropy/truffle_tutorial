pragma solidity ^0.4.24;

contract dynamic_set_string {
    address public setter;
    mapping (address => string) public string_data;
    constructor(string tmpString) public {
        string_data[msg.sender] = tmpString;
    }  
}