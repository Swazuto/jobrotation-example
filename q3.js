const faturamentoMensal = require('./q3.json');
  
  // Função para calcular a média de um array de números
  const calcularMedia = (numeros) => {
    const soma = numeros.reduce((acc, valor) => acc + valor, 0);
    return soma / numeros.length;
  };
  
  // Função para obter o menor valor em um objeto
  const obterMenorValor = (objeto) => {
    const valores = Object.values(objeto);
    return Math.min(...valores);
  };
  
  // Função para obter o maior valor em um objeto
  const obterMaiorValor = (objeto) => {
    const valores = Object.values(objeto);
    return Math.max(...valores);
  };
  
  // Função para contar o número de dias em que o valor é maior que a média
  const contarDiasAcimaDaMedia = (objeto, media) => {
    let contador = 0;
    const valores = Object.values(objeto);
    for (let valor of valores) {
      if (valor > media) {
        contador++;
      }
    }
    return contador;
  };
  
  // Cálculos para janeiro
  const faturamentoJaneiro = faturamentoMensal.janeiro;
  const menorValorJaneiro = obterMenorValor(faturamentoJaneiro);
  const maiorValorJaneiro = obterMaiorValor(faturamentoJaneiro);
  const mediaJaneiro = calcularMedia(Object.values(faturamentoJaneiro));
  const diasAcimaDaMediaJaneiro = contarDiasAcimaDaMedia(faturamentoJaneiro, mediaJaneiro);
  
  // Cálculos para fevereiro
  const faturamentoFevereiro = faturamentoMensal.fevereiro;
  const menorValorFevereiro = obterMenorValor(faturamentoFevereiro);
  const maiorValorFevereiro = obterMaiorValor(faturamentoFevereiro);
  const mediaFevereiro = calcularMedia(Object.values(faturamentoFevereiro));
  const diasAcimaDaMediaFevereiro = contarDiasAcimaDaMedia(faturamentoFevereiro, mediaFevereiro);
  
  console.log("Janeiro:");
  console.log("Menor valor de faturamento: R$" + menorValorJaneiro);
  console.log("Maior valor de faturamento: R$" + maiorValorJaneiro);
  console.log("Número de dias acima da média: " + diasAcimaDaMediaJaneiro);
  
  console.log("Fevereiro:");
  console.log("Menor valor de faturamento: R$" + menorValorFevereiro);
  console.log("Maior valor de faturamento: R$" + maiorValorFevereiro);
  console.log("Número de dias acima da média: " + diasAcimaDaMediaFevereiro);
  