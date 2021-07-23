const alunos = [
    {
        nome: "Paula",
        apelido: "Paulete",
        idade: 26,
        signo: "Áries",
        bandaFavorita: "Rolling Stones",
        email: "paulete123@gmail.com",
        serieFavorita: "Dark",
        curso: "PDZ",
        roupaDeDormir: "pijama"
    },
    {
        nome: "Felisberto",
        apelido: "Betinho",
        idade: 20,
        signo: "Sargitário",
        bandaFavorita: "Madonna",
        email: "betinho.felis@gmail.com",
        serieFavorita: "Um maluco no pedaço",
        curso: "PDZ",
        roupaDeDormir: "só cueca"
    }
];
const alunosResumido = [];

for (i = 0; i < alunos.length; i++) {
    const { nome, idade, email, curso } = alunos[i];
    alunosResumido[i] = { nome: nome, idade: idade, email: email, curso: curso };
}

console.log(alunosResumido);