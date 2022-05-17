import Web3 from 'web3';
import fs from 'fs';
import solc from 'solc';

const web3Provider = new Web3.providers.HttpProvider(process.env.provider);
const web3 = new Web3(web3Provider);

const source = fs.readFileSync('contracts/C.sol', 'UTF-8');

const input = {
    language: 'Solidity',
    sources: {
        'C.sol': {
            content: source 
        }
    },
    settings: {
        outputSelection: {
            '*': {
                '*': ['*']
            }
        }
    }
};


const main = async() =>{   
    const output = JSON.parse(solc.compile(JSON.stringify(input)));
    console.log(output)
    const bytecode = output.contracts['C.sol']['C'].evm.bytecode.object;
    const abi = output.contracts['C.sol']['C'].abi;
    const contract = new web3.eth.Contract(abi);
    console.log(contract)
    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];
    let txHash;
    const receipt = await contract.deploy({data: bytecode}).send({from: account}, (error,transactionHash) => { txHash = transactionHash })
    console.log("=====================================")
    console.log("=====================================")
    console.log("TxHash: ", txHash);
    console.log("Address: ", receipt._address);
    console.log("ABI: ", abi)
    fs.writeFileSync(`output/${receipt._address}`, JSON.stringify(abi));
    //const NameContract = new web3.eth.Contract(abi, receipt._address);
    //const currentName = await NameContract.methods.getName().call();
    //console.log("currentName: " + currentName)
    //const sending = await NameContract.methods.setName("bitsofcode").send({from: account});
    //const currentName = await NameContract.methods.getName().call();
    //await NameContract.methods.setName("bitsofcode").send();
    //const newName = await NameContract.methods.getName().call();
    //console.log("currentName: " + currentName)
    //console.log("newName: " + newName)

}

main();
