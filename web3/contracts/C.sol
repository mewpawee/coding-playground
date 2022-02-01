// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

contract C {
    uint x;
    string private name = "testName";
    function foo() public 
    {
      x += 1;
    }
    function getName() public view returns (string memory)
    {
        return name;
    }
    function setName(string memory newName) public
    {
        name = newName;
    }
}
