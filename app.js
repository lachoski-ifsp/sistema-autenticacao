const express = require('express');
const db = require('./db');

const app = express();

//configurações do express
//1. configurar ejs
app.set('view engine', 'ejs');
//2. configurar o css da pasta public
app.use(express.static('public'));
//3. permitir inserção de dados por formulários
app.use(express.urlencoded({extended: true}));
//4. Colocar servidor no ar
app.listen(3000, () => {
    console.log("Servidor rodando na port 3000");
});

app.get('/dashboard', (req, res) => {
    res.render('dashboard', {nome: 'Eli'});
});