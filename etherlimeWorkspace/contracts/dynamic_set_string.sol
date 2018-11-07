pragma solidity ^0.4.24;

contract dynamic_set_string {

    mapping (address => string) public string_data;

    constructor(string tmpString) public {
        string_data[msg.sender] = tmpString;
    }

    function set_string_data(string _data) public {
        string_data[msg.sender] = _data;
    }
}