//===
//Section one
//===

//Grab the sol file and compile it
const path = require('path');
const fs = require('fs');
const solc = require('solc');

const contractPath = path.resolve(__dirname, '','multisignwallet.sol');

const sourceCode = fs.readFileSync(contractPath, 'utf8');

var input = {
  language: 'Solidity',
  sources: {
    'multisignwallet.sol': {
      content: sourceCode
    }
  },
  settings: {
    outputSelection: {
      '*': {
        '*': ['*']
      }
    }
  }
};

const data = solc.compile(JSON.stringify(input));
fs.writeFileSync('abi.json', data);
console.log('abi.json was generated');


//Read abi and bytecode
const abiPath = path.resolve(__dirname,'', 'abi.json');
const abiJason = JSON.parse(fs.readFileSync(abiPath, 'utf8'));

const abi = abiJason.contracts['multisignwallet.sol'].MultiSignWallet.abi;
const byteCode = abiJason.contracts['multisignwallet.sol'].MultiSignWallet.evm.bytecode.object;
console.log('Get abi and bytecode');

module.exports = {
  abi: abi,
  bytecode: byteCode
};