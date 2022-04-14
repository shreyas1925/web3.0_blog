require("@nomiclabs/hardhat-waffle");
module.exports = {
  solidity: "0.8.4",
  // some network configurations
  networks: {
    hardhat: {
      chainId: 1337 //local host of metmask have this chainID
    },
    // mumbai: {
    //   url: "https://rpc-mumbai.matic.today",
    //   accounts: [process.env.pk]
    // },
    // polygon: {
    //   url: "https://polygon-rpc.com/",
    //   accounts: [process.env.pk]
    // }
  }
};
