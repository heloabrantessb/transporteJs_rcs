//Fazendo as importações e declarações necessárias
const net = require("net");
const readline = require("readline");

const port = 8000;
const host = "localhost";

//configurando o readline, vindo do node.js, para que seja possivel ler as entradas do terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//função startClient que cria a conexão TCP e lida com as informações
function startClient(msg) {
  const client = net.createConnection({ port: port, host: host }, connection);

  function connection() {
    client.write(msg);
    client.end();
  }

  client.on('end', () =>{
    console.log("Mensagem enviada! \n desconectando do servidor...");
  })
}

//pede ao cliente que envie uma mensagem ao servidor e executa a função startClient como callback
rl.question("Digite uma mensagem para o servidor:", (msg) => {
  startClient(msg);
});