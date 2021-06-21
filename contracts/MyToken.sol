// SPDX-License-Identifier: MIT
pragma solidity ^0.8.5;

import "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";

contract MyToken is ERC20 {
	address public adminAddress;

	 constructor(string memory _name, string memory _symbol) ERC20(_name, _symbol) {
		 _mint(msg.sender, 20 * 10 ** 18); 
		 adminAddress = msg.sender;
	 }

	 function mint(address to, uint amount) external {
		 require(msg.sender == adminAddress, 'Only admin can mint');
		 _mint(to, amount);
	 }

	 function burn(uint amount) external {
		 _burn(msg.sender, amount);
	 }
}