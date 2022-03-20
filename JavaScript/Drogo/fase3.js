
function pergunta(num) {
    var num = prompt("Digite o número da sua resposta")
    var nTentativas = 3;
    while (nTentativas >= 1){
    if (num == 4) {
        alert ("Parabéns, resposta certa!")
        location.href = "../../HTML/Drogo/Final.html";
        break
    }else{
       alert(`Ops, tente novamente. Você ainda tem ${nTentativas} tentativas.`);
       nTentativas--;
       num = prompt("Digite o número da sua resposta")
       location.href = "../../HTML/Game Over.html"
    }
    }
    }