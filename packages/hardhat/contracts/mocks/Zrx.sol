// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Zrx is ERC20 {
  constructor() ERC20("0x  Token", "ZRX") {}

  function faucet(address to, uint amount) public {
    _mint(to, amount);
  }
}
