
const path = require('path');
const fs = require('fs');

//Read abi and bytecode
const abiPath = path.resolve(__dirname, '../abi','abi.json');
const abiJason = JSON.parse(fs.readFileSync(abiPath, 'utf8'));

const abi = abiJason.contracts['multisignwallet.sol'].MultiSignWallet.abi;
const byteCode = abiJason.contracts['multisignwallet.sol'].MultiSignWallet.evm.bytecode.object;
console.log('Get abi and bytecode');

module.exports = {
  abi: abi,
  bytecode: byteCode
};