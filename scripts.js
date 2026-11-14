const btnMenuMobile = document.querySelector(".btn-menu-mobile")
const menuMobile = document.querySelector(".menu-mobile")
const carrosel = document.querySelector(".conteiner-carrosel")
const btnPrev = document.querySelector(".prev")
const btnNext = document.querySelector(".next")
const copo = document.querySelector(".copo")
const badgeFavorit = document.querySelector(".badge-favorit")
const nomeCopo = document.querySelector(".nome-copo")
const textAboutGlass = document.querySelector(".text-about-glass")
const listFeatures = [
    document.querySelector(".feature1"),
    document.querySelector(".feature2"),
    document.querySelector(".feature3")
]
const linkBtn = document.querySelector(".btn-copo.principal-cta-btn.link-btn-cta")

window.addEventListener('resize', () => {
    widthViewport = window.innerWidth
})

//BTN menu mobile
let menuOpen = false
btnMenuMobile.addEventListener("click", () => {
    if (!menuOpen) {
        btnMenuMobile.querySelector("i").className = "bi bi-x-lg"
        menuMobile.style.top = "4.5rem"
        menuOpen = true
    } else {
        btnMenuMobile.querySelector("i").className = "bi bi-list"
        menuMobile.style.top = "-20rem"
        menuOpen = false
    }
})

//Produtos do carrosel
const produtos = [
    {
        favorit: true,
        nome: "Copo 500ML",
        img: "IMGs/copo-500ml.png",
        desc: "Copo de 500ml do nosso açaí cremoso.",
        features: [
            "Acompanhamentos grátis",
            "Frutas frescas",
            "Turbine com adicionais"
        ],
        linkCopo: "#"
    },
    {
        favorit: true,
        nome: "Copo 300ML",
        img: "IMGs/copo-300ml.png",
        desc: "Perfeito para matar a vontade com um açaí cremoso na medida certa.",
        features: [
            "Acompanhamentos grátis",
            "Frutas frescas",
            "Monte do seu jeito"
        ],
        linkCopo: "#"
    },
    {
        nome: "Copo 700ML",
        img: "IMGs/copo-700ml.png",
        desc: "Ideal para quem quer aproveitar um açaí completo e bem recheado.",
        features: [
            "Mais espaço para adicionais",
            "Frutas frescas",
            "Turbine sem limites"
        ],
        linkCopo: "#"
    },
    {
        nome: "Combo família",
        img: "IMGs/combo-familia.png",
        desc: "Perfeito para dividir com quem você gosta e aproveitar juntos.",
        features: [
            "Porção maior para compartilhar",
            "Vários acompanhamentos",
            "Ideal para família e amigos"
        ],
        linkCopo: "#"
    }
]

let index = 0
let intervalo

//Funções do carrosel
function atualizarCarrossel() {
    const produto = produtos[index]

    carrosel.classList.add("fade-efeito")

    if (produto.favorit) {
        badgeFavorit.style.display = "flex"
    } else {
        badgeFavorit.style.display = "none"
    }

    copo.src = produto.img
    nomeCopo.textContent = produto.nome
    textAboutGlass.textContent = produto.desc

    listFeatures.forEach((item, i) => {
        item.textContent = produto.features[i]
    })
    linkBtn.href = produto.linkCopo

    setTimeout(() => {
        carrosel.classList.remove("fade-efeito")
    }, 400)
}

function proximoSlide() {
    index = (index + 1) % produtos.length
    atualizarCarrossel()
}

function iniciarCarrosel() {
    pausarCarrosel()
    const tempo = window.innerWidth <= 480 ? 7800 : 5700
    intervalo = setInterval(proximoSlide, tempo)
}

window.addEventListener('resize', () => {
    iniciarCarrosel()
})

function pausarCarrosel() {
    clearInterval(intervalo)
}

btnNext.addEventListener("click", () => {
    pausarCarrosel()
    proximoSlide()
    iniciarCarrosel()
})

btnPrev.addEventListener("click", () => {
    if (index === 0) {
        index += produtos.length - 1
        pausarCarrosel()
        atualizarCarrossel()
        iniciarCarrosel()
    } else {
        index -= 1
        pausarCarrosel()
        atualizarCarrossel()
        iniciarCarrosel()
    }
})

carrosel.addEventListener("mouseenter", pausarCarrosel)
carrosel.addEventListener("mouseleave", iniciarCarrosel)

atualizarCarrossel()
iniciarCarrosel()

//Esquema de repetição de estrelas na seção de depoimentos
const avaliationStars = document.querySelectorAll(".destaque.estrelas")
avaliationStars.forEach((avaliation) => {
    avaliation.innerHTML = `<i class="bi bi-star-fill"></i>`.repeat(5)
})
