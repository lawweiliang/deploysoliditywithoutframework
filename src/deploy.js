require("./compile.js");
const {abi, bytecode} = require('./read-abi-bytescode.js');
const {w3, web3Provider} = require('./initialize-web3.js');
const fs = require('fs');

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
}

deploy();

