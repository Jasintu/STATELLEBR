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

let NumberRandom = Math.round(Math.random() * 26)
$("#localimage").append(`<img src="${statsterritory[NumberRandom]}" alt="" id="imgstate"></img>`)

/*dar resultado de vitória*/
let resultStateToday = String(states[NumberRandom])

$("#buttonSubmti").click(function(){

    let myVar = false;
    
    for (let chave in states) {
        if (states[chave] === $("#stateInput").val()) {
          myVar = true;
          break
        }
    }
    
    if (myVar) {
      console.log("A variável é igual a " + $("#stateInput").val())
    } else {
      console.log("A variável não é igual a nenhum estado")
    }
})

