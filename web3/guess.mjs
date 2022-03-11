import Web3 from 'web3'; 
const rpc = process.env.rpc
const blockTime = process.env.blockTime
const web3Provider = new Web3.providers.HttpProvider(rpc);
const web3 = new Web3(web3Provider);

const main = async(arg) => {
    console.log('RPC: ', rpc + '\n')
    const currentBlock = await web3.eth.getBlockNumber();

    switch(arg[0]){
     case "timestamp":
        const targetTimestamp = arg[1] ||1648740600000
        guessDate(targetTimestamp, currentBlock, blockTime);
        break;
     case "block":
        const targetBlock = arg[1] || 4332712
        guessBlock(targetBlock, currentBlock, blockTime);
        break;
     default:
        console.log("Incorrect Command")
    }
}

const getBlock = (number) => {
    return web3.eth.getBlock(number)
}

const guessDate = (targetTimestamp, currentBlock, blockTime) => {
    const tt = parseInt(targetTimestamp);
    const ct = Date.now();
    const currentDate = new Date(ct).toLocaleString();
    const targetDate = new Date(tt).toLocaleString();
    const secDiff = (tt - ct)/1000 
    const blockDiff = Math.floor(secDiff/blockTime)
    const targetBlock = currentBlock + blockDiff
    console.log("Current Date: ", currentDate);
    console.log("Target Date: ", targetDate);
    console.log("=================================");
    console.log("Current Block: ", currentBlock);
    console.log("Target Block: ", targetBlock);
}

const guessBlock = (targetBlock, currentBlock, blockTime) => {
    const blockDiff = targetBlock - currentBlock
    const millisecDiff = blockDiff * blockTime * 1000
    const ct = Date.now();
    const tt = ct + millisecDiff
    const currentDate = new Date(ct).toLocaleString();
    const targetDate = new Date(tt).toLocaleString();
    console.log("Current Block: ", currentBlock);
    console.log("Target Block: ", targetBlock);
    console.log("=================================");
    console.log("Current Date: ", currentDate)
    console.log("Target Date: ", targetDate);
}


main(process.argv.slice(2));

