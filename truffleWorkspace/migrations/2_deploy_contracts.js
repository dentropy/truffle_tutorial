var ConvertLib = artifacts.require("./ConvertLib.sol");
var MetaCoin = artifacts.require("./MetaCoin.sol");
var set_string = artifacts.require("./set_string.sol");
var set_int = artifacts.require("./set_int.sol");
var permissions_set_string = artifacts.require("./permissions_set_string.sol");
var permissions_set_int = artifacts.require("./permissions_set_int.sol");
var dynamic_set_string = artifacts.require("./dynamic_set_string.sol");
var dynamic_set_int = artifacts.require("./dynamic_set_int.sol");
var Medynamic_set_inttsmart_contract_walletaCoin = artifacts.require("./smart_contract_wallet.sol");

module.exports = function (deployer) {
  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, MetaCoin);
  deployer.deploy(set_string);
  deployer.deploy(set_int);
  deployer.deploy(permissions_set_string);
  deployer.deploy(permissions_set_int);
  deployer.deploy(MetaCodynamic_set_stringin);
  deployer.deploy(dynamic_set_int);
  deployer.deploy(smart_contract_wallet);
  
};
