const express = require('express');
const app = express();

const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];
let i = 0;

app.get("/rodadas", (req, res) => {
    if (i < jogadores.length) {
        res.send(`É a vez de ${jogadores[i]} jogar!`);
        i++;
    } else {
        res.send('Próxima rodada!');
        i = 0;
    }
});

app.listen(8000);