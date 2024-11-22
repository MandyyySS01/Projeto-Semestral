//indiceatual, guarda qual slide está sendo exibido
let indiceatual = 0
const slides = document.querySelectorAll('.slide')
const total = slides.length
const intervalo = 5000
let radioum = document.getElementById('radio1')
let radiodois = document.getElementById('radio2')
let radiotres = document.getElementById('radio3')
let indicielivros = 0
const caixas = document.querySelectorAll('.caixa')
const totalcaixa = 2

//mostra(indice) é responsável por mover o carrossel, alterando a posição horizontal dos slides com a propriedade CSS transform: translatex
function mostrar(indice) {
    const carrossel = document.querySelector('.carrossel')
    carrossel.style.transform=`translateX(-${indice*100}%)`
}

//os controles "radio1,2 e 3" muda o indicieatual para o slide correspondente e ajusta a cor dos botoês, destacando qual está ativo
function radio1(){
    indiceatual = 0
    mostrar(indiceatual)
    radioum.style.backgroundColor='red'
    
if (radioum.style.backgroundColor=='red'){
    radiodois.style.backgroundColor='black'
    radiotres.style.backgroundColor='black'
}
}
function radio2(){
    indiceatual = 1
    mostrar(indiceatual)
    radiodois.style.backgroundColor='red'
    
    if (radiodois.style.backgroundColor=='red'){
        radioum.style.backgroundColor='black'
        radiotres.style.backgroundColor='black'
    }
}
function radio3(){
    indiceatual = 2
    mostrar(indiceatual)
    radiotres.style.backgroundColor='red'
    
    if (radiotres.style.backgroundColor=='red'){
        radiodois.style.backgroundColor='black'
        radioum.style.backgroundColor='black'
    }
}

function avanco(){
    indiceatual = (indiceatual+1)%total
    mostrar(indiceatual)

}
//setInterval serve para que o carrossel avance automaticamente, alterando os slides a cada 5 segudos.
setInterval(avanco,intervalo)
function mostrarlivros(livros){
    const tudocaixa = document.querySelector('.tudocaixa')
    tudocaixa.style.transform=`translateX(-${livros*100}%)`
}
//este controle é totalmente manual, com as funções proximo e anterior, que permite navegar entre as categorias. também usamos o transform: translateX para o movimento horizontal
function proximo(){

    indicielivros = (indicielivros+1)%totalcaixa
    mostrarlivros(indicielivros)
}
function anterior(){
     indicielivros=(indicielivros-1+totalcaixa)%totalcaixa
     mostrarlivros(indicielivros)
}


