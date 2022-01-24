package main
import (
    "fmt"
    "sync"
)

func father(wg *sync.WaitGroup){
    //defer to call wg.Done() after the code executed.
    defer wg.Done()

    fmt.Printf("father\n")
    for i := 0; i < 10; i++ {
        wg.Add(1)
        go child(wg, i)
    }
}

func child(wg *sync.WaitGroup, id int) {
    defer wg.Done()
    fmt.Printf("child [%d]\n", id)
}

func main() {
    var wg sync.WaitGroup
    wg.Add(1)
    go father(&wg)
    
    wg.Wait()
    fmt.Println("all exit")
}
