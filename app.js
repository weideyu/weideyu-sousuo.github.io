const connectHistoryApiFallback = require('connect-history-api-fallback');
const express = require('express');
const cors=require('cors')
const app = express();

var server = require('http').createServer(app)

app.use(cors())

app.get('/ccxs', function (req, res) {
    console.log(123);
    res.send('sccc')
})
server.listen(1234, function () {
    var host = server.address().address
    var port = server.address().port
    console.log('应用实例，访问地址为 http://127.0.0.1:1234')
})
// 由js控制路由，一定要写在express.static前面！！！
app.use('/', connectHistoryApiFallback())
app.use(express.static('./dist'))


app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html')
})