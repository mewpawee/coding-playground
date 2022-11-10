use std:: env;

fn hello_world(){
    println!("Hello, World");
}

fn hello_10_v1(){
    for _ in 0..10 {println!("Hello")}
}

fn hello_10_v2(){
    print!("{}", "Hello\n".repeat(10));
}

fn procedure(name : &str){
    println!("My job here is done. Goodbye {}", name);
}

fn create_function(x : u32) -> u32 {x*x}

fn create_2d(_x: u32, _y: u32){
    struct Point {
        x: u32,
        y: u32
    }
    let point = Point{x: _x, y: _y};
    println!("My X, {}\nMy Y, {}", point.x, point.y);
} 
fn main() {
    let args: Vec<String> = env::args().collect();
    match args[1].as_str(){
        "1" => hello_world(),
        "2.1" => hello_10_v1(),
        "2.2" => hello_10_v2(),
        "3" => procedure(args[1].as_str()),
        "4" => {
            let result: u32 = create_function(4);
            println!("{}",result);
        },
        "5" => create_2d(1,2),
        _ => println!("No implementation"),
    };
}

