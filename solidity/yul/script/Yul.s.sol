// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Script.sol";

contract YulScript is Script {
    function setUp() public {}

    function run() view public {
        uint256[] memory data = new uint256[](10);
        data[0] = 1;
        data[1] = 2;
        data[2] = 3;
        data[3] = 4;
        data[4] = 5;
        data[5] = 6;
        data[6] = 7;
        data[7] = 8;
        data[8] = 9;
        data[9] = 10;
        uint256 resultSolidity = sumSolidity(data);
        uint256 resultAsm = sumAsm(data);
        uint256 resultPureAsm = sumPureAsm(data);
        console.log("solidity-sum: ", resultSolidity);
        console.log("assembly-sum: ", resultAsm);
        console.log("assembly-sum: ", resultPureAsm);
        // vm.broadcast();
    }

    function sumSolidity(uint256[] memory _data)
        public
        pure
        returns (uint256 sum)
    {
        for (uint256 i = 0; i < _data.length; i++) {
            sum += _data[i];
        }
    }

    /// @notice _data is a memory address for the array data
    /// the first 32 bytes of an array is indicate the size of the array it self
    /// we need to skip this 32 bytes which is 0x20 in hex.
    /// we end up adding 0x20 to the original _data to change the
    /// pointer to point to actual data
    function sumAsm(uint256[] memory _data) public pure returns (uint256 sum) {
        for (uint256 i = 0; i < _data.length; i++) {
            assembly {
                let currentpos := mul(add(i, 0x01), 0x20)
                let currentnum := mload(add(_data, currentpos))
                sum := add(sum, currentnum)
            }
        }
    }

    function sumPureAsm(uint256[] memory data)
        public
        pure
        returns (uint256 sum)
    {
        assembly {
            // first 32 bytes indicate the length of the array
            let len := mload(data)

            // skip first 32 bytes, point to the actualdata
            let dataElementLocation := add(data, 0x20)
            /*
                for { let i:=0 } lt (i, end) { i := add(i,1)}
                {
                    content
                } 
            */

            for {
                let end := add(dataElementLocation, mul(len, 0x20))
            } lt(dataElementLocation, end) {
                dataElementLocation := add(dataElementLocation, 0x20)
            } {
                sum := add(sum, mload(dataElementLocation))
            }
        }
    }
}
