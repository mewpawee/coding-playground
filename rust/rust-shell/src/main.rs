use std::io::stdin;
use std::io::stdout;
use std::process::Command;

fn main() {
    loop{
        // user the `>` character as the prompt
        // need to explicitly flush this to ensure it prints before readline
        print!("> ");
        stdout().flush();

        let mut input = String::new();
        stdin().read_line(&mut input).unwrap();

        let command = input.trim();

        let mut child = Command::new(command)
            .spawn()
            .unwrap();

        // don't accept another command until this one completes
        child.wait();
    }
}
