import Web3 from 'web3';

const web3Provider = new Web3.providers.HttpProvider(process.env.provider);
const web3 = new Web3(web3Provider);
let count = 1

const main = async(arg) =>{   
    while (count <= parseInt(arg)){
    try{
    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];
    console.log("Count:", count);
    const transaction = web3.eth.sendTransaction({from:account,to:account,value:1});
    }catch(error){
        console.log(error);
    }
    count += 1;
    }
}

main(process.argv.slice(2));
