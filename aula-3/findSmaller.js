const listaLivros = require("./array");

function findSmaller(pivot, arr) {
  let smaller = 0;

  for (let actual = 0; actual < arr.length; actual++) {
    let actualProduct = arr[actual];
    if (actualProduct.preco < pivot.preco) {
      smaller++;
    }
  }

  changeIndex(arr, arr.indexOf(pivot), smaller);

  return arr;
}

function changeIndex(arr, from, to) {
  const elem1 = arr[from];
  const elem2 = arr[to];

  arr[to] = elem1;
  arr[from] = elem2;
}

function splitOnPivot(arr) {
  let pivot = arr[Math.floor(arr.length / 2)];
  findSmaller(pivot, arr);
  let smallerValue = 0;

  for (let i = 0; i < arr.length; i++) {
    let actual = arr[i];
    if (actual.preco <= pivot.preco && actual !== pivot) {
      changeIndex(arr, i, smallerValue);
      smallerValue++;
    }
  }

  return arr;
}

console.log(splitOnPivot(listaLivros));
//console.log(findSmaller(listaLivros[2], listaLivros));

module.exports = changeIndex;
