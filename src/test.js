
// const config = require('config');
// require('dotenv').config();

/* const currentNetwork = config.get('currentNetwork');
console.log('currentNetwork-->', currentNetwork);

const networkDetail = config.get('network.' + currentNetwork);
console.log('networkDetail',networkDetail);
console.log(networkDetail.provider); */

// console.log('infura process id-->', process.env.INFURA_PROJECT_ID);



// const currentNetwork = config.get('currentNetwork');
// let networkDetail = config.get('network.' + currentNetwork);
// console.log('currentNetwork-->', currentNetwork);

// const config = require('./config/default.json');

// const currentNetwork = config.currentNetwork;
// let networkDetail = config.network[currentNetwork];

// if(currentNetwork != "development"){
//   networkDetail.provider += process.env.INFURA_PROJECT_ID;
// } 

// console.log('NetworkDetail-->', networkDetail);


// const config = require('./system-config.js');

const {abi, bytecode} = require("./compile.js");
const dotenv = require('dotenv').config({path:'../.env'});
const projectId = process.env.INFURA_PROJECT_ID;
const menmonicPhrase = process.env.MNEMONIC_PHRASE;

//  console.log('dotenv',dotenv);
// console.log('projectId',projectId);
// console.log('menmonicPhrase',menmonicPhrase);

const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
let provider = new HDWalletProvider({
  mnemonic: {
    phrase: menmonicPhrase
  },
  providerOrUrl: `https://rinkeby.infura.io/v3/${projectId}`
});

const w3 = new Web3(provider);

const getAccount = async () => {
 const accounts = await w3.eth.getAccounts();
 console.log(accounts);

/* const accounts = await w3.eth.getAccounts();
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
console.log("Contract address ==> ", multisignwalletContract.options.address); */

 provider.engine.stop();
} 

getAccount();


