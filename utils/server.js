const express = require('express');
const app = express();
const path = require('path');
const loginRoutes = require('../routes/LoginRoute.js'); 
const cadastroRoutes = require('../routes/CadastroRoute.js')

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, '../views'));

app.set('view engine', 'ejs');

app.use(express.json());

app.use("", loginRoutes, cadastroRoutes);

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});