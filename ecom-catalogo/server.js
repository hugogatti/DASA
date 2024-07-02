// Configuração do servidor para usar as Routes
const express = require('express');
const app = express();
const { sequelize } = require('./models');
const produtosRoutes = require('./routes/produtosRoutes');
const categoriaRoutes = require('./routes/categoriaRoutes');

app.use(express.json());

app.use('/produtos', produtosRoutes);
app.use('/categoria', categoriaRoutes);

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`O servidor está na porta ${PORT}`);
  });
});
