function tabuada(){
    let num = document.getElementById("in1")
    let tab = document.getElementById("seltab")
    if( tab.length != 0){
        tab.length = 0
    }
    if( num.value.length == 0){
        window.alert (`Por favor , Digite um numero`)
    }
    else{
        let n = Number(num.value)
        let c = 1
        while (c <= 15){
            let item = document.createElement(`option`)
            item.text = `${n} X ${c} = ${n * c}`
            item.value = `tab ${c}`
            tab.appendChild(item)
            c++
        }
    }
}