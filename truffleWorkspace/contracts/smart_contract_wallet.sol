pragma solidity ^0.4.16;

contract smart_contract_wallet {

    struct EthTransfers 
    {
        address from;
        uint256 amount;
    }
    mapping (uint32 => EthTransfers) public transfers_in;
    mapping (uint32 => EthTransfers) public transfers_out;
    mapping (address => uint256) public balances;
    uint32 next_transfers_in_num = 1;
    uint32 next_transfers_out_num = 1;
    address public creator;
    function smart_contract_wallet() public {
        if (creator == address(0)){
            creator = msg.sender;
        }
    }
    function update_balance() public payable{
        transfers_in[next_transfers_in_num].from = msg.sender;
        transfers_in[next_transfers_in_num].amount = msg.value;
        next_transfers_in_num += 1;
        balances[msg.sender] += msg.value;
    }
    function withdrawl(uint256 _amount, address _reciever) public {
        if(_amount <= balances[msg.sender]){
            transfers_out[next_transfers_out_num].from = msg.sender;
            transfers_out[next_transfers_out_num].amount = _amount;
            next_transfers_in_num += 1;
            balances[msg.sender] = balances[msg.sender] - _amount;
            _reciever.transfer(_amount);
        }
    }
}