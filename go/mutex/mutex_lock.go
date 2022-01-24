package main
import(
    "fmt"
    "sync"
)

var UTV = 0 

func worker(wt *sync.WaitGroup, k * sync.Mutex){
    k.Lock()
    UTV = UTV + 1 
    k.Unlock()
    wt.Done()
}

func main() {
    var s sync.WaitGroup
    var n sync.Mutex
    
    //start 0 - 999 worker
    for i :=0; i < 1000; i++{
        s.Add(1)
        go worker(&s, &n)
    }

    s.Wait()
    fmt.Println("The y value is", UTV)
}
