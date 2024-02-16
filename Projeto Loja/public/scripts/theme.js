const getElementByIdSimple = (id) => document.getElementById(id);  /* Fazendo uma função para pegar os ids mais fácil */

const elements = {
    themeIcon: 'themeIcon',
    entrarIcon: 'boxEntrar',
    signupIcon: 'boxCadastrar',
    boxFazenda: 'boxFazenda',
    boxTerreno: 'boxTerreno',
    boxKitnet: 'boxKitnet',
    iconCasa: 'iconCasa',
    aboutIcon: 'aboutIcon',
    returnBtn: 'returnBtn',
};

let count = parseInt(window.localStorage.getItem("themeCount")) || 1;

const buttonTheme = getElementByIdSimple('themeChanger');

buttonTheme.addEventListener('click', (event) => {
    event.preventDefault();
    count++;
    window.localStorage.setItem('themeCount', count.toString()); /* Salvando a variável count para que o tema não mude quando mudar de página */
    changeTheme();
});

function setElementSrc(elementId, src) { /* Criando função para eu conseguir definir os sources de cada elemento mais facilmente */
    const element = getElementByIdSimple(elementId);
    if (element) {
        element.src = src;
    }
}

// Aplicar o tema ao carregar o script
changeTheme();

function changeTheme() {
    const themePath = count % 2 === 0 ? 'theme01' : '';

    document.documentElement.style.setProperty("--corFundo", count % 2 === 0 ? "linear-gradient(to bottom, black, black, #02A9EA)" : "linear-gradient(to bottom, white, white, #2ec4b574)");
    document.documentElement.style.setProperty("--cor01", count % 2 === 0 ? "#0C0F30" : "#032612");
    document.documentElement.style.setProperty("--cor02", count % 2 === 0 ? "#1D2575" : "#009688");
    document.documentElement.style.setProperty("--cor03", count % 2 === 0 ? "#3D4CF5" : "#00E3CC");
    document.documentElement.style.setProperty("--corFonte01", "white");
    document.documentElement.style.setProperty("--corFonte02", count % 2 === 0 ? "white" : "black");
    document.documentElement.style.setProperty("--corFonte03", "#BCC5CE");

    setElementSrc(elements.themeIcon, `public/medias/images/${themePath}/TEMA.png`);
    setElementSrc(elements.entrarIcon, `public/medias/images/${themePath}/entrarIcon.svg`);
    setElementSrc(elements.signupIcon, `public/medias/images/${themePath}/signupIcon.svg`);
    setElementSrc(elements.boxFazenda, `public/medias/images/${themePath}/boxFazenda.svg`);
    setElementSrc(elements.boxTerreno, `public/medias/images/${themePath}/boxTerreno.svg`);
    setElementSrc(elements.boxKitnet, `public/medias/images/${themePath}/boxKitnet.svg`);
    setElementSrc(elements.iconCasa, `public/medias/images/${themePath}/iconCasa.svg`);
    setElementSrc(elements.aboutIcon, `public/medias/images/${themePath}/aboutIcon.svg`);
    setElementSrc(elements.returnBtn, `public/medias/images/${themePath}/returnBtn.svg`);
}

//Parte não relacionada ao tema e sim ao menu fixo mobile

document.addEventListener("DOMContentLoaded", function () {
    var header = document.getElementById("header");
    var headerHeight = header.clientHeight; 

    window.addEventListener("scroll", function () {
        if (window.pageYOffset > headerHeight) {
            header.classList.add("fixed-header");
        } else {
            header.classList.remove("fixed-header");
        }
    });
});

const menuMobile = document.querySelector('.menuMobile');
const menuMobileContent = document.querySelector('.menuMobileContent');

function showMenuMobile() {
    if (menuMobileContent.style.display === '' || menuMobileContent.style.display === 'none') {
        menuMobileContent.style.display = 'flex';
    } else {
        menuMobileContent.style.display = 'none';
    }

}
