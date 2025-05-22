//importações e declarações necessárias
const net = require('net');
const port = 8000;

//cria a conexão TCP passando uma função que lida com as informações
const server = net.createServer(connection);

// função que avisa que um cliente está conectado, trata com informações 
// caso o cliente mande e trata a desconexão do cliente
function connection(socket){
    console.log('Cliente conectado!');

    socket.on('data', (data) =>{
        console.log("mensagem do cliente: " + data.toString());
        
    })

    socket.on('end', () =>{
        console.log("Cliente desconectado!");
    })
}

//pede pro servidor ouvir a porta definida e avisar que o servidor está rodando
server.listen(port, () =>{
    console.log("Servidor rodando")
})

