import { ethers } from "ethers";
import MessageRelayer from './abi/MessageRelayer.json';

const privateKey = '3c71ebcac33cd386b463eb99f0ad476f7b924704935eec4bcec554be9f1e2db1';
const provider = new ethers.providers.WebSocketProvider("wss://rinkeby.infura.io/ws/v3/dc7f182d825849e0ac0e341b408101a5");
// const provider = ethers.getDefaultProvider('rinkeby');
const abi = MessageRelayer.abi;
const contractAddress = "0x9F9d76D0bD69DE3B3A5A4415e83758388D4a421C";
let wallet = new ethers.Wallet(privateKey, provider);
const MessageRelayerA = await new ethers.Contract(contractAddress, abi, wallet);

MessageRelayerA.on("Sent", (message, tx)=> {
	console.log("Chain A Message Sent")
	console.log("Message", message);
	console.log("tx", tx);
})

let tx = await MessageRelayerA.sendMessage(456);
console.log(tx)

