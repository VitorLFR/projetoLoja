const fs = require('fs');

const pName = document.getElementById('pNome').value;
const pPreco = document.getElementById('pPreco').value;
const pLocal = document.getElementById('pLocal').value;
const pCondicao = document.getElementById('pCondicao').value;
const pTamanho = document.getElementById('pTamanho').value;
const pTipo = document.getElementById('pTipo').value;
const pImagem = document.getElementById('pImagem').value;


fs.appendFile('../data/products.json');
