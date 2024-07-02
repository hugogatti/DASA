# DASA - Teste Analista de Engenharia de Software
Hugo Gatti Ferreira de Souza, 27 Anos

# Desenvolvimento de API para Gerenciamento de Catálogo de Produtos
Neste projeto, desenvolvemos uma API utilizando Node.js para gerenciar o catálogo de produtos de um aplicativo de e-commerce.
A API permite aos usuários cadastrar produtos e categorias, associar produtos a categorias, atualizar e excluir produtos e categorias
, além de garantir que cada produto esteja associado a apenas uma categoria por vez.

# Modelos e Associação
Foram criados dois modelos principais: Produtos e Categoria, ambos definidos utilizando o Sequelize, um ORM para Node.js.
- Produto: Representa um produto no catálogo, contendo informações como título, descrição, preço, ID da categoria associada e ID do proprietário.
- Categoria: Representa uma categoria, contendo título, descrição e ID do proprietário.
Cada produto pertence a uma categoria, e uma categoria pode ter vários produtos associados a ela. Essas associações foram definidas nos arquivos dos modelos.

# Configuração do Sequelize
A configuração do Sequelize foi feita no arquivo models/index.js, onde os modelos são importados e associados.

# ROTAS DA API
Duas rotas principais foram criadas: produtosRoutes.js e categoriaRoutes.js, responsáveis por gerenciar os endpoints relacionados a produtos e categorias, respectivamente.

# INICIALIZAÇÃO DO SERVIDOR
O servidor foi inicializado no arquivo server.js, onde as rotas foram configuradas e o Sequelize foi sincronizado com o banco de dados.

# CONCLUSÃO
Este projeto de API permite um gerenciamento eficaz do catálogo de produtos, com funcionalidades para criar, atualizar, excluir e associar produtos e categorias.
O uso do Sequelize facilita a interação com o banco de dados SQLite, e a estrutura modular do código garante a escalabilidade e manutenção futura do projeto.
