var express = require('express')
var aplicacion = express();
//var socket = require('socket.io')
const net = require('net')
const server = require('http').Server(aplicacion)
const socket = require('socket.io')(server)

var HOST = '192.168.137.90';
var PORT = 3003;

// server.listen(PORT, function () {
//     console.log('Servidor activo '+ PORT +':'+ HOST)
// });

var ser=net.createServer(function(so){
    // so.on('connect', function(){
    //     console.log('Usuario Nuevo')
    // })
    console.log('Usuario Nuevo')
    console.log(so)
    so.on('data', function(data){
        console.log(data)
    })

    so.on('close', function(data){
        console.log('Usuario desconectado')
    })
});

ser.listen(PORT, HOST)

console.log('Hola node')