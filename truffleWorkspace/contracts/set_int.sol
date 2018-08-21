pragma solidity ^0.4.24;

contract set_int {
    int256 public public_int;
    address owner;

    constructor() public {
        owner = msg.sender;
        public_int = 42;
    }

    function set_int_data(int256 tmpNum) public {
        public_int = tmpNum;
    }
}