// Adicione uma referência à div onde os produtos serão exibidos
const productsContainer = document.querySelector('.box-containerP');

const fazendaProducts = document.getElementById('fazendasProducts');
const terrenoProducts = document.getElementById('terrenosProducts');
const kitnetProducts = document.getElementById('kitnetsProducts');
const seeAllProducts = document.getElementById('seeAllProducts');

function loadProducts(tipoProduto) { /* Carregar produtos por tipo escolhido */
    fetch('/public/data/products.json')
        .then(response => response.json())
        .then(data => {
            const productList = data[tipoProduto];


            // Limpa a lista de produtos
            productsContainer.innerHTML = '';

            // Adiciona os produtos à div box-containerP
            productList.forEach(product => {
                const container = document.createElement('div');
                container.className = 'containerP';

                container.innerHTML = `
                    <div class="iconP">
                        <img src="${product.imagem}" alt="" id="productImage">
                    </div>
                    <div class="containerInfoP">
                        <p id="productName">${product.nome}</p>
                        <p id="productType">${product.tipo.toUpperCase()}</p>
                        <p id="productPrice">${formatPrice(product.preco)}</p>
                        <a href="/product?id=${product.id}">VER</a>
                    </div>
                `;

                productsContainer.appendChild(container);
            });
        })
        .catch(error => console.error('Erro ao carregar produtos:', error));
}

// Função auxiliar para formatar o preço
function formatPrice(price) {
    return `R$ ${price.toLocaleString('pt-BR')}`;
}

let productType = localStorage.getItem('productType') || 1;

// Verifica se o elemento existe antes de adicionar o listener e escolhendo o tipo de produto que será carregado
if (fazendaProducts) {
    fazendaProducts.addEventListener('click', function changeProductType() {
        productType = 2;
        localStorage.setItem('productType', productType);
        loadProducts('fazendas');
    });
}

if (terrenoProducts) {
    terrenoProducts.addEventListener('click', function changeProductType() {
        productType = 3;
        localStorage.setItem('productType', productType);
        loadProducts('terrenos');
    });
}

if (kitnetProducts) {
    kitnetProducts.addEventListener('click', function changeProductType() {
        productType = 4;
        localStorage.setItem('productType', productType);
        loadProducts('kitnets');
    });
}

if (productType == 2){
    loadProducts('fazendas');
}
if (productType == 3){
    loadProducts('terrenos');
}
if (productType == 4){
    loadProducts('kitnets');
}



function loadAllProducts() { /* Carregando todos os produtos aleatóriamente, independente do tipo */
    fetch('/public/data/products.json')
        .then(response => response.json())
        .then(data => {
            // Limpa a lista de produtos
            productsContainer.innerHTML = '';

            // Cria um array para armazenar todos os produtos
            const allProducts = [];

            // Itera sobre todos os tipos de produtos
            Object.keys(data).forEach(tipoProduto => {
                const productList = data[tipoProduto];
                // Adiciona todos os produtos ao array
                allProducts.push(...productList);
            });

            // Embaralha a lista de produtos
            const shuffledProducts = shuffleArray(allProducts);

            // Adiciona os produtos à div box-containerP
            shuffledProducts.forEach(product => {
                const container = document.createElement('div');
                container.className = 'containerP';

                container.innerHTML = `
                    <div class="iconP">
                        <img src="${product.imagem}" alt="" id="productImage">
                    </div>
                    <div class="containerInfoP">
                        <p id="productName">${product.nome}</p>
                        <p id="productType">${product.tipo.toUpperCase()}</p>
                        <p id="productPrice">${formatPrice(product.preco)}</p>
                        <a href="/product?id=${product.id}">VER</a>
                    </div>
                `;

                productsContainer.appendChild(container);
            });
        })
        .catch(error => console.error('Erro ao carregar produtos:', error));
}

// Função para embaralhar um array (No caso minha lista de produtos)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

if (seeAllProducts){
    seeAllProducts.addEventListener('click', function changeProductType() {
        productType = 5;
        localStorage.setItem('productType', productType);
    })
}

if (productType == 5){
    loadAllProducts();
}

console.log(productType)



