const etherlime = require('etherlime')
const ethers = require('ethers')
const mintableToken = require('../build/mintable_token.json')

describe('Example', () => {
    let accountFour = accounts[3];
    let deployer;

    beforeEach(async () => {
        deployer = new etherlime.EtherlimeGanacheDeployer(accountFour.secretKey);
    });

    it('should have valid private key', async () => {
        assert.strictEqual(deployer.wallet.privateKey, accountFour.secretKey);
    });

    it('should mint a token and check the owners balance', async() => {
        const deployedContractWrapper = await deployer.deploy(mintableToken, 'mintableToken', 'PCASH', 'P', 3)
        let contract = deployedContractWrapper.contract
        let accountFourWallet = new ethers.Wallet(accounts[3].secretKey, contract.provider)
        contract = contract.connect(accountFourWallet, contract.provider)
        await contract.mint(accountFourWallet.address, ethers.utils.bigNumberify('5000000'))
        let balance = await contract.balanceOf(accountFourWallet.address)
        balance = parseInt(balance.toString())
        assert.strictEqual(balance, 5000000)
    })

    it('should mint a token then mint some more', async() => {
        const deployedContractWrapper = await deployer.deploy(mintableToken, 'mintableToken', 'PCASH', 'P', 3)
        let contract = deployedContractWrapper.contract
        let accountFourWallet = new ethers.Wallet(accounts[3].secretKey, contract.provider)
        contract = contract.connect(accountFourWallet, contract.provider)
        await contract.mint(accountFourWallet.address, ethers.utils.bigNumberify('5000000'))
        await contract.mint(accountFourWallet.address, ethers.utils.bigNumberify('5'))
        let balance = await contract.balanceOf(accountFourWallet.address)
        balance = parseInt(balance.toString())
        assert.strictEqual(balance, 5000005)
    })
});