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
    function can_set_int_data() public view returns(bool) {
        //views can not change the state
        if(msg.sender == owner){
            return true;
        }
        return false;
    }
    function set_int_data(int256 tmpInt) public returns(bool) {
        if(msg.sender == owner){
            public_int = tmpInt;
            return true;
        }
        return false;
    }
    function change_owner(address _new_owner) public {
        if(msg.sender == owner){
            owner = _new_owner;
        }
    }    
}