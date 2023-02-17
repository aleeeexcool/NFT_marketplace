const CryptoBears = artifacts.require("CryptoBears");

module.exports = async function(deployer) {
  await deployer.deploy(CryptoBears);
};
