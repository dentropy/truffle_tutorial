const etherlime = require('etherlime')
const ethers = require('ethers')
const setInt = require('../build/set_int.json')

describe('Example', () => {
    let accountFour = accounts[3];
    let deployer;

    beforeEach(async () => {
        deployer = new etherlime.EtherlimeGanacheDeployer(accountFour.secretKey);
    });

    it('should have valid private key', async () => {
        assert.strictEqual(deployer.wallet.privateKey, accountFour.secretKey);
    });

    it('should check if the public_int variable can be updated', async() => {
        const deployedContractWrapper = await deployer.deploy(setInt, 'setInt')
        const contract = deployedContractWrapper.contract
        var setVal = 571275
        await contract.set_int_data(setVal)
        let public_int = await contract.public_int()
        public_int = parseInt(public_int.toString())
        assert.strictEqual(parseInt(public_int.toString()), setVal, 'Name does not match')
    })
});