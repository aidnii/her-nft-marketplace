require("@nomiclabs/hardhat-waffle");
//const fs = require("fs");
//const privateKey = fs.readFileSync(".env").toString();
const dotenv = require("dotenv");

dotenv.config();

//console.log(process.env.privateKey);

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/${process.env.projectId}`,
      accounts: [process.env.privateKey]
    },
    mainnet: {
      url: `https://polygon-mainnet.infura.io/v3/${process.env.projectId}`,
      accounts: [process.env.privateKey]
    }
  },
  solidity: "0.8.9",
};
