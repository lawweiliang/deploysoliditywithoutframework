const config = require('../config/system-config.js');
const Web3 = require('web3');

// const currentNetwork = "development";
const currentNetwork = "rinkeby";
const localDevelopmentProvider = config.networks[currentNetwork].host + ':' + config.networks[currentNetwork].port;
const liveOrTestNetProvider = (currentNetwork == "development") ? config.networks[currentNetwork].provider : config.networks[currentNetwork].provider();
const provider = (currentNetwork == "development") ? localDevelopmentProvider : liveOrTestNetProvider;

const w3 = new Web3(provider);

console.log('Successfully initialize Web3..');

module.exports = {
  w3: w3,
  web3Provider: provider
}