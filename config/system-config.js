
const HDWalletProvider = require('@truffle/hdwallet-provider');
require('dotenv').config({path:'../.env'})

const projectId = process.env.INFURA_PROJECT_ID;
const menmonicPhrase = process.env.MNEMONIC_PHRASE;

module.exports = {
  networks:{
    development:{
      host: 'http://127.0.0.1',
      port: 7545,
      network_id : '*'
    },
    rinkeby: {
      provider: () => 
      new HDWalletProvider({
        mnemonic:{
          phrase: menmonicPhrase
        },
        providerOrUrl: `https://rinkeby.infura.io/v3/${projectId}`
      }),
    },
    network_id: '4' 
  }
}