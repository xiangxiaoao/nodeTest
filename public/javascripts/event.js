//引入 events模块
//var events = require('events');
//创建eventEmitter对象
//var event = new events.EventEmitter();

var EventEmitter = require('events').EventEmitter;
var event = new EventEmitter();

//创建事件处理程序
var connectHandler = function connected(){
    console.log('连接成功。。。');

    event.emit('data_received');
};

//绑定connection事件处理程序
event.on('connection',connectHandler);

//使用匿名函数绑定data_received事件
event.on('data_received',function(){
    console.log('数据接收成功。。。');
});

//触发connection事件
event.emit('connection');

console.log('程序执行完毕！');