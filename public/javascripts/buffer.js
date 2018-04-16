//Node.js Buffer('缓冲区')
//一、Buffer实例与普通JavaScript字符串之间互相转换
//var str = 'runoob';

//const buf = Buffer.from(str,'ascii');
//console.log(buf.toString('hex'));
//console.log(buf.toString('base64'));

//二、Buffer类的创建
//const buf1 =Buffer.alloc(10);
//const buf2 = Buffer.alloc(10,1);
//const  buf3 = Buffer.allocUnsafe(10);
//const buf4 = Buffer.from([1,2,3]);
//const buf5 = Buffer.from(str);
//const buf6 = Buffer.from(str,'latin1');

//三、写入缓冲区
//buf = Buffer.alloc(256);
//len = buf.write("www.runoob.com");
//console.log('写入字节数：'+len);
//四、从缓冲区读取数据
/*
buf = Buffer.alloc(26);
for(var i=0;i<26;i++){
    buf[i]=i+97;
}
console.log(buf.toString('ascii'));
console.log(buf.toString('ascii',0,5));
console.log(buf.toString('utf8',0,5));
console.log(buf.toString(undefined,0,5));*/

//五、将Buffer转换成JSON对象
/*const buf = Buffer.from([0x1,0x2,0x3,0x4,0x5]);
const json = JSON.stringify(buf);
console.log(json);
const copy = JSON.parse(json,(key,value)=>{
    return value && value.type === 'Buffer' ? Buffer.from(value.data):value;
});
console.log(copy);*/

//六、缓冲区合并
/*var buffer1 = Buffer.from('thl');
var buffer2 = Buffer.from(' hualian');
var buffer3 = Buffer.concat([buffer1,buffer2]);
console.log('buffer3 内容：'+buffer3);*/

//七、缓冲区比较
/*
var str1  = Buffer.from('ABCD');
var str2 = Buffer.from('ABCD');
var result = str1.compare(str2);
if(result < 0){
  console.log(str1 + '在' + str2 +'之前');
}else if(result == 0){
    console.log(str1 + '与' + str2 +'相同');
}else{
    console.log(str1 + '在' + str2 +'之后');
}*/
//八、缓冲区拷贝
/*var buf1 = Buffer.from('abcdefghijkl');
var buf2 = Buffer.from('ABCzzz');
buf2.copy(buf1,0,0,3);
console.log(buf1.toString());*/

//九、缓冲区裁剪
/*var str = Buffer.from('abcdefghijkl');
//裁剪缓冲区
var newStr = str.slice(0,3);
console.log(newStr.toString());*/

//十、缓冲区长度
var bufer = Buffer.from('tangHualian');
console.log('the length of buffer is:'+bufer.length);

