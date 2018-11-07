const etherlime = require('etherlime')
const LimeFactory = require('../build/LimeFactory.json')
const set_int = require('../build/set_int.json')
const set_string = require('../build/set_string.json')
const dynamic_set_string = require('../build/dynamic_set_string.json')
const permission_set_int = require('../build/permission_set_int.json')
const smart_contract_wallet = require("../build/smart_contract_wallet.json")
const FixedSupplyToken = require("../build/FixedSupplyToken.json")
const mintable_token = require("../build/mintable_token.json")

const deploy = async (network, secret) => {

	const deployer = new etherlime.EtherlimeGanacheDeployer()
	await deployer.deploy(LimeFactory)
	await deployer.deploy(set_int)
	await deployer.deploy(set_string, 'plcaeholderObject', 'set_string Hello World')
	await deployer.deploy(dynamic_set_string, 'plcaeholderObject', 'dynamic_set_string Hello World')
	await deployer.deploy(permission_set_int)
	await deployer.deploy(smart_contract_wallet)
	await deployer.deploy(FixedSupplyToken)
	await deployer.deploy(mintable_token)

};

module.exports = {
	deploy
};