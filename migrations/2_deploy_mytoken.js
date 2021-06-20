const MyToken = artifacts.require('./MyToken.sol');

module.exports = function (deployer) {
	const _name = 'Binod';
	const _symbol = 'BND';
	deployer.deploy(MyToken, _name, _symbol);
};
