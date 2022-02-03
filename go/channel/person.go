package main

import (
    "fmt"
)

type Person struct {
    Name string
    Age int
}

func SendPerson(ch chan Person, p Person) {
    ch <- p
}

func main(){
    p := Person{"Me", 24}

    ch := make(chan Person)
    
    //send person to channel
    go SendPerson(ch, p)
    //get person from channel
    person := <-ch
    fmt.Println("Person: ", person)
    fmt.Println("Name: ", person.Name)

    go SendPerson(ch, Person{"You", 30})

    //get name from channel
    name := (<-ch).Name
    fmt.Println("Name: ", name)
}
