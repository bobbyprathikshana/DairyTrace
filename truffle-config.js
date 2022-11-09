require('babel-register');
require('babel-polyfill');


require('dotenv').config();
const HDWalletProvider = require('@truffle/hdwallet-provider');
const { INFURA_API_KEY, MNEMONIC } = process.env;
const AccountIndex = 0;

module.exports = {
  networks: {
     goerli: {
      provider: function() {
        return new HDWalletProvider(MNEMONIC, INFURA_API_KEY, AccountIndex);
      },
      network_id: "*"
    },
  },
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',
  compilers: {
    solc: {
      optimizer: {
        enabled: true,
        runs: 200
}
	}
  }
}
