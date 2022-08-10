/*
  A função average recebe um array de tamanho variável e retorna a média dos numeros recebidos.
  Caso a função receba algum valor não numérico ou um array vazio, o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/
const average = (numeros) => {
  var soma = 0;
  var media = 0;
  var vf = true;
  for (var index = 0; index < numeros.length; index += 1) {
    if ((typeof numeros[index]) === 'string') {
      vf = false;
    }
    soma += numeros[index];
  }
   media = soma / numeros.length;
    media = Math.round(media);
    if (vf !== true || Number.isNaN(media) === true) {
      return (undefined);
    }
      return (media);
};
average([]);
// console.log(average( 0, 04, 5 ));
module.exports = average;
