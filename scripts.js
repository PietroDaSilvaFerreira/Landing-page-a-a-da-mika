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
        linkCopo: "https://www.ifood.com.br/delivery/esteio-rs/acai-da-mika-novo-esteio/19a2a773-f8d0-4fa4-810e-723dfc9657de?prato=8e43f920-defb-405f-9281-1c12080b6298"
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
        linkCopo: "https://www.ifood.com.br/delivery/esteio-rs/acai-da-mika-novo-esteio/19a2a773-f8d0-4fa4-810e-723dfc9657de?prato=6a4761a6-ab89-4bdc-8c69-92bfe44177b3"
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
        linkCopo: "https://www.ifood.com.br/delivery/esteio-rs/acai-da-mika-novo-esteio/19a2a773-f8d0-4fa4-810e-723dfc9657de?prato=4acb5ad4-9be0-40b6-bd2f-3831c762333e"
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
        linkCopo: "https://www.ifood.com.br/delivery/esteio-rs/acai-da-mika-novo-esteio/19a2a773-f8d0-4fa4-810e-723dfc9657de?prato=5a602ff8-a39e-4581-8d4d-8b04c5bc6ee4"
    }
]

let index = 0
let intervalo

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
    intervalo = setInterval(proximoSlide, 5700)
}

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

const avaliationStars = document.querySelectorAll(".destaque.estrelas")
avaliationStars.forEach((avaliation) => {
    avaliation.innerHTML = `<i class="bi bi-star-fill"></i>`.repeat(5)
})