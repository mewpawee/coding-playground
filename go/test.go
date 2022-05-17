package main

import (
    "fmt"
    // "time"
    "math/big"
)

func main() {
    base := big.NewInt(123)
    num := new(big.Int).Mul(base, big.NewInt(2))
    total := new(big.Int).Add(base,num)
    fmt.Println(total)
    // tick := time.Tick(100 * time.Millisecond)
    // boom := time.After(500 * time.Millisecond)
    // for {
    //     select {
    //     case <-tick:
    //         fmt.Println("tick.")
    //     case <-boom:
    //         fmt.Println("BOOM!")
    //         return
    //     default:
    //         fmt.Println("    .")
    //         time.Sleep(50 * time.Millisecond)
    //     }
    // }
}
