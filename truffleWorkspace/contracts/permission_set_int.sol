pragma solidity ^0.4.16;

contract permission_set_int {
    int256 public public_int;
    address public owner;
    function permission_set_int() public {
        if(owner == address(0)){
            owner = msg.sender;
        }
    }
    function set_int_data(int256 tmpInt) public {
        if(msg.sender == owner){
            public_int = tmpInt;
        }
    }
    function change_owner(address _new_owner) public {
        if(msg.sender == owner){
            owner = _new_owner;
        }
    }    
}