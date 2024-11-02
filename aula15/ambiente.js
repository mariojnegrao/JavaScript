let num = []
let num2 = [1,3,5,1,5,9,7]
if (num.length == 0){
    console.log(`O vector num está vazio`)
    console.log(`A adicionando elemntos ao vector...`)
    let c = 0
    while( c <= 6){
        num.push(c)
        c++
    }
}
else{
    console.log(`O vector num tem os seguintes elementos : ${num}`)
}

console.log(`O vector num tem os seguintes elementos : ${num}`)
console.log(`O vector num2 tem os seguintes elementos : ${num2}`)
console.log(`Organizando o verctor num e num2...`)
num.sort()
num2.sort()
console.log(`O vector num tem os seguintes elementos : ${num}`)
console.log(`O vector num2 tem os seguintes elementos : ${num2}`)

console.log(`O tamanho do vector num é : ${num.length}`)
console.log(`O tamanho do vector num2 é : ${num2.length}`)

if(num.length == num2.length){
    console.log("Os vectores têm  mesmo tamanho")
    let pos = 0
    while(pos <= (num.length-1)){
        if (num[pos] == num2[pos]){
            console.log(`Os elementos de num e num2 na posição ${pos} são iguais `)
        }
        else{
            console.log(`Os elementos de num e num2 na posição ${pos} são diefentes `)
        }
        pos++
        
    }
    console.log(`O vector num tem os seguintes elementos : ${num}`)
    console.log(`O vector num2 tem os seguintes elementos : ${num2}`)
    console.log(num2.indexOf(a))
}