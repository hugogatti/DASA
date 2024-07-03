document.addEventListener('DOMContentLoaded', () => {
    const sendFormData = (url, method, data) => {
        fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            alert('Operação realizada com sucesso!');
            console.log(data);
        })
        .catch(error => console.error('Erro:', error));
    };

    // Exemplo de como capturar dados do formulário e enviar para o backend
    document.getElementById('categoriaForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const nomeCategoria = document.getElementById('nomeCategoria').value;
        const descCategoria = document.getElementById('descCategoria').value;
        const categoriaData = { nomeCategoria, descCategoria };
        sendFormData('/categorias', 'POST', categoriaData);
    });

    document.getElementById('produtoForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const nomeProduto = document.getElementById('nomeProduto').value;
        const descProduto = document.getElementById('descProduto').value;
        const precoProduto = document.getElementById('precoProduto').value;
        const IDCategoria = document.getElementById('IDCategoria').value;
        const IDProprietario = document.getElementById('IDProprietario').value;
        const produtoData = { nomeProduto, descProduto, precoProduto, IDCategoria, IDProprietario };
        sendFormData('/produtos', 'POST', produtoData);
    });
});
