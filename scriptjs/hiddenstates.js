"use strict"

const states = {
    0: 'ACRE',
    1: 'ALAGOAS',
    2: 'AMAPÁ',
    3: 'AMAZONAS',
    4: 'BAHIA',
    5: 'CEARÁ',
    6: 'DISTRITO FEDERAL',
    7: 'ESPÍRITO SANTO',
    8: 'GOIÁS',
    9: 'MARANHÃO',
    10: 'MATO GROSSO',
    11: 'MATO GROSSO DO SUL',
    12: 'MINAS GERAIS',
    13: 'PARÁ',
    14: 'PARAÍBA',
    15: 'PARANÁ',
    16: 'PERNAMBUCO',
    17: 'PIAUÍ',
    18: 'RIO GRANDE DO NORTE',
    19: 'RIO DE JANEIRO',
    20: 'RIO GRANDE DO SUL',
    21: 'RONDÔNIA',
    22: 'RORAIMA',
    23: 'SANTA CATARINA',
    24: 'SÃO PAULO',
    25: 'SERGIPE',
    26: 'TOCANTINS'
}


const statsterritory = {
    0: "territorios/Acre.png",
    1: "territorios/Alagoas.png",
    2: "territorios/Amapá.png",
    3: "territorios/Amazonas.png",
    4: "territorios/Bahia.png",
    5: "territorios/Ceará.png",
    6: "territorios/DistritoFederal.png",
    7: "territorios/EspíritoSanto.png",
    8: "territorios/Goiás.png",
    9: "territorios/Maranhão.png",
    10: "territorios/MatoGrosso.png",
    11: "territorios/MatoGrossoSul.png",
    12: "territorios/MinasGerais.png",
    13: "territorios/Pará.png",
    14: "territorios/Paraíba.png",
    15: "territorios/Paraná.png",
    16: "territorios/Pernambuco.png",
    17: "territorios/Piauí.png",
    18: "territorios/RioGrandeNorte.png",
    19: "territorios/RioJaneiro.png",
    20: "territorios/RioGrandeSul.png",
    21: "territorios/Rondônia.png",
    22: "territorios/Roraima.png",
    23: "territorios/SantaCatarina.png",
    24: "territorios/SãoPaulo.png",
    25: "territorios/Sergipe.png",
    26: "territorios/Tocantins.png",
}

// exibição de território

let NumberRandom = Math.round(Math.random() * 26)
$("#localimage").append(`<img src="${statsterritory[NumberRandom]}" alt="" id="imgstate"></img>`)

//fim 

//animação de confetti no canvas

const canvas = document.getElementById('confetti-canvas')
const ctx = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const confettiColors = ['#FF0000', '#00FF00', '#0000FF']
const confettiShapes = ['circle', 'square', 'triangle']
const confettiSpeed = 25
const confetti = []

function createConfetti(x, y) {
  for (let i = 0; i < 100; i++) {
    const angle = Math.random() * Math.PI * 2;
    const velocity = Math.random() * confettiSpeed + 1;
    const color = confettiColors[Math.floor(Math.random() * confettiColors.length)]
    const shape = confettiShapes[Math.floor(Math.random() * confettiShapes.length)]

    confetti.push({
      x,
      y,
      color,
      shape,
      dx: velocity * Math.cos(angle),
      dy: velocity * Math.sin(angle),
    })
  }
}

function animateConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < confetti.length; i++) {
    const confetto = confetti[i]
    confetto.x += confetto.dx
    confetto.y += confetto.dy

    ctx.beginPath()
    ctx.fillStyle = confetto.color

    if (confetto.shape === 'circle') {
      ctx.arc(confetto.x, confetto.y, 5, 0, 2 * Math.PI);
    } else if (confetto.shape === 'square') {
      ctx.rect(confetto.x - 5, confetto.y - 5, 10, 10);
    } else if (confetto.shape === 'triangle') {
      ctx.moveTo(confetto.x, confetto.y);
      ctx.lineTo(confetto.x - 5, confetto.y + 10);
      ctx.lineTo(confetto.x + 5, confetto.y + 10);
      ctx.closePath()
    }

    ctx.fill()

    // Remover confetes que saem da tela

    if (confetto.y > canvas.height) {
      confetti.splice(i, 1)
      i--
    }
  }

  if (confetti.length > 0) {
    requestAnimationFrame(animateConfetti)
  }
}

// fim do canvas

//dar resultado de vitória

let resultStateToday = String(states[NumberRandom])
let restChance = 1
let nowCard = 1


$(`#buttonChance1`).click(function(e){
    let myVar = false
    
    for (let key in states) {
        if (states[key] === $(`#chance1`).val()) {
          myVar = true
          break
        }
    }
    
    if (myVar) {
        if(resultStateToday === $(`#chance1`).val()){

          // efeito de confetti

          const buttonX = e.pageX;
          const buttonY = e.pageY;
          createConfetti(buttonX, buttonY)
          animateConfetti()

          $("#allChances").css({"display" : "none"})

          $("#allChances").replaceWith(`<div class="container">
          <div class="divlockNone">A RESPOSTA CORRETA ERA ${$("#chance1").val()} 
          🎉</div>
          </div>
          <div class="container">
          <div>
          <a href="index.html"><button id="replayButton"> JOGAR NOVAMENTE <img src="icones/ICONREPLAY-removebg-preview.png" alt="" id="iconReplay"></button></a></div>
          </div>`)

          

        }else{
          $(`#card1`).insertAfter(`#card2`)
          //PRIMEIRA CHANCE
          
          restChance = restChance + 1
          $("#chance2").replaceWith(`<div class="containerShow">
          <div id="divShowState">${$("#chance1").val()} ❌</div>
          </div>`)
          $("#buttonChance2").replaceWith(`<div class="divlock"> ADIVINHAR 1 / 4</div>`)

          if(restChance == 3){
            //SEGUNDA CHANCE

            $(`#card1`).insertAfter(`#card3`)
            $("#chance3").replaceWith(`<div class="containerShow">
            <div id="divShowState">${$("#chance1").val()} ❌</div>
            </div>`)
            $("#buttonChance3").replaceWith(`<div class="divlock"> ADIVINHAR 2 / 4</div>`)


          } else if(restChance == 4){
            //TERCEIRA CHANCE

            $(`#card1`).insertAfter(`#card4`)
            $("#chance4").replaceWith(`<div class="containerShow">
            <div id="divShowState">${$("#chance1").val()} ❌</div>
            </div>`)
            $("#buttonChance4").replaceWith(`<div class="divlock"> ADIVINHAR 3 / 4</div>`)

          } else if (restChance >= 5){
            //QUARTA CHANCE

            $(`#card1`).css({"display" : "none"})
            $("#buttonChance1").css({"display" : "none"})

            $("#finalResult").append(`<div class="containerShow">
            <div id="divShowState">${$("#chance1").val()} ❌</div>
            </div>`)
            $("#finalResult").append(`<div class="divlock"> ADIVINHAR 4 / 4</div>`)

            $("#chancesInScreen").replaceWith(`
            <div class="container">
            <div id="finalLoss">A resposta correta era ${resultStateToday}.</div>
            </div>
            `)
            $("#allChances").append(`
            <div class="container">
            <div>
            <a href="index.html"><button id="replayButton"> JOGAR NOVAMENTE <img src="icones/ICONREPLAY-removebg-preview.png" alt="" id="iconReplay"></button></a></div>
            </div>`)
            
          }
        }
    } else {
      
      setTimeout(function(){     
        $("#containerErrorMsg").css({"display" : "flex"})
        
      },)

      setTimeout(function(){

        $("#containerErrorMsg").css({"animation" : "fadeInReverse 0.5s alternate"})
        
      }, 500)
      

      setTimeout(function(){
        
        $("#containerErrorMsg").css({"display" : "none"})
        $("#containerErrorMsg").css({"animation" : "fadeIn 0.5s alternate"})

      }, 1000)

    }
})

