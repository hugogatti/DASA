const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

const categoriaRoutes = require('./routes/categoriaRoutes');
const produtoRoutes = require('./routes/produtosRoutes');

app.use(express.json());

// Configurar a pasta 'views' para servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'views')));

app.use('/categorias', categoriaRoutes);
app.use('/produtos', produtoRoutes);

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}/index.html`);
});