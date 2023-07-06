// Objeto com estados brasileiros
var estadosBrasileiros = {
    acre: 'Acre',
    alagoas: 'Alagoas',
    amapa: 'Amapá',
    // adicione os demais estados aqui
  };
  
  // Variável a ser comparada
  var minhaVariavel = 'Ampá';
  
  // Verifica se a variável é igual a algum valor dentro do objeto
  var encontrado = false;
  for (var chave in estadosBrasileiros) {
    if (estadosBrasileiros[chave] === minhaVariavel) {
      encontrado = true;
      break; // interrompe o loop quando encontrar uma correspondência
    }
  }
  
  // Verifica se a variável foi encontrada
  if (encontrado) {
    console.log('A variável foi encontrada dentro do objeto.');
  } else {
    console.log('A variável não foi encontrada dentro do objeto.');
  }