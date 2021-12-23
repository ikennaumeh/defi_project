require('babel-register');
require('babel-polyfill');

// module.exports = {
//   networks: {
//     development: {
//       host: "127.0.0.1",
//       port: 7545,
//       network_id: "*" // Match any network id
//     },
//   },
//   contracts_directory: './src/contracts/',
//   contracts_build_directory: './src/abis/',
//   compilers: {
//     solc: {
//       optimizer: {
//         enabled: true,
//         runs: 200
//       },
//       evmVersion: "petersburg"
//     }
//   }
// }
var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "oak elite position lounge toddler extra spirit obscure reveal fashion fat tree";
module.exports = {
 networks: {
  development: {
   host: "127.0.0.1",
   port: 8545,
   network_id: "*"
  },
  rinkeby: {
     networkCheckTimeout: 10000,
      provider: function() { 
       return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/71ad3fc89e6b4c9c849c57062c739a8c");
      },
      network_id: 4,
      from: "0x5F84BA90F2205E1Ff76D3661d667Bd3bb85cEfe2",
      gas: 9000000,
      gasPrice: 10000000000,
  }
 },
 contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',
  compilers: {
    solc: {
      optimizer: {
        enabled: true,
        runs: 200
      },
      evmVersion: "petersburg"
    }
  }
};
