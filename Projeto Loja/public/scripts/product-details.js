document.addEventListener('DOMContentLoaded', function () {
    console.log(window.location.search)
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    console.log(productId);

    // Verificando se o ID do produto está presente na URL
    if (productId) {
        // Carregando os detalhes do produto com base no ID
        fetch('/public/data/products.json')
            .then(response => response.json())
            .then(data => {
                const product = findProductById(data, productId);

                if (product) {
                    // Atualiza os elementos HTML com os detalhes do produto
                    document.getElementById('productName').innerText = product.nome;
                    document.getElementById('productImage').src = product.imagem;
                    document.getElementById('productPrice').innerText = formatPrice(product.preco);
                    document.getElementById('productLocal').innerText = product.local || 'N/A';
                    document.getElementById('productCondition').innerText = product.condicao || 'N/A';
                    document.getElementById('productSize').innerText = product.tamanho || 'N/A';
                    document.getElementById('productType').innerText = product.tipo || 'N/A';
                    console.log(productId);
                } else {
                    console.error('Produto não encontrado');
                }
            })
    } else {
        console.error('ID do produto não encontrado na URL');
    }
});

function formatPrice(price) {
    return `R$ ${price.toLocaleString('pt-BR')}`;
}

function findProductById(data, productId) {
    for (const tipoProduto in data) {
        const productList = data[tipoProduto];
        console.log('Product List:', productList);
        const foundProduct = productList.find(product => String(product.id) === String(productId));

        console.log('Product ID:', productId);
        console.log('Found Product:', foundProduct);

        if (foundProduct) {
            return foundProduct;
        }
    }

    return null;
}