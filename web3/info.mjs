import Web3 from 'web3'; 
const web3Provider = new Web3.providers.HttpProvider(process.env.rpc);
const web3 = new Web3(web3Provider);

const main = async() => {
    const blockNumber = await web3.eth.getBlockNumber();
    //const protocolVersion = await web3.eth.getProtocolVersion();
    const gasPrice = await web3.eth.getGasPrice();
    const accounts = await web3.eth.getAccounts();
    console.log("BlockNumber: ", blockNumber);
    //console.log("ProtocolVersion: ", protocolVersion);
    console.log("gasPrice: ", gasPrice);
    console.log("Account: ", accounts);
}

const getBlock = (number) => {
    return web3.eth.getBlock(number)
}

main();

console.log(process.env.provider)
