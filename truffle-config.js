require('babel-register');
require('babel-polyfill');


require('dotenv').config();
const HDWalletProvider = require('@truffle/hdwallet-provider');
const { INFURA_API_KEY, MNEMONIC } = process.env;
const AccountIndex = 0;

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*"
    },
    goerli: {
      provider: function() {
        return new HDWalletProvider(MNEMONIC, INFURA_API_KEY, AccountIndex);
      },
      network_id: "*"
    }
  }
};