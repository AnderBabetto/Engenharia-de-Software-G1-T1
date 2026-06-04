// backend/server.js
const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    if (req.url === '/api/dispositivos') {
        res.end(JSON.stringify({ 
            mensagem: 'API EcoTrack Energy - ODS 7 rodando',
            dispositivos: [] 
        }));
    } else {
        res.end(JSON.stringify({ erro: 'Rota não encontrada' }));
    }
});

server.listen(PORT, () => {
    console.log(`Servidor Node.js rodando na porta ${PORT}`);
});