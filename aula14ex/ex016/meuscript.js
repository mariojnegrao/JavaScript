function contar(){
    let num1 = window.document.getElementById("n1")
    let inicio = Number(num1.value)
    let num2 = window.document.getElementById("n2")
    let fim = Number(num2.value)
    let passo = window.document.getElementById("ipasso")
    let p = Number(passo.value)
    if (n2 == 0 || p == 0){
        window.alert("[ERRO] - Verifique os dados!")
    }
    else{
        var res = window.document.getElementById("resultado")
        res.innerText = "Contando : <br>"
        if (inicio < fim){
            for (i = inicio; i <= fim ; i = i + p){
            res.innerHTML += `${i} \u{1F449}`
            }
            res.innerHTML += `\u{1F3C1}`
        }
        else{
            for( i = inicio; i >= fim ; i-=p ){
                res.innerHTML += `${i} \u{1F449}`
            }
            res.innerHTML += `\u{1F3C1}`
        }
    }
}