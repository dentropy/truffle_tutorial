pragma solidity ^0.4.8;

contract set_string {
    address public setter;
    string public public_string;
    function set_string(string tmpString) public {
        public_string = tmpString;
    }  
}