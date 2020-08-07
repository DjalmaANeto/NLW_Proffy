//servidor 
const express = require('express')
const server = express()

//importando pages
const {
    pageLanding, 
    pageStudy,
    pageGiveClasses
} = require('./pages')

//configurar nunjucks(tamplete engine node/html)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server, 
    noCache: true,

})

//inicio e configuração do servidor
server
//configurar arquivos estáticos (css, scripts, imagens)
.use(express.static("public"))
//rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.listen(5500)

