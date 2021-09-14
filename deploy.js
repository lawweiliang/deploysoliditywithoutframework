
const {abi, bytecode} = require("./compile.js");

//====
//Section Two
//====

//Import web 3
const Web3 = require('web3');

//Two environment, one is development and the other one is rinkeby(turn this into config)
const w3 = new Web3('ws://127.0.0.1:7545');
const chainId = 5777;


const accountAddress = '0xBED94cEFC5fFab45621c63C2E5AFE07Ae14438dE';
const privateKey = '2e40de462914b0320b4754f98e4a2bfad4062e015a76d822771a7eb8ada7a763';

async function deploy() {
  const accounts = await w3.eth.getAccounts();
  const defaultMultiSignContructorArgument = [['0xBED94cEFC5fFab45621c63C2E5AFE07Ae14438dE', '0x91a2a59bD1162Cb8aaC7Fd4D686514dF90fCeB2D'], 2];

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
  const deployedAddress = multisignwalletContract.options.address;

  //Call the deployed contract
  const multisignwalletDeployedContract = await new w3.eth.Contract(abi, deployedAddress);

  const contractBalance = await multisignwalletDeployedContract.methods.getBalance().call();
  console.log('contractBalance', contractBalance);
}

deploy();





//Set the provider

//Get the json-abi

//Deploy the contract
// 1. Build the contract transaction
// 2. Sign the transaction
// 3. Send the transaction

//Send 1 ether to the contract

//Check the balance of teh contract
