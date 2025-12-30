const sortearParticipante = (lista) => {
    const indice = Math.floor(Math.random() * lista.length);
    return lista[indice];
};function avaliarPontuacao (pontuacao) {
  if (pontuacao > 80) {
    return `Parabéns, você foi premiado!`;
  } else if (pontuacao >= 50 && pontuacao <= 80) {
    return `Você quase conseguiu! Fique de olho nos próximos sorteios.`;
  } else {
    return `Infelizmente, não foi dessa vez.`;
  }
};function exibirNome (participante) {
  console.log ('Sorteando');
  setTimeout(() => {
        console.log(`Participante sorteado: ${participante.nome}`);
        console.log(`Pontuação: ${participante.pontuacao}`);
        console.log(avaliarPontuacao(participante.pontuacao));
    }, 5000);
};function realizarSorteio(lista) {
    const sorteado = sortearParticipante(lista);
    exibirNome(sorteado);
};const participantes = [
  { nome: "Laura", pontuacao: 92 },
  { nome: "Pedro", pontuacao: 67 },
  { nome: "Clara", pontuacao: 44 }
];

 realizarSorteio (participantes);
