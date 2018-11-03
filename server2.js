var http= require('http');
var fs=require('fs');//파일 읽고 쓰게 해주는 모듈 경로 지정 할 필요 없이 모듈 이름만 쓰면됨//파일 생성도 가능함
//웹페이지 없을 때 404 response
function send404Response(response) {
    response.writeHead(404,{"Content-Type":"text/plain"});
    response.write("404Error: sorry");
    response.end();
}
//사용자 요구에 응답처리하기
function onRequest(request,response){
    if(request.method=='GET'&& request.url=='/'){
        response.writeHead(200,{"Content-Type":"text/html"});
        fs.createReadStream("./index.html").pipe(response);
    }
    else{
        //파일이 없을 경우
        send404Response(response);
    }
    
}

http.createServer(onRequest).listen(8888);// 사용자가 요구하는 것을 들음
console.log('서버가 돕니다');

