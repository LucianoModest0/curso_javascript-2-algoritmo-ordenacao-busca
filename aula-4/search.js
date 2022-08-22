const listaLivros = require("./arrayOrdenado");

function search(arr, from, to, value) {
  const mid = Math.floor((from + to) / 2);
  const actual = arr[mid];

  if (from > to) {
    return -1;
  }

  if (value === actual.preco) {
    return mid;
  }

  if (value < actual.preco) {
    return search(arr, from, mid - 1, value);
  }

  if (value > actual.preco) {
    return search(arr, mid + 1, to, value);
  }
}

console.log(search(listaLivros, 0, listaLivros.length - 1, 36));
