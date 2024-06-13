let jogosAlugados = 0;

function contarEExibirJogosAlugados(){
    console.log(`Total de jogos alugados ${jogosAlugados}`);
}

function alterarStatus(id){
    let game = document.getElementById(`game-${id}`);
    let div = game.querySelector('.dashboard__item__img');
    let botao = game.querySelector('.dashboard__item__button');
    let nome = game.querySelector('.dashboard__item__name');

    if (div.classList.contains('dashboard__item__img--rented') || botao.classList.contains('dashboard__item__button--return')) {
       if (confirm(`Você tem certeza que deseja devolver o jogo ${nome.textContent}`)){
        div.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Alugar'
       }
    } else {
        div.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver'
        jogosAlugados++;
    }

    contarEExibirJogosAlugados();

}

document.addEventListener('DOMContentLoaded', function (){
    jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    contarEExibirJogosAlugados();
});