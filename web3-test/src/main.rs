use std::env;

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


fn main() {
    let args: Vec<String> = env::args().collect();
    // println!("{:?}", args);
    if args.len() > 1 {
        match args[1].as_str() {
            "balance" => {
                let _result = balance();
            }

            _ => {
                println!("No Command!!");
            }
        }
    }
}
