pragma solidity ^0.4.24;

contract permission_set_int {
    int256 public public_int;
    address public owner;
    constructor () public {
        if(owner == address(0)){
            owner = msg.sender;
        }
        public_int = 420;
    }
    function set_int_data(int256 tmpInt) public view returns(bool) {
        if(msg.sender == owner){
            public_int = tmpInt;
            return true;
        }
        return false;
    }
    function change_owner(address _new_owner) public returns(bool) {
        if(msg.sender == owner){
            owner = _new_owner;
            return true;
        }
        return false;
    }    
}