pragma solidity ^0.4.16;

contract set_int {
    int256 public public_int;
    address owner;
    function set_int() public {
        if (owner == address(0)){
            owner = msg.sender;
        }
        public_int = 42;
    }  
    function set_int_data(int256 tmpNum) public {
        public_int = tmpNum;
    } 
}