function calculoidade(){
    var data = new Date()
    var anoat = data.getFullYear()
    var a = window.document.getElementById("iano")
    if ((a.value.length == 0) || (a.value >= anoat) || (anoat-a.value >=200)){
        window.alert("[ERRO-ANO_INVALIDO]: Verifique os dados e tente novamente!")
    }
    else{
        var sexo = window.document.getElementsByName("sexo")
        var genero = ""
        var imagem = document.createElement("img")
        imagem.setAttribute("id","foto")
        var idade = anoat - a.value
        
        if(sexo[0].checked){
            genero = "Homem"
            if (idade <= 10){
                imagem.setAttribute("src","imagens/homem/7-10h.png")
            }
            else if (idade <= 13){
                imagem.setAttribute("src","imagens/homem/10-13h.png")
            }
            else if (idade <= 15){
                imagem.setAttribute("src","imagens/homem/13-15h.png")
            }
            else if (idade <= 20){
                imagem.setAttribute("src","imagens/homem/15-20h.png")
            }
            else if (idade <= 25){
                imagem.setAttribute("src","imagens/homem/20-25h.png")
            }
            else if (idade <= 35){
                imagem.setAttribute("src","imagens/homem/30-35.png")
            }
            else if (idade <= 45){
                imagem.setAttribute("src","imagens/homem/40-45h.png")
            }
            else if (idade <= 50){
                imagem.setAttribute("src","imagens/homem/45-50h.png")
            }
            else if (idade <= 55){
                imagem.setAttribute("src","imagens/homem/50-55h.png")
            }
        }
        else{
            genero = "Mulher"
            if (idade <= 10){
                imagem.setAttribute("src","imagens/mulher/7-10m.png")
            }
            else if (idade <= 13){
                imagem.setAttribute("src","imagens/mulher/10-13m.png")
            }
            else if (idade <= 15){
                imagem.setAttribute("src","imagens/mulher/13-15m.png")
            }
            else if (idade <= 20){
                imagem.setAttribute("src","imagens/mulher/15-20m.png")
            }
            else if (idade <= 25){
                imagem.setAttribute("src","imagens/mulher/20-25m.png")
            }
            else if (idade <= 35){
                imagem.setAttribute("src","imagens/mulher/30-35m.png")
            }
            else if (idade <= 45){
                imagem.setAttribute("src","imagens/mulher/40-45m.png")
            }
            else if (idade <= 50){
                imagem.setAttribute("src","imagens/mulher/45-50m.png")
            }
            else if (idade <= 55){
                imagem.setAttribute("src","imagens/mulher/50-55m.png")
            }
        }
    
    var msg = window.document.getElementById("msg1")
    var divf = document.getElementById("div-foto")
    msg.innerText = `${genero} de ${idade}`
    divf.innerText = ""
    divf.appendChild(imagem)
    }
}