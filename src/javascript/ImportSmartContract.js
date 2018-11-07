var SmartContracts = {}

function ObjectLength( object ) {
    var length = 0;
    for( var key in object ) {
        if( object.hasOwnProperty(key) ) {
            ++length;
        }
    }
    return length;
}

const GetSmartContract = async (contractName) => {
    SmartContracts[contractName] = {}
    SmartContracts[contractName].name = contractName
    var response = await fetch('http://localhost:3042/abi/' + contractName + '.json')
    var the = await response.json()
    console.log(the)
    SmartContracts[contractName].abi = the.abi
    response = await fetch('http://localhost:3042/etherlime')
    let etherlimeHistory = await response.json()
    let latestDeployment = etherlimeHistory.data[(ObjectLength(etherlimeHistory.data)-1).toString()]
    latestDeployment.actions.map( contract  => {
        if(contract.nameOrLabel === contractName){
            SmartContracts[contractName].address = contract.result
            console.log(contract)
        }
    })
    SmartContracts[contractName].call = web3.eth.contract(SmartContracts[contractName].abi).at(SmartContracts[contractName].address);
}

window.addEventListener('load', function () {
    // Checking if Web3 has been injected by the browser (Mist/MetaMask)
    if (typeof web3 !== 'undefined') {

        // Use the browser's ethereum provider
        var provider = web3.currentProvider
        StartApp()
    } else {
        console.log('No web3? You should consider trying MetaMask!')
    }

})