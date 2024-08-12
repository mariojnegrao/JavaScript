function contar(){
    var num1 = window.document.getElementById("n1")
    var n1 = Number(num1.value)
    var num2 = window.document.getElementById("n2")
    var n2 = Number(num2.value)
    var passo = window.document.getElementById("ipasso")
    var p = Number(passo.value)
    if (n2 == 0 || p == 0){
        window.alert("[ERRO]- Verifique os dados")
    }
    else{
        var res = window.document.getElementById("resultado")
        res.innerText = ""
        for (i = n1; i <= n2 ; i = i + p){
            res.append(`${i}`)
            if (i<n2){
                res.append(`👉`)
            }
        }
        res.append(`🏴󠁣󠁯󠁭󠁥󠁴󠁿`)
    }
}