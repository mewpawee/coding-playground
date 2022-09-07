import {MerkleTree} from "merkletreejs"
import {keccak256} from "ethereumjs-util"
import {hashZeroString} from "./hash.mjs"

// // test on http://94.74.113.32/tx/0xcf68741410f6cd9da82d92bec5c7b6a87782400bbbf14e9281fe2415a5f51274/logs
let leaves = [
  "0x8d2fd1b3a6e6283279c01981904c50cd9149b24fa367e2460c8452fb036ea9b6",
  "0x430bc6f4504e7bcdc22068c1a3520cafe7f3c5da77229b09488934f893461d2e",
  "0x7065102006a60b3206b31871ab9075cdde61d123c35bdeb4a1369bcc29632cf8",
  "0xb35484e31c70db6e1facef7b0a66116e3cb1d9318f2db12429934e744467c0f0",
  "0xcbc07a70b216585871b130d8b5b4e9ebac8efdb09c55b26ddf3b823ef5576b95",
  "0x2c315b58e2c9aea20251cc7813ba7f6d3172dbf384923c38879742c38a83715a",
   hashZeroString(1),
]

// Create tree
const merkleTree = new MerkleTree(leaves, keccak256, {sortPairs: false})

// Pretty-print tree
console.log(merkleTree.toString())
