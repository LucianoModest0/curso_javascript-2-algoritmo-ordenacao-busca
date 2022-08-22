const { edGalho, edFolha } = require("./arrays");

function juntaLista(lista1, lista2) {
  let listaFinal = [];
  let posicaolista1 = 0;
  let posicaolista2 = 0;
  let atual = 0;

  while (posicaolista1 < lista1.length && posicaolista2 < lista2.length) {
    let produtolista1 = lista1[posicaolista1];
    let produtolista2 = lista2[posicaolista2];

    if (produtolista1.preco < produtolista2.preco) {
      listaFinal[atual] = produtolista1;
      posicaolista1++;
    } else {
      listaFinal[atual] = produtolista2;
      posicaolista2++;
    }

    atual++;
  }

  while (posicaolista1 < lista1.length) {
    listaFinal[atual] = lista1[posicaolista1];
    posicaolista1++;
    atual++;
  }

  while (posicaolista2 < lista2.length) {
    listaFinal[atual] = lista2[posicaolista2];
    posicaolista2++;
    atual++;
  }

  return listaFinal;
}

console.log(juntaLista(edGalho, edFolha));
