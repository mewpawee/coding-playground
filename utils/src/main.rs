use std::env;
extern crate hex;

#[tokio::main]
async fn balance() -> web3::Result<()> {
    let transport = web3::transports::Http::new("http://localhost:8545")?;
    let web3 = web3::Web3::new(transport);

    println!("Calling accounts.");
    let accounts = web3.eth().accounts().await?;
    println!("Accounts: {:?}", accounts);
    // accounts.push("f39fd6e51aad88f6f4ce6ab8827279cfffb92266".parse().unwrap());

    println!("Calling Balances.");
    for account in accounts {
        let balance = web3.eth().balance(account, None).await?;
        println!("Balance of {:?}: {}", account, balance);
    }

    Ok(())
}

fn method_selector(value: &str){
    let hashed = web3::signing::keccak256(value.as_bytes());
    let first_four_byte = &hashed[0..4];
    let encoded = hex::encode(first_four_byte);
    println!("Method Selector: 0x{}", encoded);
}

fn main() {
    let args: Vec<String> = env::args().collect();
    // println!("{:?}", args);
    if args.len() > 1 {
        match args[1].as_str() {
            "balance" => {
                let _result = balance();
            }
            "method_selector" => {
                method_selector(&args[2]);
            }

            _ => {
                println!("No Command!!");
            }
        }
    }
}
