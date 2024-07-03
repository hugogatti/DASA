// Configuração do servidor para usar as Routes
const express = require('express');
const app = express();
const port = 3000;

const categoriaRoutes = require('./routes/categoriaRoutes');
const produtoRoutes = require('./routes/produtosRoutes'); // Certifique-se de que o nome do arquivo e o caminho estão corretos

app.use(express.json());
app.use('/categorias', categoriaRoutes);
app.use('/produtos', produtoRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
