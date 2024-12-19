const express = require('express');
const app = express();
const path = require('path');
const loginRoutes = require('../routes/LoginRoute.js'); 
const cadastroRoutes = require('../routes/CadastroRoute.js');
const homeRoutes = require('../routes/HomeRoute.js');
const erroRoutes = require('../routes/erroRoute.js');

app.use(express.urlencoded({ extended: true }));
app.use('/js', express.static('node_modules/flowbite/dist'));
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());

app.use("", loginRoutes, cadastroRoutes, homeRoutes);
app.use("/home", erroRoutes)

app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});