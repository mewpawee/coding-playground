package main
import(
    "fmt"
    "sync"
)

var UPT = 0

func worker(st *sync.WaitGroup){
    UPT = UPT + 1
    st.Done()
}

func main(){
 var s sync.WaitGroup
 for i := 0; i < 1000; i++ {
    s.Add(1)
    go worker(&s)
 }
 s.Wait()
 fmt.Println("The y value is", UPT)
}
