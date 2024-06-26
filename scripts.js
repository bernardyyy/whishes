const products = [
    {
        name: "LACOSTE OMBRÉ EFFECT ALPACA WOOL SWEATER",
        image: "img/lala.png",
        tag: "fashion",
        link: "https://www.lacoste.com/us/lacoste/men/clothing/sweaters-sweatshirts/men-s-ombre-effect-alpaca-wool-sweater/AH5664-51.html"
    },
    {
        name: "MOTOMAMI 1899 JSY M MATCH",
        image: "img/motomami.png",
        tag: "fashion",
        link: "https://store.fcbarcelona.com/products/motomami-1899-jsy-m-match"
    },
    {
        name: "Maison Margiela Tabi leather loafers",
        image: "img/tabi.png",
        tag: "fashion",
        link: "https://www.farfetch.com/pt/shopping/men/maison-margiela-tabi-leather-loafers-item-22404204.aspx?storeid=9462"
    },
    {
        name: "Eye Jacket PIET Orange w/ Prizm Snw Sapp",
        image: "img/piet.png",
        tag: "fashion",
        link: "https://piet.com.br/collections/piet-oakley-23"
    },
    {
        name: "Poltrona Paulistano Paulo Mendes da Rocha",
        image: "img/paulo-mendes.png",
        tag: "interior",
        link: "https://loja.casadaarquitectura.pt/en/product/cadeira-paulistano-paulo-mendes-da-rocha"
    },
    {
        name: "arca x lengua i",
        image: "img/arca.png",
        tag: "books",
        link: "https://mutant.ochre.store/"
    },
    {
        name: "Pacha x Pompeii Football Kit",
        image: "img/pacha.png",
        tag: "fashion",
        link: "https://www.pompeiibrand.com/products/pacha-football-kit"
    },
    {
        name: "Artemide nessino",
        image: "img/lampada.png",
        tag: "interior",
        link: "https://www.artemide.com/en/subfamily/23264/nessino"
    },
    {
        name: "Football: Designing the Beautiful Game",
        image: "img/fut.png",
        tag: "books",
        link: "https://www.amazon.com/Football-Designing-Beautiful-Eleanor-Watson/dp/1872005616"
    },
    {
        name: "Pellador Inter Knit",
        image: "img/pellador.png",
        tag: "fashion",
        link: "https://www.pompeiibrand.com/products/pacha-football-kit"
    },
   
    {
        name: "Virgil Abloh. Nike. ICONS",
        image: "img/virgil-abloh.png",
        tag: "books",
        link: "https://www.taschen.com/en/books/fashion/08018/virgil-abloh-nike-icons"
    },
    {
        name: "DJ RAMON SUCESSO - SEXTA DOS CRIAS",
        image: "img/dj-ramon.png",
        tag: "music",
        link: "https://www.intercommunalmusic.com/produtos/dj-ramon-sucesso-sexta-dos-crias/"
    },
    {
        name: "Wassily Chair",
        image: "img/wassily chair.png",
        tag: "interior",
        link: "https://www.knoll.com/product/wassily-chair"
    },
    {
        name: "Black Country, New Road — Live at Bush Hall",
        image: "img/black-country.png",
        tag: "music",
        link: "https://black-country-new-road.myshopify.com/products/live-at-bush-hall-lp-bcn"
    },
    {
        name: "LIGHTNING MCQUEEN crocs",
        image: "img/crocs.png",
        tag: "fashion",
        link: "https://www.crocs.com/p/disneypixar-lightning-mcqueen-adult-clog/205759.html"
    },
    {
        name: "aphex twin - syro",
        image: "img/aphex twin.png",
        tag: "music",
        link: "https://aphextwin.warp.net/release/71106-aphex-twin-syro"
    },
    {
        name: "Rave Logos",
        image: "img/rave_logo.png",
        tag: "books",
        link: "https://www.counter-print.co.uk/collections/all-books/products/rave-logos"

    },

    {
        name: "Apartamento Bag Travel",
        image: "img/apartamento.png",
        tag: "fashion",
        link: "https://www.apartamentomagazine.com/product/apartamento-travel-bag/"

    },
    {
        name: "Comme des Garçons Homme Plus",
        image: "img/cdg.png",
        tag: "fashion",
        link: "https://www.farfetch.com/pt/shopping/men/comme-des-garcons-homme-plus-pleat-detail-tailored-shorts-item-23278702.aspx?storeid=9671&rtype=inspire_portal_plp_generic_a&rpos=2&rid=9e309a06-0e4f-438e-b436-a51f4d3707cf"

    },
    {
        name: "FOOTBALL — Middle East Archive",
        image: "img/football-mea.png",
        tag: "books",
        link: "https://middleastarchive.com/product/football-%d9%83%d8%b1%d8%a9-%d8%a7%d9%84%d9%82%d8%af%d9%85/"
    }
    

    // Adicione mais produtos conforme necessário
];

// Função para gerar o HTML dos produtos
function generateProductHTML(product) {
    return `
        <a class="card" data-tag="${product.tag}" href="${product.link}" target="_blank">
            <div class="card-img">
                <img src="${product.image}">
            </div>
            <div class="card-txt">
                <button class="btn ${product.tag}" data-tag="${product.tag}">${product.tag}</button>
                <h1 class="title">${product.name}</h1>
            </div>
        </a>
    `;
}

// Gerar HTML dos produtos e adicioná-los ao documento
document.addEventListener("DOMContentLoaded", function() {
    const cardContainer = document.querySelector(".card-container");

    products.forEach(product => {
        const productHTML = generateProductHTML(product);
        cardContainer.insertAdjacentHTML("beforeend", productHTML);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const cardsContainer = document.querySelector(".card-container");

    // Embaralha os cards quando a página é carregada
    shuffleCards(cardsContainer);

    // Função para embaralhar os elementos de um container
    function shuffleCards(container) {
        for (let i = container.children.length; i >= 0; i--) {
            container.appendChild(container.children[Math.random() * i | 0]);
        }
    }
});
document.addEventListener("DOMContentLoaded", function() {
    const filterButtons = document.querySelectorAll("#tags .btn");
    const cards = document.querySelectorAll(".card");

    // Adiciona o evento de clique a cada botão de filtro
    filterButtons.forEach(button => {
        button.addEventListener("click", function() {
            const tag = this.getAttribute("data-tag");
            filterItems(tag);
        });
    });

    // Função para filtrar os itens com base na tag
    function filterItems(tag) {
        cards.forEach(card => {
            const cardTag = card.getAttribute("data-tag");
            if (tag === "all" || cardTag === tag) {
                card.classList.remove("hidden");
            } else {
                card.classList.add("hidden");
            }
        });
    }
});
