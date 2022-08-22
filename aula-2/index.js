const listaLivros = require("./array");

function mengeSort(arr, nesting = 0) {
  console.log(`Nesting lvl ${nesting}`);
  console.log(arr);

  if (arr.length > 1) {
    const mid = Math.floor(arr.length / 2);
    const part1 = mengeSort(arr.slice(0, mid), nesting++);
    const part2 = mengeSort(arr.slice(mid, arr.length), nesting++);
    arr = order(part1, part2);
  }

  return arr;
}

function order(part1, part2) {
  let pos1 = 0;
  let pos2 = 0;
  const result = [];

  while (pos1 < part1.length && pos2 < part2.length) {
    let product1 = part1[pos1];
    let product2 = part2[pos2];

    if (product1.preco < product2.preco) {
      result.push(product1);
      pos1++;
    } else {
      result.push(product2);
      pos2++;
    }
  }

  return result.concat(
    pos1 < part1.length ? part1.slice(pos1) : part2.slice(pos2)
  );
}

console.log(mengeSort(listaLivros));
