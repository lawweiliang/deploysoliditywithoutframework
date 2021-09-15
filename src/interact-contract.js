

const path = require('path');
const fs = require('fs');
const {w3, web3Provider} = require('./initialize-web3.js');
const {abi} = require('./read-abi-bytescode.js');

const investEthToContract = async () => {

  const accounts = await w3.eth.getAccounts();

  //Read smart contract
  const smartContractAddressPath = path.resolve(__dirname,'../abi', 'smartcontractAddress.txt');
  const deployedAddress = fs.readFileSync(smartContractAddressPath, 'utf8');

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
  console.log('contractBalanceAfter', contractBalanceAfter);

  if(web3Provider.engine){
    web3Provider.engine.stop();
  }
}

investEthToContract();
