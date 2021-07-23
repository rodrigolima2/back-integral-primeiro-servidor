const express = require('express');
const { send } = require('process');
const app = express();

const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];
let contador = 0;

app.get('/home', (req, res) => {
    if (contador < jogadores.length) {
        res.send(`É a vez de ${jogadores[contador]}`);
        contador += 1;
    } else {
        res.send('Próxima rodada');
        contador = 0;
    }
});
app.get('/remover', (req, res) => {
    if (req.query.indice !== undefined) {
        const index = Number(req.query.indice);
        if (index < jogadores.length) {
            jogadores.splice(index, 1);
            res.send(jogadores);
        } else {
            res.send(`Não existe jogador no índice informado (${index}) para ser removido.`);
        }
    } else {
        res.send('Insira um valor válido');
    }
});
app.get('/adicionar', (req, res) => {
    if (req.query.nome !== undefined) {
        let nome = req.query.nome;
        nome = nome.substr(0, 1).toUpperCase() + nome.substr(1);
        if (req.query.indice === undefined) {
            jogadores.push(nome);
            res.send(jogadores);
        } else {
            const indice = Number(req.query.indice);
            if (indice < jogadores.length) {
                jogadores.splice(indice, 0, nome);
                res.send(jogadores);
            } else {
                res.send(`O índice informado (${indice}) não existe no array. Novo jogador não adicionado.`);
            }
        }
    } else {
        res.send('Insira um valor válido');
    }
});

app.listen(8000);