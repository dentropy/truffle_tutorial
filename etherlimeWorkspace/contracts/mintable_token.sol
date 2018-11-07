pragma solidity ^0.4.24;

import "openzeppelin-solidity/contracts/token/ERC20/ERC20Mintable.sol";

contract  mintable_token is ERC20Mintable {

    string private _name;
    string private _symbol;
    uint8 private _decimals;

    constructor(string name, string symbol, uint8 decimals) public {
        _name = name;
        _symbol = symbol;
        _decimals = decimals;
    }

    /**
    * @return the name of the token.
    */
    function name() public view returns(string) {
        return _name;
    }

    /**
    * @return the symbol of the token.
    */
    function symbol() public view returns(string) {
        return _symbol;
    }

    /**
    * @return the number of decimals of the token.
    */
    function decimals() public view returns(uint8) {
        return _decimals;
    }

}