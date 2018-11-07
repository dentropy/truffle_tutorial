pragma solidity ^0.4.24;

contract set_string {
    string public public_string;
    constructor(string tmpString) public {
        public_string = tmpString;
    } 
    function set_string_data(string tmpString) public {
        public_string = tmpString;
    }
}