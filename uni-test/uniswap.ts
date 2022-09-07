// import { ethers } from "ethers";
// import MessageRelayer from './abi/MessageRelayer.json';

// const privateKey = '3c71ebcac33cd386b463eb99f0ad476f7b924704935eec4bcec554be9f1e2db1';
// const provider = new ethers.providers.WebSocketProvider("wss://rinkeby.infura.io/ws/v3/dc7f182d825849e0ac0e341b408101a5");
// // const provider = ethers.getDefaultProvider('rinkeby');
// const abi = MessageRelayer.abi;
// const contractAddress = "0x9F9d76D0bD69DE3B3A5A4415e83758388D4a421C";
// let wallet = new ethers.Wallet(privateKey, provider);
// const MessageRelayerA = await new ethers.Contract(contractAddress, abi, wallet);

// MessageRelayerA.on("Sent", (message, tx)=> {
// 	console.log("Chain A Message Sent")
// 	console.log("Message", message);
// 	console.log("tx", tx);
// })

// let tx = await MessageRelayerA.sendMessage(456);
// console.log(tx)


import { ethers } from "ethers";
// import abi from './abi/UniswapV2Router02.json';

// const privateKey = '3c71ebcac33cd386b463eb99f0ad476f7b924704935eec4bcec554be9f1e2db1';
// const provider = new ethers.providers.WebSocketProvider("wss://rinkeby.infura.io/ws/v3/dc7f182d825849e0ac0e341b408101a5");
const url = "https://eth-mainnet.g.alchemy.com/v2/87qhmlkVm_SpoylO27zKSCqZyoYx2F4Q";
const provider = new ethers.providers.JsonRpcProvider(url);
const block = await provider.getBlockNumber();
console.log(block)
// const provider = ethers.getDefaultProvider('rinkeby');

// const contractAddress = "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D";
// let signer = new ethers.Wallet(privateKey, provider);
// const UniswapV2Router02 = await new ethers.Contract(contractAddress, abi, signer);


// // let tx = await UniswapV2Router02.WETH();
// let amounts = await UniswapV2Router02.WETH();
// console.log(amounts)
