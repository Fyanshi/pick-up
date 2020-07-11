/*
 * @Description:  
 * @Author: jinhua
 * @Date: 2020-07-11 18:59:14
 * @FilePath: \github\pick-up\websocket\serve.js
 */


var webSocketServe = require('ws').Server;

var wsS = new webSocketServe({ port: 8889 });

wsS.on('connection', function(ws) {
    console.log('连接', ws);
    ws.on('message', function(message) {
        console.log(message);
    });
});