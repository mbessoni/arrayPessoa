// Criar o array de objetos pessoa
let pessoas = [
    {
      nome: "Andre",
      idade: 30,
      profissão: "Engenheiro",
      cidade: "São Paulo"
    },
    {
      nome: "Bruna",
      idade: 25,
      profissão: "Designer",
      cidade: "Rio de Janeiro"
    },
    {
      nome: "Carol",
      idade: 28,
      profissão: "Empresaria",
      cidade: "Poção"
    },
    {
      nome: "Michelle",
      idade: 38,
      profissão: "Programadora",
      cidade: "Recife"
    }
  ];
  
  // Usando o loop for in para imprimir todas as propriedades de cada pessoa
  for (let pessoa of pessoas) {
    console.log("Detalhes da pessoa:");
    for (let propriedade in pessoa) {
      console.log(`${propriedade}: ${pessoa[propriedade]}`);
    }
    console.log(""); // Adiciona uma linha em branco para separar cada pessoa
  }
  