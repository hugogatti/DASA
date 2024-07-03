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
        })
        .catch(error => {
            alert('Erro ao realizar a operação: ' + error.message);
        });
    };

    // Cadastro de Produto
    const produtoForm = document.getElementById('produtoForm');
    if (produtoForm) {
        produtoForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(produtoForm);
            const data = Object.fromEntries(formData.entries());
            sendFormData('/products', 'POST', data);
        });
    }

    // Cadastro de Categoria
    const categoriaForm = document.getElementById('categoriaForm');
    if (categoriaForm) {
        categoriaForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(categoriaForm);
            const data = Object.fromEntries(formData.entries());
            sendFormData('/categories', 'POST', data);
        });
    }

    // Associação de Produto a Categoria
    const associarForm = document.getElementById('associarForm');
    if (associarForm) {
        associarForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(associarForm);
            const data = Object.fromEntries(formData.entries());
            sendFormData('/products/associate', 'POST', data);
        });
    }
});