function pergunta(num) {
    var num = prompt("Digite o número da sua resposta")
    var nTentativas = 3;
    while (nTentativas >= 1){
    if (num == 1) {
        alert ("Parabéns, resposta certa!")
        location.href = "../../HTML/Xena/fase2.html";
        break
    }else{
       alert(`Ops, tente novamente. Você ainda tem ${nTentativas} tentativas.`);
       nTentativas--;
       num = prompt("Digite o número da sua resposta")
            
    }

}
if(nTentativas == 0){location.href = "../../HTML/Game Over.html"}
}