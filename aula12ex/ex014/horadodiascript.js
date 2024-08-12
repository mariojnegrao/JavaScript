function carregar(){
    var msg1 = window.document.getElementById("msg")
    var msg2 = window.document.getElementById("saudacao")
    var img = window.document.getElementById("imagem")
    var corpo = window.document.body
    var data = new Date()
    var hora = data.getHours()
    msg1.innerText = `Agora são ${hora} horas `
    if(hora >= 0  && hora <12){
        img.src = "manha.png"
        corpo.style.background = "#978B3D"
        msg2.innerText = "Bom dia!"
    }
    else if(hora >=12 && hora < 18){
        img.src = "tarde.png"
        corpo.style.background = "#937E66"
        msg2.innerText = "Boa tarde!"
    }
    else{
        img.src = "noite.png"
        corpo.style.background = "#2D2439"
        msg2.innerText = "Boa noite!"
    }
}