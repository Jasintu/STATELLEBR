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
    19: "territorios/RioGrandeSul.png",
    20: "territorios/RioJaneiro.png",
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
  console.log($(`#chance1`).val())

    let myVar = false
    
    for (let key in states) {
        if (states[key] === $(`#chance1`).val()) {
          myVar = true
          break
        }
    }
    
    if (myVar) {
      console.log("tudo ok " + $(`#chance1`).val())
        if(resultStateToday === $(`#chance1`).val()){

          // efeito de confetti

          const buttonX = e.pageX;
          const buttonY = e.pageY;
          createConfetti(buttonX, buttonY)
          animateConfetti()

        }else{
          $(`#card1`).insertAfter(`#card2`)
          restChance = restChance + 1
          if(restChance == 3){
            $(`#card1`).insertAfter(`#card3`)
          } else if(restChance == 4){
            $(`#card1`).insertAfter(`#card4`)
          } else if (restChance >= 5){
            alert("voce perdeu")
          }
        }

    } else {
      console.log("A variável não é igual a nenhum estado")
      alert("Estado desconhecido!")
    }
})

/*<         <div id="customDropdown">
                <input type="text" class="boxWriteState" placeholder="Estado, Território..." list="states" id="chance1">
                <div class="dropdownList">
                    <option value="AC" class="brstate">Acre</option>
                    <option value="AL" class="brstate">Alagoas</option>
                    <option value="AP" class="brstate">Amapá</option>
                    <option value="AM" class="brstate">Amazonas</option>
                    <option value="BA" class="brstate">Bahia</option>
                    <option value="CE" class="brstate">Ceará</option>
                    <option value="DF" class="brstate">Distrito Federal</option>
                    <option value="ES" class="brstate">Espírito Santo</option>
                    <option value="GO" class="brstate">Goiás</option>
                    <option value="MA" class="brstate">Maranhão</option>
                    <option value="MT" class="brstate">Mato Grosso</option>
                    <option value="MS" class="brstate">Mato Grosso do Sul</option>
                    <option value="MG" class="brstate">Minas Gerais</option>
                    <option value="PA" class="brstate">Pará</option>
                    <option value="PB" class="brstate">Paraíba</option>
                    <option value="PR" class="brstate">Paraná</option>
                    <option value="PE" class="brstate">Pernambuco</option>
                    <option value="PI" class="brstate">Piauí</option>
                    <option value="RJ" class="brstate">Rio de Janeiro</option>
                    <option value="RN" class="brstate">Rio Grande do Norte</option>
                </div>
            </div>




<button id="buttonSubmti"> 🌍 ADIVINHAR</button>
*/

