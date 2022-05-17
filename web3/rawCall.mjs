import Web3 from 'web3';
import fs from 'fs';
import solc from 'solc';

const web3Provider = new Web3.providers.HttpProvider(process.env.provider);
const web3 = new Web3(web3Provider);
const accounts = await web3.eth.getAccounts(); 
const privateKey = "0x1778f41458b8f308eb996dd472543837da37b462a0a33649965f7d1c7aa28742"
const main = async(arg) =>{   
    const address = arg[0]
    console.log("Address: ", address)
    const abi = fs.readFileSync(`output/${address}`, 'UTF-8');
    console.log("ABI: ", abi)
    
    const NameContract = new web3.eth.Contract(JSON.parse(abi), address);
    const encoded = await NameContract.methods.setName("NewNamenaja").encodeABI()
    const nonce = await web3.eth.getTransactionCount("0xDDB026535E8cfB24a087DA56F4621e244FE0BfC5")
    const tx = {
        to: `${address}`,
        data: encoded,
        gas: 5000000000,
        nonce: `${nonce}`,
        gasLimit: 40000
    }
     
    const signed = await web3.eth.accounts.signTransaction(tx, privateKey)
    const test = await NameContract.methods.setName("NewNamenaja").estimateGas(tx)
    console.log(test)
    web3.eth.sendSignedTransaction(signed.rawTransaction).on('receipt', console.log)

    // const test = await NameContract.methods.setName("NewNamenaja").estimateGas({from: accounts[0]})
    // console.log("test: ", test)
    // const newName = await NameContract.methods.getName().call();
    


}

main(process.argv.slice(2));
