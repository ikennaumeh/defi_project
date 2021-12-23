const DappToken = artifacts.require('DappToken')
const DaiToken = artifacts.require('DaiToken')
const TokenFarm = artifacts.require('TokenFarm')

module.exports = async function(deployer, network, accounts) {
  //Deploy Mock Dai Token
  await deployer.deploy(DaiToken)
  const daiToken = await DaiToken.deployed()

  //Deploy Dapp Token
  await deployer.deploy(DappToken)
  const dappToken = await DappToken.deployed()

  //Deploy Token Farm
  await deployer.deploy(TokenFarm, dappToken.address, daiToken.address)
  const tokenFarm = await TokenFarm.deployed()

  //Transfer all tokes to TokenFarm (1 million)
  await dappToken.transfer(tokenFarm.address, '10000000000000000000000')

  //Tranfer 100 Mock DAI token
  //changed account from "accounts[1] to "0x5F84BA90F2205E1Ff76D3661d667Bd3bb85cEfe2""
  await daiToken.transfer(accounts[0], '100000000000000000000')
}
