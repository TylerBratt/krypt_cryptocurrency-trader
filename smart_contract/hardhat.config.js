require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: `https://eth-ropsten.alchemyapi.io/v2/wZUa2G48dEnvAzNOq9zEinpPBctTUXQb`,
      accounts: [ '6832c05242cb862149a00aca364e7891ee981dea80a78f2078e2288ae00d7ab7' ]
    }
  }
}