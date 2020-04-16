// usei o express para configurar e criar meu servidor
const express = require ('express')
const server = express()


const ideas = [
    {
        img: "https://image.flaticon.com/icons/svg/2813/2813245.svg",
        title: "Cursos de programação",
        category: "Estudo",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit dolorem error nesciunt eum eius",
        url: "http://rocketseat.com.br"
    },

    {
        img: "https://image.flaticon.com/icons/svg/2813/2813245.svg",
        title: "Cursos de programação",
        category: "Estudo",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit dolorem error nesciunt eum eius",
        url: "http://rocketseat.com.br"
    },

    {
        img: "https://image.flaticon.com/icons/svg/2813/2813245.svg",
        title: "Cursos de programação",
        category: "Estudo",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit dolorem error nesciunt eum eius",
        url: "http://rocketseat.com.br"
    },

    {
        img: "https://image.flaticon.com/icons/svg/2813/2813245.svg",
        title: "Cursos de programação",
        category: "Estudo",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit dolorem error nesciunt eum eius",
        url: "http://rocketseat.com.br"
    },
]

// configurar arquivos estaticos (css, scripts, imagens)

server.use(express.static("public"))

// configuração do nunjucks

const nunjucks = require("nunjucks")
nunjucks.configure("views", {
    express: server,
    noCache: true
})

// criei uma rota /
// capturo o pedido do cliente para responder

server.get('/', function(req, res){

    const reversedIdeas = [...ideas].reverse()

    let lastIdeas = []
    for ( let idea of reversedIdeas) {
        if(lastIdeas.length < 2){
            lastIdeas.push(idea)
        }
    }


    return res.render("index.html", { ideas: lastIdeas })
})

server.get('/ideias', function(req, res){

    const reversedIdeas = [...ideas].reverse()

    return res.render("ideias.html", { ideas: reversedIdeas})
})
// liguei meu servidor na porta 3000
server.listen(3000)

