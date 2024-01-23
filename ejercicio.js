function encontrarMenorMayor(lista) {
  let mayor = lista[0];
  let menor = lista[0];
  for (let i = 1; i < lista.length; i++) {
    if (lista[i] > mayor) {
      mayor = lista[i];
    }
    if (lista[i] < menor) {
      menor = lista[i];
    }
  }
  console.log(`El número menor es ${menor} y el número mayor es ${mayor}`);

}

let listaNumeros = [3, 4, 5, 2, 1];
encontrarMenorMayor(listaNumeros);