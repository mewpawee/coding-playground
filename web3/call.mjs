import Web3 from 'web3';
import fs from 'fs';
import solc from 'solc';

const web3Provider = new Web3.providers.HttpProvider(process.env.provider);
const web3 = new Web3(web3Provider);
const accounts = await web3.eth.getAccounts(); 
const main = async(arg) =>{   
    const address = arg[0]
    console.log("Address: ", address)
    const abi = fs.readFileSync(`output/${address}`, 'UTF-8');
    console.log("ABI: ", abi)
    
    const NameContract = new web3.eth.Contract(JSON.parse(abi), address);
    const currentName = await NameContract.methods.getName().call();
    let txHash
    // await NameContract.methods.setName("NewNamenaja").send({from: accounts[0]}, (error, transactionHash) => { txHash = transactionHash });
    const test = await NameContract.methods.setName("NewNamenaja").estimateGas({from: accounts[0]})
    console.log("test: ", test)
    const newName = await NameContract.methods.getName().call();
    
    //show result
    console.log("============================")
    console.log("txHash: ", txHash)
    console.log("currentName: ", currentName)
    console.log("newName: ", newName)

}

main(process.argv.slice(2));
