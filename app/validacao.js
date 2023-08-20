function verificaSeGameOver(chute) {
    if (chute.toUpperCase() == "GAME OVER") {
        document.body.innerHTML =
        `
            <i class="fa-solid fa-face-grin-tongue-wink fa-spin icon-game-over"></i>
            <h2>Game Over!</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>

            <button id="jogar-novamente" class="btn-jogar" >Jogar novamente</button>
        `;
        document.body.style.backgroundColor = "black";

        const botaoJogar = document.getElementById('jogar-novamente');
        botaoJogar.addEventListener('click', () => window.location.reload());
    }
}

function verificaSeChuteTemValorValido(chute) {
    const numero = +chute // converte para número

    if (valorNaoEhNumero(numero)) {
        elementoChute.innerHTML += '<div>Valor inválido: o valor precisa ser um número</div>';
        return;
    }

    if (valorEhMenorOuMaiorQuePermitido(numero)) {
        elementoChute.innerHTML += `<div>Valor inválido: fale um número entre ${menorValor} e ${maiorValor}</div>`;
        return;
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = 
        `
            <i class="fa-solid fa-trophy fa-bounce icon-winner"></i>
            <h2>Você acertou!</h2>
            <h3>O número secreto é ${numeroSecreto}</h3>

            <button id='jogar-novamente' class='btn-jogar'>Jogar novamente</button>
        `;

        const botaoJogar = document.getElementById('jogar-novamente');
        botaoJogar.addEventListener('click', () => window.location.reload());

    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
            <div>O número secreto é menor <i class="fa-solid fa-arrow-down-long"></i></div>
        `;
    } else {
        elementoChute.innerHTML += `
            <div>O número secreto é maior <i class="fa-solid fa-arrow-up-long"></i></div>
        `;
    }
}

function valorNaoEhNumero(numero) {
    return Number.isNaN(numero);
}

function valorEhMenorOuMaiorQuePermitido(numero) {
    return numero > maiorValor || numero < menorValor;
}

// document.body.addEventListener('click', e => {
//     if (e.target.id == 'jogar-novamente') {
//         window.location.reload();
//     }
// })

