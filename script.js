let jogoRodando = true
let modificadorDado = 12
let spawnDePedra = 1000
let pedraInterval = null
let score = 0
let maxScore = 0



começoJogo()
function atualizaScore() {
    if (jogoRodando) {
        const scoreAtual = document.getElementById("score")
        scoreAtual.textContent = "score:" + score
    }

}
atualizaScore()

function carroEsquerda() {
    if (jogoRodando == false) {
        return
    }
    const carro = document.getElementById("carro")
    carro.classList.remove("cardireita")
    carro.classList.add("caresquerda")

}

function carroDireita() {
    if (jogoRodando == false) {
        return
    }
    const carro = document.getElementById("carro")
    carro.classList.remove("caresquerda")
    carro.classList.add("cardireita")
}
window.addEventListener("keydown", function (ev) {
    console.log(ev)
    if (ev.key == "ArrowRight") {
        carroDireita()
        return
    }
    if (ev.key == "ArrowLeft") {
        carroEsquerda()
        return
    }
}, true)

function d20() {
    return Math.floor(Math.random() * 20) + 1
}

const summonPedra = () => {
    if (jogoRodando == false) {
        return
    }
    let resultDado = d20()
    if (resultDado < modificadorDado) {
        return
    }
    const pista = document.getElementById("pista")
    const img = document.createElement("img")
    img.src = "assets/rock.png"
    img.classList.add("pedras")
    img.classList.add(d20() > 10 ? "rock" : "rock2")
    img.alt = "pedra"
    pista.appendChild(img)
    setTimeout(() => {
        if (jogoRodando == false) {
            return
        }
        img.remove()
        score = score + 100
        atualizaScore()
    }, 1900)

}
pedraInterval = setInterval(summonPedra, spawnDePedra)

setInterval(() => {
    if (jogoRodando == true && modificadorDado > 1) {
        modificadorDado = modificadorDado - 1
    }
    if (jogoRodando == true && spawnDePedra > 100) {
        spawnDePedra = spawnDePedra - 100
        clearInterval(pedraInterval)
        pedraInterval = setInterval(summonPedra, spawnDePedra)
    }
}, 10000)

setInterval(() => {
    const carro = document.getElementById("carro")
    const pedras = document.querySelectorAll(".pedras")
    pedras.forEach(img => {
        if (img.offsetTop >= carro.offsetTop) {
            if (carro.offsetLeft <= img.offsetLeft && (carro.offsetLeft + carro.offsetWidth >= img.offsetLeft + img.offsetWidth)) {
                terminaJogo()
            }
        }
    });
}, 10);

function terminaJogo() {
    if (jogoRodando == false) {
        return
    }
    jogoRodando = false
    const carro = document.getElementById("carro")
    carro.src = "assets/carParado.png"
    const fundo = document.querySelector(".road")
    fundo.src = "assets/fundoParado.png"
    const pedras = document.querySelectorAll(".pedras")
    const gameOver = document.querySelector(".retryPai")
    gameOver.classList.remove("hidden")
    pedras.forEach(element => {
        element.classList.add("paused")
    });
    if (score > maxScore) {
        maxScore = score
        const scoreAtual = document.getElementById("maxscore")
        scoreAtual.textContent = "maxscore:" + maxScore
    }
}
function iniciaJogo() {
    const carro = document.getElementById("carro")
    carro.src = "assets/car.gif"
    console.log(carro)
    const fundo = document.querySelector(".road")
    fundo.src = "assets/vaporcar.gif"
    const gameOver = document.querySelector(".retryPai")
    gameOver.classList.add("hidden")
    const inicio = document.querySelector(".começo")
    inicio.classList.add("hidden2")
    const pedras = document.querySelectorAll(".pedras")
    pedras.forEach(element => {
        element.remove()
    });
    jogoRodando = true
    modificadorDado = 12
    spawnDePedra = 1000
    score = 0

    atualizaScore()
}

function começoJogo() {
    if (jogoRodando == false) {
        return
    }
    jogoRodando = false
    const carro = document.getElementById("carro")
    carro.src = "assets/carParado.png"
    const fundo = document.querySelector(".road")
    fundo.src = "assets/fundoParado.png"
    const pedras = document.querySelectorAll(".pedras")
    const gameOver = document.querySelector(".começo")
    gameOver.classList.remove("hidden2")
    pedras.forEach(element => {
        element.classList.add("paused")
    });
    if (score > maxScore) {
        maxScore = score
        const scoreAtual = document.getElementById("maxscore")
        scoreAtual.textContent = "maxscore:" + maxScore
    }
}

// let play = document.getElementById("playSound");
// function playMusic() {
//  let audio = new Audio("assets/steve.mp3");
//  audio.play()
// }
// play.addEventListener("click", playMusic);

var audio = document.getElementById("music");
  audio.volume = 0.2;

function paraMusica(){
    var ply = document.getElementById('music');
    var oldSrc = ply.src
    const botao = document.querySelector(".botao1")
    const botao2 = document.querySelector(".botao2")

    botao2.classList.remove("hidden")
    botao.classList.add("hidden")
    ply.volume = 0;
}
function voltaMusica(){
    const botao = document.querySelector(".botao1")
    const botao2 = document.querySelector(".botao2")

    botao2.classList.add("hidden")
    botao.classList.remove("hidden")
    var ply = document.getElementById('music');
    var oldSrc = ply.src
    ply.volume = 0.2;

}
