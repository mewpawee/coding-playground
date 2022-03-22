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
    const receipt = await web3.eth.getTransaction("0xdd74c6b1125f3c8ad1ea64516db277bc644ab47f4625f3465c5dcd0db2654aff");
    console.log(receipt);
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
