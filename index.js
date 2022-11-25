
const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);


io.on('connection',(socket)=>{
    console.log("Nuevo cliente conectado")
    socket.emit('CONEXION ESTABLECIDA','CONEXION')

    socket.on('OK',(smsInfo)=>{
      console.log("Enviando Mensaje...")
      socket.emit('OK','OK')
    })

    
  
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
  
  

})





app.get('/', (req, res) => {
  res.send('<h1>Socket Corriendo...</h1>');

});

http.listen(3000, () => {
  console.log('listening on *:3000');
});
