//criar função para relógio digital
function atualizandoHora(){
    //obter hora atual
    const atual = new Date();

    const horas = String(atual.getHours()).padStart(2,'0');
    const minutos = String(atual.getMinutes()).padStart(2,'0');
    const segundos = String(atual.getSeconds()).padStart(2,'0');

    const horaAtual = `${horas}:${minutos}:${segundos}`;
    document.getElementById('relogio').textContent = horaAtual;
}
//setInterval serve para atualizar algo, o 1000 é refrente a 1s
setInterval(atualizandoHora, 1000);
atualizandoHora();