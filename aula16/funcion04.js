function fatorial(n){
    let c = n
    let fat = 1
    while( c >= 1){
        fat = fat * c
        c--
    }
    return fat
}
let test = fatorial(5)
console.log(test)