//프레임워크 connect와 express알아보기
var connect=require('connect');
var http=require('http');
var app=connect();//웹 사이트 접속시 반응하게끔

function doOne(request,response,next){
    console.log("do one");
    next();
}
function doTwo(request,response){
    console.log("do two");
}
app.use(doOne);
app.use(doTwo);

http.createServer(app).listen(8888);
console.log('hi');
