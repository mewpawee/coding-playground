import {keccak256} from "ethereumjs-util"

//hash the Method Buffer and keep the first four bytes then represent it in the hex format
export const methodSelectorFromString = (string) => {
  const hashedBuffer = keccak256(Buffer.from(string));
  const fourHash = hashedBuffer.slice(0,4);
  const fourHashHex = fourHash.toString('hex');
  return fourHashHex 
}

// console.log(MethodSelectorFromString("swapExactETHForTokens(uint256,uint256,address[],address,uint256)"));
