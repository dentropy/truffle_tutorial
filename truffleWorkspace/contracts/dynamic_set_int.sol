pragma solidity ^0.4.24;

contract dynamic_set_int {
    int256 public public_int;
    address public sudo_owner;
    mapping (address => int256) public int_data;
    mapping (address => bool) public permissions;
    constructor() public {
        if(sudo_owner == address(0)){
            sudo_owner = msg.sender;
            permissions[msg.sender] = true;
        }
    }

    function add_address(address _address) {

    }

    function set_int_data(int256 _data) public {
        if(permissions[msg.sender] == true){
            int_data[msg.sender] = _data;
        }
    }  
}