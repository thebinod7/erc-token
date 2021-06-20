const MyToken = artifacts.require('MyToken');
require('chai').should();

contract('MyToken', accounts => {
	const _name = 'Binod';
	const _symbol = 'BND';

	console.log('ACCOUNTS==>', accounts);

	beforeEach(async function () {
		this.tokenInstance = await MyToken.new(_name, _symbol);
	});

	describe('token attributes', function () {
		it('has the correct name', async function () {
			const tokenName = await this.tokenInstance.name();
			tokenName.should.equal(_name);
		});

		it('has the correct symbol', async function () {
			const symbol = await this.tokenInstance.symbol();
			symbol.should.equal(_symbol);
		});

		// it('has the correct decimal', async function () {
		// 	const decimals = this.tokenInstance.decimals();
		// 	decimals.should.be.bignumber.equal(_decimals);
		// });
	});
});
