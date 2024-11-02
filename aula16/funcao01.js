function parimpar(n){
    if(n % 2 == 0){
        return(`Par!`)
    }
    else{
        return(`Impar!`)
    }
}
let a = parimpar(5)
console.log(`${a}`)