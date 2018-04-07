pragma solidity ^0.4.16;

contract dynamic_set_int {
    int256 public public_int;
    address inital_owner;
    mapping (address => int256) public int_data;
    mapping (address => bool) public permissions;
    function dynamic_set_int() public {
        if(inital_owner == address(0)){
            inital_owner = msg.sender;
            permissions[msg.sender] = true;
        }
    }
    function set_int_data(int256 _data) public {
        if(permissions[msg.sender] == true){
            int_data[msg.sender] = _data;
        }
    }  
}