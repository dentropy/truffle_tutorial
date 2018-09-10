var SmartContract = { name: "", abi: "", address: "", call: "" }
var SmartContracts = {};

var help = " --##--> Use the View Page Source to see the command options for interacting with the smart contract ";
var Help = help;

function GetSmartContract(_location, _name) {
    $.getJSON(_location, function (result) {
        SmartContracts[_name] = {};
        SmartContracts[_name].abi = result;
        SmartContracts[_name].name = _name;
        var tmp_networks = [];
        for (var i in SmartContracts[_name].abi.networks) {
            tmp_networks.push(i);
        }
        var tmp_the_correct_network = tmp_networks[tmp_networks.length - 1];
        SmartContracts[_name].address = SmartContracts[_name].abi.networks[tmp_the_correct_network].address;
        SmartContracts[_name].call = web3.eth.contract(SmartContracts[_name].abi.abi).at(SmartContracts[_name].address);
    });
}