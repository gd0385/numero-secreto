/**
 * https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API
 */

const elementoChute = document.getElementById('chute');

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';
recognition.start();

recognition.addEventListener('result', onSpeak);

function onSpeak(e) {
    let chute = e.results[0][0].transcript
        .replace("−", "-")
        .replace(".", "")
        .replace("Menos ", "-")
        .replace("Um", '1')
        .replace("Sem", '100');

    exibeChuteNaTela(chute);
    verificaSeGameOver(chute);
    verificaSeChuteTemValorValido(chute);
}

function exibeChuteNaTela(chute) {
    elementoChute.innerHTML = `
        <div>Você disse</div>
        <span class="box">${chute}</span>
    `
}

recognition.addEventListener('end', () => recognition.start());