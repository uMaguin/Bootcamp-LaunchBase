//Construção e impressão de objetos:

const empresa = {
  nome: "Rocketseat",
  cor: "Roxo",
  foco: "Programação",
  endereco: {
    rua: "Rua Guilherme Gembala",
    num: 260,
  },
};
console.log(
  `${empresa.nome} está localizada em ${empresa.endereco.rua}, ${empresa.endereco.num}.`
);

//Vetores e objeto:

const programador = {
  nome: "Rafael",
  idade: 19,
  tec: [
    { nome: "JavaScript", especialidade: "Desktop" },
    { nome: "Python", especialidade: "Data Science" },
  ],
};

console.log(
  `O programador ${programador.nome} tem ${programador.idade} anos, e trabalha com a tencologia ${programador.tec[0].nome} de especialidade ${programador.tec[0].especialidade}.`
);
