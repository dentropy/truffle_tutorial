var SmartContract = { name: "", abi: "", address: "", call: "" }
var SmartContracts = {};
//var GenerateInvoiceABI;
//var GenerateInvoiceAddress;
//var GenerateInvoice;
function GetSmartContract(_location, _name) {
    $.getJSON(_location, function (result) {
        //GenerateInvoiceABI = result;
        SmartContracts[_name] = {};
        SmartContracts[_name].abi = result;
        var tmp_networks = [];
        for (var i in SmartContracts[_name].abi.networks) {
            tmp_networks.push(i);
        }
        SmartContracts[_name].name = _name;
        //console.log("tmp_networks = " + tmp_networks);
        //console.log(tmp_networks[tmp_networks.length - 1]);
        var tmp_the_correct_network = tmp_networks[tmp_networks.length - 1];
        console.log(SmartContracts[_name].abi)
        SmartContracts[_name].address = SmartContracts[_name].abi.networks[tmp_the_correct_network].address;
        SmartContracts[_name].call = web3.eth.contract(SmartContracts[_name].abi.abi).at(SmartContracts[_name].address);
    });
}