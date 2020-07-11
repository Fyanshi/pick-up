# Web Sockets

在用户的浏览器和服务器之间打开交互式通信会话
在Javascript中创建了Web Sockets 之后，会有一个HTTP请求发送到浏览器已发起连接，在取得服务器响应后，建立的连接会使用HTTP升级从HTTP协议交换为Web Sockets协议
使用标准的HTTP服务器无法实现Web Sockets，只要支持这种协议的专门服务器才能正常工作

[使用文档](https://developer.mozilla.org/zh-CN/docs/Web/API/WebSockets_API)
[demo](./index.html)
[serve](./serve.js)

## URL

### 未加密

- ws://

### 加密

- wss://

## 创建

### var socket = new WebSocket("ws://www.examle.com/serve.js")

- readyState（表示当前状态）

	- WebSocket.OPENING(0)

		- 正在建立连接

	- WebSocket.OPEN(1)

		- 已经建立连接

	- WebSocket.CLOSING(2)

		- 正在关闭连接

	- WebSocket.CLOSE(3)

		- 已经关闭连接

- 事件

	- open

		- socket.onopen

			- 连接建立时候触发

	- message

		- socket.onmessage

			- 客户端接收服务端数据时触发

	- error

		- socket.onerror

			- 通信发生错误时候触发

	- close

		- socket.onclose

			- 连接关闭时触发

- 方法

	- socket.send()

		- 使用连接发送数据

	- socket.close()

		- 关闭连接

- 案例
   
```
    function webSocket(){
        if('WebSocket' in window){
            // 浏览器支持 WebSocket
            var ws = new WebSocket(ws://localhost:9998/serve.js);
            //打开
            ws.onopen  = function(){
                // 连接成功
                ws.send('发送数据');

            }
            //接收消息
            ws.onmessage= function(msg){
                //接收数据
            }
            //关闭
            ws.onclose = function(){
                //
            }
            // 报错
            ws.onerror = function(err){}
        }
    }
```




