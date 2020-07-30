var socket = io();

socket.on('connect', function() {
    console.log('Conectado al servidor');
});

// Para escuchar
socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
});

// Para enviar información
socket.emit('enviarMensaje', {
    usuario: 'Salvador',
    mensaje: 'Hola Mundo'
}, function(respuesta) {
    console.log('Respuesta Server: ', respuesta);
});

// Para escuchar información
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);
});