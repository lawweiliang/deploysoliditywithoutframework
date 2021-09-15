require("./compile.js");
const {abi, bytecode} = require('./read-abi-bytescode.js');
const {w3, web3Provider} = require('./initialize-web3.js');

// const path = require('path');
const fs = require('fs');
// require('dotenv').config();

/* const config = require('./system-config.js');
const currentNetwork = "rinkeby";
const localDevelopmentProvider = config.networks[currentNetwork].host + ':' + config.networks[currentNetwork].port;
const liveOrTestNetProvider = config.networks[currentNetwork].provider();
const provider = (currentNetwork == "development") ? localDevelopmentProvider : liveOrTestNetProvider;

const w3 = new Web3(provider); */

async function deploy() {
  const accounts = await w3.eth.getAccounts();
  const defaultMultiSignContructorArgument = [[accounts[0], accounts[1]], 2];

  const multisignwalletContract = await new w3.eth.Contract(abi)
  .deploy({
    data: bytecode,
    arguments:defaultMultiSignContructorArgument
  })
  .send({
    from: accounts[0],
    gas: 3000000
  });

  console.log("Contract address ==> ", multisignwalletContract.options.address);
  fs.writeFileSync('../abi/smartcontractAddress.txt', multisignwalletContract.options.address);
  console.log('Contract Successfully deployed, yeah...');

  if(web3Provider.engine){
    web3Provider.engine.stop();
  }

  /* const deployedAddress = multisignwalletContract.options.address;

  //Call the deployed contract
  const multisignwalletDeployedContract = await new w3.eth.Contract(abi, deployedAddress);

  const contractBalanceBefore = await multisignwalletDeployedContract.methods.getBalance().call();
  console.log('contractBalanceBefore', contractBalanceBefore);

  const receipt = await multisignwalletDeployedContract.methods.invest()
  .send({
    from:accounts[0],
    gas: 300000,
    value: w3.utils.toWei('0.5', 'ether')
  });
  console.log('Successfully Invest');
  console.log('Investment transaction hash -->', receipt.transactionHash);

  const contractBalanceAfter = await multisignwalletDeployedContract.methods.getBalance().call();
  console.log('contractBalanceAfter', contractBalanceAfter); */

}

deploy();


//Todo: Continue to test it on infura rinkeby
