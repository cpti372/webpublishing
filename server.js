var http= require('http');

function onRequest(request,response){
    console.log('사용자가 request합니다'+request.url);
    response.writeHead(200,{"Context-type":"text/plain"});//200은 접속이 정상
    response.write('this is server response(data...)');
    response.end();
}

http.createServer(onRequest).listen(8888);// 사용자가 요구하는 것을 들음
console.log('서버가 돕니다');

