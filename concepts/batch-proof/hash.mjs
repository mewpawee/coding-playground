import {MerkleTree} from "merkletreejs"
import {keccak256} from "ethereumjs-util"

const hashBuffer = (b1, b2) => {
  const concatedBuffer = Buffer.concat([b1, b2])
  return keccak256(concatedBuffer)
}

const hashZero = (dept) => {
  if(dept == 0){
    return keccak256(Buffer.from(new Array(32).fill(0)))
  }else{
    const previousHash = hashZero(dept - 1)
    return hashBuffer(previousHash, previousHash)          
  }
}

export const hashZeroString = (dept) => {
  return '0x' + hashZero(dept).toString('hex')
}
