let list = []
let sel = document.getElementById("isel")
let p = document.getElementById("res")


function add(){
    let n = document.getElementById("inum")
    let sel = document.getElementById("isel")
    num = Number(n.value)
    if (num < 1 || num > 100){
        window.alert("[ERRO] - Número Invalido")
    }
    else{       
        list.push(num)
        item = document.createElement(`option`)
        item.text = `O número ${num} foi adicionado`
        sel.appendChild(item)
    }
}


function limpar(){
    if( list.length == 0 ){
        window.alert("A lista já está vazia")   
    } 
    else{
        list.length = 0
        let item = document.createElement("option")
        item.text = ``
        sel.replaceChildren(item)
        p.innerText = ``
    }
}
function final(){
    if(list.length == 0){
       p.innerText = `A lista está vazia`
    }
    else{
        let maior = list[0]
        let menor = list[0]
        let media = 0
        let total = 0
        let c = 0
        while(c < (list.length)){
            if(list[c] > maior){
                maior = list[c]
            }
            if ( list[c] < menor){
                menor = list[c]
            }
            media = media + list[c]
            total = total + list[c]
            c++
        }
        media = media / c
        p.innerHTML = ` Ao total temos ${list.length} elementos na lista <br><br> O maior é o : ${maior} <br> O menor é o : ${menor} <br><br> A soma total dos elementos é: ${total} <br><br> A média dos elemenetos é : ${media} <br><br> Os elementos da lista são : ${list} `
    }
}