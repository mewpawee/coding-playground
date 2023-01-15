use clap::Parser;

#[derive(Parser, Debug)]
#[command(author, version, about, long_about = None)]
struct Args {
    /// This is a test
    #[arg(short, long)]
    name: String,
    
    /// Right
    #[arg(short, long, default_value_t= 1)]
    count: u8,
}

fn main() {
    let args = Args::parse();

    for _ in 0..args.count {
        println!("Hello, {}!", args.name);
    }
}
