const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http,{
    cors: {
        origin: true,
        credencitals: true,
        methods: ["GET", "POST"]
    }
});

io.on('connection', (socket)=>{
    console.log('nuevo usuario conectado');
});

app.get('/',(req, res)=>{
    res.send('<h1>Hola mundo</h1>')
});

http.listen(3000,()=>{
    console.log("Escuchando en pierto 3000")
})