const BridgeEth = artifacts.require('./BridgeEth.sol');
const BridgeBsc = artifacts.require('./BridgeBsc.sol');

module.exports = async done => {
  const [recipient, _] = await web3.eth.getAccounts();
  const bridgeEth = await BridgeEth.deployed();
  await bridgeEth.burn(recipient, 0);
  const bridgeBsc = await BridgeBsc.deployed();
  await bridgeBsc.mint(recipient, 1000);
  done();
}
