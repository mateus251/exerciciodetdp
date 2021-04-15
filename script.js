//SERVIÇO SAUDAÇÃO
var http = require('http');
var url = require('url');

//criando um objeto do tipo servidor
http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type':'text/html'}); //monta o cabeçalho da página web
    
    var q = url.parse(req.url, true).query; //recebe um objeto url para consulta
    var txt = q.n1 + q.n2; //consultando um atributo da url, no caso chamado nome
    var txt2 = "Resultado: " + q.txt; //consultando um atributo da url, no caso chamado nome
    res.end(txt2); //imprime o texto na tela
}).listen(4000); //porta de conexão