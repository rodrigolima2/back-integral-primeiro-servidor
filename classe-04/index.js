const express = require('express');
const app = express();

app.get('/somar', (req, res) => {
    let num1 = req.query.num1;
    let num2 = req.query.num2;
    if (num1 !== undefined && num2 !== undefined) {
        let resultado = Number(num1) + Number(num2);
        res.send(`A soma entre ${num1} e ${num2} é igual ${resultado}`);
    } else {
        res.send("Você deve digitar valores validos");
    }
});
app.get('/subtrair', (req, res) => {
    let num1 = req.query.num1;
    let num2 = req.query.num2;
    if (num1 !== undefined && num2 !== undefined) {
        let resultado = Number(num1) - Number(num2);
        res.send(`A subtração entre ${num1} e ${num2} é igual ${resultado}`);
    } else {
        res.send("Você deve digitar valores validos");
    }
});
app.get('/multiplicar', (req, res) => {
    let num1 = req.query.num1;
    let num2 = req.query.num2;
    if (num1 !== undefined && num2 !== undefined) {
        let resultado = Number(num1) * Number(num2);
        res.send(`A multiplicação entre ${num1} e ${num2} é igual ${resultado}`);
    } else {
        res.send("Você deve digitar valores validos");
    }
});
app.get('/dividir', (req, res) => {
    let num1 = req.query.num1;
    let num2 = req.query.num2;
    if (num1 !== undefined && num2 !== undefined) {
        let resultado = Number(num1) / Number(num2);
        res.send(`A divisão entre ${num1} e ${num2} é igual ${resultado}`);
    } else {
        res.send("Você deve digitar valores validos");
    }
});

app.listen(8000);